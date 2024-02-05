<!-- 仪表盘和柱状图的组合 -->
<script setup lang="ts">
import { reactive, ref, onMounted, watch, getCurrentInstance } from 'vue';
import instrumentPanelVue from './instrument-panel-large.vue';
import { useRouter } from 'vue-router';
import * as echarts from 'echarts';
import dayjs from 'dayjs';
import bar from './bar-large.vue';
const lineData = reactive({});

const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  handleClickData('今日');
});
const value1: any = ref([]);
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

const itemData = reactive({
  sort: '名称正序',
  dataStatus: 1,
  itemValue: '良',
  sliderValue: '2022-10-20',
  obj: props.obj.data,
});

// const emit = defineEmits<{
//   (event: 'changeSort', obj: object): void;
// }>();

const emit = defineEmits(['changeSort', 'change']);

watch(
  () => itemData.sort,
  (newValue, oldValue) => {
    emit('changeSort', {
      sortName: newValue,
      targetKey: props.obj.targetKey,
    });

    console.log(newValue, oldValue, '测试监听sort');
    // 调整排序方式
    // 修改数据的排列顺序
  }
);

const router = useRouter();
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

const handleSelect = (str: string) => {
  router.push(str);
};

const handleClickData = (str: string) => {
  let start: any = '';
  let end: any = '';
  switch (str) {
    case '今日':
      start = dayjs().add(-1, 'day').format('YYYY-MM-DD');
      end = dayjs().add(-1, 'day').format('YYYY-MM-DD');
      break;
    case '本周':
      start = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD');
      end = dayjs().endOf('week').add(1, 'day').format('YYYY-MM-DD');
      break;
    case '本月':
      start = dayjs().startOf('month').format('YYYY-MM-DD');
      end = dayjs().endOf('month').format('YYYY-MM-DD');
      break;
    case '本年':
      start = dayjs().startOf('year').format('YYYY-MM-DD');
      end = dayjs().endOf('year').format('YYYY-MM-DD');
      break;
  }
  value1.value = [start, end];
  emit('change', props.obj.indexName);
};
const pickerChange = () => {
  emit('change', props.obj.indexName);
};
</script>

<template>
  <div class="container">
    <!-- 仪表盘 -->
    <h2
      @click="handleSelect(props.obj.linkPage)"
      :class="props.obj.linkPage ? 'active' : ''"
    >
      {{ props.obj.indexName }}
      <!-- <span
        class="icon"
        :style="{
          background: setIconColor(props.obj.rank),
        }"
        >{{ props.obj.rank }}</span
      > -->
    </h2>
    <div>
      <div class="bar-top-item">
        <div class="left">
          <!-- {{ props.obj }} -->
          <div class="left date-line">
            <el-date-picker
              v-model="value1"
              type="daterange"
              start-placeholder="起始时间"
              end-placeholder="结束时间"
              @change="pickerChange"
            ></el-date-picker>
            <el-button size="small" @click="handleClickData('今日')"
              >前一日</el-button
            >
            <el-button size="small" @click="handleClickData('本周')"
              >本周</el-button
            >
            <el-button size="small" @click="handleClickData('本月')"
              >本月</el-button
            >
            <el-button size="small" @click="handleClickData('本年')"
              >本年</el-button
            >
            <!-- <instrumentPanelVue :obj="props.obj"></instrumentPanelVue> -->
          </div>
          <!-- <p>全网平均满载率30</p> -->
          <div class="right">
            <!-- <el-select
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
            </el-select> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 柱形图 -->
    <!-- {{ itemData.obj }} -->
    <bar :yObj="props.obj" ref="echart"></bar>
  </div>
</template>

<style lang="less" scoped>
.date-line {
  padding-top: 20px;
  padding-left: 10px;
  button {
    margin-left: 10px;
  }
}
h2 {
  padding: 0 0 0 20px;
  margin: 0;
  color: #fff;
  font-size: 22px;
  line-height: 44px;
  border-bottom: 1px solid #6e7283;
}
.active {
  text-decoration: underline;
  cursor: pointer;
}
.btn-line {
  padding-right: 20px;
  padding-top: 10px;
}
.bar-btn {
  background-color: #09204e;
  color: #3ae3ff;
  border: 1px solid #3ae3ff;
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
  padding-top: 20px;
  padding-right: 20px;
}
.m-2 {
  width: 100px;
  margin-top: 20px;
  margin-right: 20px;
}
.panel {
  width: 100%;
  height: 300px;
  display: block;
  margin: 0 auto;
}

.select-right-item {
  float: right;
}

.bar-top-item {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  position: relative;
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
    height: 220px;
    position: absolute;
    top: 0;
    right: 4px;
  }
}

:deep(.el-input__wrapper) {
  background-color: #7598eb57 !important;
  box-shadow: none;
  border: 1px solid#fff;
}
:deep(.el-input__wrapper .el-input__inner) {
  color: #fff !important;
}
:deep(.el-input .el-select__caret.el-icon) {
  color: #6e7283;
}
</style>
