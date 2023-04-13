<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/pageItem/barItem-change.vue';
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
  let arr8: any = [];
  let arr9: any = [];
  let num = 0;
  pageData.lineList.forEach((item: any) => {
    arr1.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (1.3 - 0.8) + 0.8,
    });
    arr2.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.6 - 0.1) + 0.1,
    });
    arr3.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.5 - 0.1) + 0.1,
    });
    arr4.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (45 - 25) + 25,
    });
    arr5.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (10 - 2) + 2,
    });
    arr6.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (5 - 0) + 0,
    });
    arr7.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (4 - 0.5) + 0.5,
    });
    arr8.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (0.02 - 0) + 0,
    });
    let value = Math.random() * (8.8 - 8.1) + 8.1;
    arr9.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: value,
    });
    num += value;
  });
  num /= pageData.lineList.length;
  pageData.pageMain.transferValue = num;
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
  pageData.data7.data = arr7;
  pageData.data7.original = arr7;
  pageData.data8.data = arr8;
  pageData.data8.original = arr8;
  pageData.pageMain.data = arr9;
  pageData.pageMain.original = arr9;
  pageData.pageMain.transferValue = num;
};

const pageData: any = reactive({
  item1ShowNum: 1,
  item2ShowNum: 3,
  item3ShowNum: 5,
  item4ShowNum: 7,
  pageMain: {
    indexName: '服务指数',
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
    indexName: '列车最大满载率',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data1',
    data: [],
    unit: '%',
    unitCn: '%',
    fixed: 1,
    original: [],
  },
  data2: {
    indexName: '平均满载率',
    rank: '优',
    ratio: 1,
    transferValue: 8.6,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data2',
    unit: '%',
    unitCn: '%',
    fixed: 1,
    data: [],
    original: [],
  },
  data3: {
    indexName: '超载区间占比',
    rank: '优',
    ratio: 1,
    transferValue: 8.2,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data3',
    unit: '%',
    unitCn: '%',
    fixed: 1,
    data: [],
    original: [],
  },
  data4: {
    indexName: '乘客平均出行速度',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data4',
    unit: 'number',
    unitCn: 'km/h',
    fixed: 1,
    data: [],
    original: [],
  },
  data5: {
    indexName: '平均候车时长',
    rank: '优',
    ratio: 1,
    transferValue: 8.3,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data5',
    unit: 'number',
    unitCn: 'min',
    fixed: 1,
    data: [],
    original: [],
  },
  data6: {
    indexName: '平均滞留次数',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data6',
    unit: 'number',
    unitCn: '次',
    fixed: 1,
    data: [],
    original: [],
  },
  data7: {
    indexName: '客运强度',
    rank: '优',
    ratio: 1,
    transferValue: 8.3,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data7',
    unit: 'number',
    unitCn: '万乘次/公里.日',
    fixed: 1,
    data: [],
    original: [],
  },
  data8: {
    indexName: '乘客投诉率',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data8',
    unit: 'number',
    unitCn: '次/百万人次',
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
    name: '服务指数',
    link: '/service',
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
                  label="列车最大满载率"
                  :value="1"
                ></el-option>
                <el-option :key="2" label="平均满载率" :value="2"></el-option>
              </el-select>
            </h2>
            <!-- 组件 -->
            <bar-item
              v-if="pageData.item1ShowNum === 1"
              :obj="pageData.data1"
              @changeSort="changeSort"
            ></bar-item>
            <bar-item
              v-if="pageData.item1ShowNum === 2"
              :obj="pageData.data2"
              @changeSort="changeSort"
            ></bar-item>
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
                <el-option :key="1" label="超载区间占比" :value="3"></el-option>
                <el-option
                  :key="2"
                  label="乘客平均出行速度"
                  :value="4"
                ></el-option>
              </el-select>
            </h2>
            <bar-item
              v-if="pageData.item2ShowNum === 3"
              :obj="pageData.data3"
              @changeSort="changeSort"
            ></bar-item>
            <bar-item
              v-if="pageData.item2ShowNum === 4"
              :obj="pageData.data4"
              @changeSort="changeSort"
            ></bar-item>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-2">
            <h2 class="link-text" @click="handleSelect()">服务指数</h2>
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
            <h2>
              <span>
                {{ pageData[`data${pageData.item3ShowNum}`].indexName }}
                <span
                  class="icon"
                  :style="{
                    background: setIconColor(
                      pageData[`data${pageData.item3ShowNum}`].rank
                    ),
                  }"
                  >{{ pageData[`data${pageData.item3ShowNum}`].rank }}</span
                >
              </span>
              <!-- 选择框 -->
              <el-select
                size="small"
                class="select-item"
                v-model="pageData.item3ShowNum"
                placeholder="请选择"
              >
                <el-option :key="1" label="平均候车时长" :value="5"></el-option>
                <el-option :key="2" label="平均滞留次数" :value="6"></el-option>
              </el-select>
            </h2>
            <bar-item
              v-if="pageData.item3ShowNum === 5"
              :obj="pageData.data5"
              @changeSort="changeSort"
            ></bar-item>
            <bar-item
              v-if="pageData.item3ShowNum === 6"
              :obj="pageData.data6"
              @changeSort="changeSort"
            ></bar-item>
          </div>
          <div class="card-box">
            <h2>
              <span>
                {{ pageData[`data${pageData.item4ShowNum}`].indexName }}
                <span
                  class="icon"
                  :style="{
                    background: setIconColor(
                      pageData[`data${pageData.item4ShowNum}`].rank
                    ),
                  }"
                  >{{ pageData[`data${pageData.item4ShowNum}`].rank }}</span
                >
              </span>
              <!-- 选择框 -->
              <el-select
                size="small"
                class="select-item"
                v-model="pageData.item4ShowNum"
                placeholder="请选择"
              >
                <el-option :key="1" label="客运强度" :value="7"></el-option>
                <el-option :key="2" label="乘客投诉率" :value="8"></el-option>
              </el-select>
            </h2>
            <bar-item
              v-if="pageData.item4ShowNum === 7"
              :obj="pageData.data7"
              @changeSort="changeSort"
            ></bar-item>
            <bar-item
              v-if="pageData.item4ShowNum === 8"
              :obj="pageData.data8"
              @changeSort="changeSort"
            ></bar-item>
          </div>
        </div>
      </div>
      <!-- 列车运行指标组成及得分 -->
      <div class="card-container"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.select-item {
  position: absolute;
  top: 10px;
  right: 10px;
}
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
