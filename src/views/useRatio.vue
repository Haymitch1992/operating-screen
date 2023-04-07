<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref,onMounted } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/barItem2.vue';
import barItem3 from '../components/barItem3.vue';
import barItem6 from '../components/barItem6.vue';
import barItem7 from '../components/barItem7.vue';
import barItem5 from '../components/barItem5.vue';
import instrumentPanelVue from '../components/instrument-panel.vue';
import mapItem from '../components/map.vue';
import {
  postTrainOperationLineIndex,
} from '../api/information.js';

const postTrainOperationLineIndexFn = () => {
  // let str = pageData.currentDate.replace('-', '', 'g');
  postTrainOperationLineIndex({
    status: 0,
    message: '资源利用页面数据',
    data: 'resourceutility',
    date: '20221020',
  }).then((res) => {
    operationData(res.data.data);
  });
};



// 处理数据
const operationData = (arr: any) => {
  // 重置数据
  pageData.itemData1 = [];
  pageData.itemData = arr[0].data;
  pageData.options = [];
  // 选择线路数据
  const arrTotal: any = arr.slice(1, -1);
  arrTotal.forEach((item: any) => {
    item.data[0].xlabel = item.lineName;
    pageData.itemData1.push(item.data[0]);
  });
};


const pageData: PageData = reactive({
  title: '列车利用率驾驶舱',
  status: '良',
  options: [],
  itemData1: [{ xlabel: '123' }], // 默认值
  itemData: [
    {
      indexName: '平均满载率',
      rank: '良',
      ratio: 1,
      transferValue: 7,
      value: 0.31898001019726985,
      xlabel: '1号线',
    },
  ],
  linkData: [
    {
      label: '列车运行驾驶舱',
      link: '/',
    },
    {
      label: '资源利用驾驶舱良',
      link: '/resource',
    },
    {
      label: '列车利用率驾驶舱',
      link: '/useRatio',
    },
  ],
});

interface PageData {
  title: string;
  status: string;
  linkData: Array<object>;
  options: Array<object>;
  itemData1: Array<object>;
  itemData: Array<object>;
}

onMounted(() => {

  postTrainOperationLineIndexFn();
});
</script>

<template>
  <div class="container">
    <top :topObj="pageData" :link="pageData.linkData"></top>
    <div class="content-box">
      <!-- 综合信息栏 -->

      <div class="card-container">
        <div class="left-box">
          <div class="card-box">
            <bar-item
              :obj="pageData.itemData[0]"
              :yObj="pageData.itemData1"
              title="列车利用率"
            ></bar-item>
          </div>
          <div class="card-box">
            <bar-item7 title="10号线列车公里数"></bar-item7>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-2">
            <h2>北京地铁列车利用图</h2>
            <map-item :options="pageData.options"></map-item>
          </div>
        </div>
        <div class="right-box">
          <div class="card-box">
            <bar-item6 title="列车配备情况"></bar-item6>
          </div>
          <div class="card-box">
            <bar-item5 title="10号线列车历史利用率"></bar-item5>
          </div>
        </div>
      </div>
      <!-- 列车运行指标组成及得分 -->
      <div class="card-container"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-container {
  display: flex;
  padding: 0 15px;
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
    border: 1px solid #3ae3ff;
    border-radius: 4px;
    margin: 0 5px 10px;
    color: #fff;
    height: 470px;
    background-color: #09204e;
    font-size: 14px;
    h2 {
      padding: 0 0 0 20px;
      margin: 0;
      color: #fff;
      font-size: 22px;
      line-height: 44px;
      border-bottom: 1px solid #3ae3ff;
      background-color: #09204e;
      // font-family: Arial, Helvetica, sans-serif;
    }
  }
  .middle-box-1 {
    height: 248px;
  }
  .middle-box-2 {
    height: 952px;
    overflow: hidden;
    background-color: #01133b;
  }
}
</style>
