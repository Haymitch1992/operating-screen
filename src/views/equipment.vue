<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/pageItem/barItem.vue';
import barItemChange from '../components/pageItem/barItem-change.vue';
import * as _ from 'lodash';
import { useRouter } from 'vue-router';
import { mainStore } from '../store/index';
import mainItem from '../components/pageItem/main-item.vue';
import linkItem from '../components/pageItem/link-item.vue';
const store = mainStore();
// 渲染数据
onMounted(() => {
  buildData();
});

//
const buildData = () => {
  let arr1: any = [];
  let arr2: any = [];
  let arr3: any = [];
  let arr4: any = [];
  let arr5: any = [];
  let arr6: any = [];
  let arr7: any = [];
  let num = 0;
  pageData.lineList.forEach((item: any) => {
    arr1.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (1000 - 50) + 50,
    });
    arr2.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.1 - 0.02) + 0.02,
    });
    arr3.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.02 - 0) + 0,
    });
    arr4.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.02 - 0) + 0,
    });
    arr5.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.02 - 0) + 0,
    });
    arr6.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.02 - 0) + 0,
    });
    let value = Math.random() * (8.8 - 8.1) + 8.1;
    arr7.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: value,
    });
    num += value;
  });
  num /= pageData.lineList.length;
  pageData.data1.data = arr1;
  pageData.data1.original = arr1;
  pageData.data2.data = arr2;
  pageData.data2.original = arr2;
  pageData.data3.data = arr3;
  pageData.data3.original = arr3;
  pageData.data4.data = arr4;
  pageData.data4.original = arr4;
  pageData.data5.data = arr5;
  pageData.data5.original = arr5;
  pageData.data6.data = arr6;
  pageData.data6.original = arr6;
  pageData.pageMain.data = arr7;
  pageData.pageMain.original = arr7;
  pageData.pageMain.transferValue = num;
};

const pageData: any = reactive({
  item1ShowNum: 1,
  item2ShowNum: 3,
  pageMain: {
    indexName: '设备指数',
    rank: '优',
    ratio: 1,
    value: 8.1,
    transferValue: Math.random() * (8.8 - 8.1) + 8.1,
    unit: 'number',
    fixed: 1,
    data: [],
    original: [],
  },
  lineList: [
    { label: '1-八通线' },
    { label: '2号线' },
    { label: '5号线' },
    { label: '6号线' },
    { label: '7号线' },
    { label: '8号线' },
    { label: '9号线' },
    { label: '10号线' },
    { label: '11号线' },
    { label: '13号线' },
    { label: '15号线' },
    { label: 'S1线' },
    { label: '昌平线' },
    { label: '亦庄线' },
    { label: '房山线' },
    { label: '首都机场线' },
  ],
  data1: {
    indexName: '列车服务可靠度',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data1',
    data: [],
    unit: 'number',
    unitCn: '万车公里',
    fixed: 0,
    original: [],
  },
  data2: {
    indexName: '影响行车故障率',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data2',
    unit: 'number',
    unitCn: '次/万车公里',
    min: 0.01,
    max: 0.1,
    fixed: 2,
    data: [],
    original: [],
  },
  data3: {
    indexName: '车辆系统故障率',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data3',
    unit: 'number',
    unitCn: '次/万车公里',

    fixed: 2,
    data: [],
    original: [],
  },
  data4: {
    indexName: '信号系统故障率',
    rank: '优',
    ratio: 1,
    transferValue: 8.1,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data4',
    unit: 'number',
    unitCn: '次/万车公里',
    fixed: 2,
    data: [],
    original: [],
  },
  data5: {
    indexName: '供电系统故障率',
    rank: '优',
    ratio: 1,
    transferValue: 8.3,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data5',
    unit: 'number',
    unitCn: '次/万车公里',
    fixed: 2,
    data: [],
    original: [],
  },
  data6: {
    indexName: '机电系统故障率',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data6',
    unit: 'number',
    unitCn: '次/万车公里',
    fixed: 2,
    data: [],
    original: [],
  },
});

interface PageData {
  lineList: any;
  data1: any;
  data2: any;
  data3: any;
  data4: any;
}

const router = useRouter();
const handleSelect = () => {
  router.push('/homeOperation');
};

const changeSort = (obj: any) => {
  // 改变排序方式
  pageData[obj.targetKey].data = pageData[obj.targetKey].original;
  switch (obj.sortName) {
    case '名称正序':
      _.reverse(pageData[obj.targetKey].data);
      break;
    case '名称倒序':
      _.reverse(pageData[obj.targetKey].data);
      break;
    case '优到差':
      pageData[obj.targetKey].data = _.orderBy(
        pageData[obj.targetKey].data,
        ['transferValue', 'value'],
        ['asc', 'asc']
      );
      break;
    case '差到优':
      pageData[obj.targetKey].data = _.orderBy(
        pageData[obj.targetKey].data,
        ['transferValue', 'value'],
        ['desc', 'desc']
      );
      break;
  }
};

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
const linkList = [
  {
    name: '综合运营指数',
    link: '/homeOperation',
  },
  {
    name: '设备指数',
    link: '/equipment',
  },
];
</script>

