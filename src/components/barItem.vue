<!-- 仪表盘和柱状图的组合 -->
<script setup lang="ts">
import { reactive, ref, onMounted, watch, getCurrentInstance } from 'vue';
import instrumentPanelVue from '../components/instrument-panel-sm.vue';
import bar1 from '../components/bar-1.vue';
import * as _ from 'lodash';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
  yObj: {
    type: Object,
    required: true,
  },
});

const options = [
  {
    value: '名称正序',
    label: '名称正序',
  },
  {
    value: '名称倒序',
    label: '名称倒序',
  },
  {
    value: '优到差',
    label: '优到差',
  },
  {
    value: '差到优',
    label: '差到优',
  },
];
const colorObj =
  getCurrentInstance()?.appContext.config.globalProperties.$colorObj;

const setIconColor = (value: string) => {
  var returnColor: string = '#ddd';
  colorObj.forEach((element: any) => {
    if (element.name === value) {
      returnColor = element.value;
    }
  });
  return returnColor;
};
const itemData = reactive({
  sort: '名称正序',
  dataStatus: 1,
  itemValue: '良',
  sliderValue: '2022-10-20',
  obj: [],
});

// 响应式赋值

watch(
  () => itemData.sort,
  (newValue, oldValue) => {
    // 修改数据的排列顺序
    switch (newValue) {
      case '名称正序':
        itemData.obj = props.yObj;
        _.reverse(itemData.obj);
        break;
      case '名称倒序':
        itemData.obj = props.yObj;
        _.reverse(itemData.obj);
        break;

      case '优到差':
        itemData.obj = _.orderBy(
          props.yObj,
          ['transferValue', 'value'],
          ['desc', 'desc']
        );
        _.reverse(itemData.obj);
        // _.reverse(props.yObj);
        break;
      case '差到优':
        itemData.obj = _.orderBy(
          props.yObj,
          ['transferValue', 'value'],
          ['asc', 'asc']
        );
        _.reverse(itemData.obj);
        // _.reverse(props.yObj);
        break;
    }
  }
);
watch(
  () => props.yObj,
  (newValue, oldValue) => {
    // 修改数据的排列顺序
    itemData.obj = newValue;
    // 数据的变化 要同时 关联两个数组
    console.log(newValue, oldValue, '监听传递参数的变化');
  }
);

const emit = defineEmits<{
  (event: 'changeDate', str: string): void;
}>();

const echart = ref();
const changeDateFn = (str: string, num: number) => {
  emit('changeDate', str);
  itemData.dataStatus = num;
  echart.value.echartResize();
};

// 针对已绑定的页面 做三级路由跳转

const canUse = reactive({
  list: [
    {
      lable: '列车利用率',
      link: '/useRatio',
    },
    {
      lable: '平均满载率',
      link: '/loadFactor',
    },
    {
      lable: '列车最大满载率',
      link: '/maxLoadFactor',
    },
    {
      lable: '影响行车故障率',
      link: '/malfunction',
    },
    {
      lable: '列车服务可靠率',
      link: '/reliable',
    },
    {
      lable: '旅行速度',
      link: '/speed',
    },
    {
      lable: '超载区间占比',
      link: '/section',
    },
    {
      lable: '换乘系数',
      link: '/transfer',
    },
    {
      lable: '能力利用率',
      link: '/capacity',
    },
    {
      lable: '客运强度',
      link: '/strength',
    },
    {
      lable: '列车兑现率',
      link: '/cashCheck',
    },
    {
      lable: '列车正点率',
      link: '/onTime',
    },
    //
  ],
});

const usedPage = (val: string) => {
  canUse.list.forEach((item) => {
    if (val === item.lable) {
      router.push(item.link);
    }
  });
};

const userLink = (val: string) => {
  var str = '';
  canUse.list.forEach((item) => {
    if (val === item.lable) {
      str = 'link-text';
    }
  });
  return str;
};
// 2 4 6
// 88 99
</script>

<template>
  <div class="container">
    <h2>
      <span
        :class="userLink(props.obj.indexName)"
        @click="usedPage(props.obj.indexName)"
        >{{ props.obj.indexName }}</span
      >
      <span
        class="icon"
        :style="{ background: setIconColor(props.obj.rank) }"
        >{{ props.obj.rank }}</span
      >
      <span class="select-right-item">
        <span
          class="select-text"
          @click="changeDateFn('20221020', 1)"
          :class="{ active: itemData.dataStatus === 1 }"
          >历史数据</span
        >
        <span
          class="select-text"
          @click="changeDateFn('20221021', 2)"
          :class="{ active: itemData.dataStatus === 2 }"
          >今日数据</span
        >
      </span>
    </h2>
    <!-- 仪表盘 -->
    <div>
      <div class="bar-top-item">
        <div class="left">
          <instrumentPanelVue :obj="props.obj"></instrumentPanelVue>
          <!-- <p>全网平均满载率30</p> -->
        </div>

        <div class="right">
          <div class="date-slider">
            <el-date-picker
              v-model="itemData.sliderValue"
              type="date"
              placeholder="选择日期"
              format="YYYY-MM-DD"
              size="small"
              value-format="YYYY-MM-DD"
            >
            </el-date-picker>
          </div>
          <el-select
            v-model="itemData.sort"
            class="m-2"
            placeholder="Select"
            size="small"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <!-- <el-slider
            class="date-slider"
            range
            v-model="itemData.sliderValue"
            :step="10"
            show-stops
          /> -->
        </div>
      </div>
    </div>
    <!-- {{ props.yObj }} -->
    <!-- 柱形图 -->
    <bar-1 :yObj="itemData.obj" ref="echart"></bar-1>
    <!-- <div class="panel" ref="panel" id="panel"></div> -->
  </div>
</template>

<style lang="less" scoped>
h2 {
  padding: 0 0 0 20px;
  margin: 0;
  color: #fff;
  font-size: 22px;
  line-height: 44px;
  border-bottom: 1px solid #3ae3ff;
}
.icon {
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: #00cc92;
  color: #fff;
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  vertical-align: middle;
  margin: 0 4px;
}
.date-slider {
  // width: 280px;
  padding-top: 20px;
  padding-right: 20px;
}
.m-2 {
  width: 100px;
  padding-top: 14px;
  margin-right: 20px;
}

:deep(.el-input__wrapper) {
  background-color: #09204e;
  box-shadow: 0 0 0 1px #3ae3ff;
}
:deep(.el-input__inner) {
  color: #3ae3ff !important;
}
:deep(.el-input .el-select__caret.el-icon) {
  color: #3ae3ff;
}
.select-right-item {
  float: right;
}
.select-text.active {
  color: #3ae3ff;
  border-bottom: 2px solid #3ae3ff;
}
.select-text {
  color: #fff;
  font-size: 16px;
  margin: 0 10px;
  border-bottom: 2px solid transparent;
  padding-bottom: 9px;
  cursor: pointer;
}
.bar-top-item {
  display: flex;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  .left {
    flex: 1;
    height: 120px;
    p {
      padding: 0;
      margin: 0;
      width: 200px;
      text-align: center;
      font-size: 12px;
    }
  }
  .right {
    flex: 4;
    text-align: right;
    height: 120px;
  }
}
.link-text {
  text-decoration: underline;
  cursor: pointer;
  position: relative;
}
</style>
