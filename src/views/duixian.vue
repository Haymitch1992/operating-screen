<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/pageItem/barItem.vue';
import * as _ from 'lodash';
import { useRouter } from 'vue-router';
import { mainStore } from '../store/index';
import mainItem from '../components/pageItem/main-item.vue';
const store = mainStore();
// 渲染数据
onMounted(() => {});

//

const pageData: any = reactive({
  pageMain: {
    indexName: '运行指数',
    rank: '优',
    ratio: 1,
    value: 8.1,
    transferValue: 10,
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
    indexName: '列车兑现率',
    rank: '优',
    ratio: 1,
    transferValue: 8.2,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data1',
    data: [],
    unit: '%',
    unitCn: '%',
    min: 98.9,
    max: 100,
    fixed: 2,
    original: [],
  },
  data2: {
    indexName: '列车正点率',
    rank: '优',
    ratio: 1,
    transferValue: 8.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data2',
    unit: '%',
    unitCn: '%',
    min: 98.9,
    max: 100,
    fixed: 2,
    data: [],
    original: [],
  },
  data3: {
    indexName: '列车利用率',
    rank: '优',
    ratio: 1,
    transferValue: 8.7,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data3',
    unit: '%',
    unitCn: '%',
    min: 60,
    max: 100,
    fixed: 1,
    data: [],
    original: [],
  },
  data4: {
    indexName: '牵引单耗',
    rank: '优',
    ratio: 1,
    transferValue: 8.6,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data4',
    unit: 'number',
    unitCn: '度/车公里',
    fixed: 1,
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
</script>

<template>
  <div class="page-container">
    <div class="content-box">
      <!-- 综合信息栏 -->
      <div class="card-container">
        <div class="left-box">
          <div class="card-box">
            <h2>开行总列次</h2>
          </div>
          <div class="card-box">
            <h2>列车兑现情况历史数据今日数据</h2>
          </div>
        </div>
        <div class="right-box">
          <div class="card-box">
            <h2>开行总列次</h2>
          </div>
          <div class="card-box">
            <h2>临客列数</h2>
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

  .card-box {
    border: 1px solid #6e7283;
    border-radius: 4px;
    margin: 0 5px 10px;
    color: #fff;
    height: 454px;
    background-color: #20232f;
    font-size: 14px;
    h2 {
      padding: 0 0 0 20px;
      margin: 0;
      color: #fff;
      font-size: 22px;
      line-height: 44px;
      border-bottom: 1px solid #6e7283;
      background-color: #20232f;
      // font-family: Arial, Helvetica, sans-serif;
    }
  }
  .middle-box-2 {
    height: 920px;
    position: relative;
  }
}
.page-container {
  padding: 20px 5px 15px;
  width: 100%;
  box-sizing: border-box;
}
:deep(.el-input__wrapper) {
  background-color: #20232f;
  box-shadow: none;
  border: 1px solid #6e7283;
}
:deep(.el-input__inner) {
  color: #6e7283 !important;
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