<template>
  <div class="page-container">
    <linkItem :obj="linkList"></linkItem>
    <div class="content-box">
      <!-- 综合信息栏 -->
      <div class="card-container">
        <div class="left-box">
          <div class="card-box">
            <h2>
              <span>
                {{ pageData[`data${pageData.item1ShowNum}`].indexName }}
                <span
                  class="icon"
                  :style="{
                    background: setIconColor(
                      pageData[`data${pageData.item1ShowNum}`].rank
                    ),
                  }"
                  >{{ pageData[`data${pageData.item1ShowNum}`].rank }}</span
                >
              </span>
              <!-- 选择框 -->
              <el-select
                size="small"
                class="select-item"
                v-model="pageData.item1ShowNum"
                placeholder="请选择"
              >
                <el-option
                  :key="1"
                  label="列车服务可靠度"
                  :value="1"
                ></el-option>
                <el-option
                  :key="2"
                  label="影响行车故障率"
                  :value="2"
                ></el-option>
              </el-select>
            </h2>
            <!-- 组件 -->
            <bar-item-change
              v-if="pageData.item1ShowNum === 1"
              :obj="pageData.data1"
              @changeSort="changeSort"
            ></bar-item-change>
            <bar-item-change
              v-if="pageData.item1ShowNum === 2"
              :obj="pageData.data2"
              @changeSort="changeSort"
            ></bar-item-change>
          </div>
          <div class="card-box">
            <h2>
              <span>
                {{ pageData[`data${pageData.item2ShowNum}`].indexName }}
                <span
                  class="icon"
                  :style="{
                    background: setIconColor(
                      pageData[`data${pageData.item2ShowNum}`].rank
                    ),
                  }"
                  >{{ pageData[`data${pageData.item2ShowNum}`].rank }}</span
                >
              </span>
              <!-- 选择框 -->
              <el-select
                size="small"
                class="select-item"
                v-model="pageData.item2ShowNum"
                placeholder="请选择"
              >
                <el-option
                  :key="1"
                  label="车辆系统故障率"
                  :value="3"
                ></el-option>
                <el-option
                  :key="2"
                  label="信号系统故障率"
                  :value="4"
                ></el-option>
              </el-select>
            </h2>
            <bar-item-change
              v-if="pageData.item2ShowNum === 3"
              :obj="pageData.data3"
              @changeSort="changeSort"
            ></bar-item-change>
            <bar-item-change
              v-if="pageData.item2ShowNum === 4"
              :obj="pageData.data4"
              @changeSort="changeSort"
            ></bar-item-change>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-2">
            <h2 class="link-text" @click="handleSelect()">设备指数</h2>
            <div class="picker-item">
              <el-date-picker
                v-model="store.currentTime"
                type="date"
                placeholder="选择日期"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                @change="buildData()"
              >
              </el-date-picker>
            </div>
            <main-item :obj="pageData.pageMain"></main-item>
          </div>
        </div>
        <div class="right-box">
          <div class="card-box">
            <bar-item :obj="pageData.data5" @changeSort="changeSort"></bar-item>
          </div>
          <div class="card-box">
            <bar-item :obj="pageData.data6" @changeSort="changeSort"></bar-item>
          </div>
        </div>
      </div>
      <!-- 列车运行指标组成及得分 -->
      <div class="card-container"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.btn-line {
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: right;
  .bar-btn {
    background-color: #09204e;
    color: #3ae3ff;
    border: 1px solid #3ae3ff;
  }
  .bar-btn:hover {
    background-color: #18567f;
  }
}
.link-text {
  text-decoration: underline;
}
.card-container {
  display: flex;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  .left-box {
    flex: 3;
  }
  .right-box {
    flex: 3;
  }
  .middle-box {
    flex: 5;
  }
  .select-item {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .card-box {
    border: 1px solid #6e7283;
    border-radius: 4px;
    margin: 0 5px 10px;
    color: #fff;
    height: 444px;
    background-color: #20232f;
    font-size: 14px;
    h2 {
      padding: 0 0 0 20px;
      margin: 0;
      color: #fff;
      font-size: 22px;
      line-height: 44px;
      border-bottom: 1px solid #6e7283;
      position: relative;
      // font-family: Arial, Helvetica, sans-serif;
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
    }
  }
  .middle-box-2 {
    height: 900px;
    position: relative;
  }
}
.page-container {
  padding: 20px 5px 10px;
  width: 100%;
  box-sizing: border-box;
}

:deep(.el-input__wrapper) {
  background-color: #7598eb57 !important;
  box-shadow: none;
  border: 1px solid #6e7283;
}
:deep(.el-input__inner) {
  color: #fff !important;
}
:deep(.el-input .el-select__caret.el-icon) {
  color: #6e7283;
}
.picker-item {
  position: absolute;
  top: 6px;
  right: 6px;
}
</style>
