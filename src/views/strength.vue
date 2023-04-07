<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/barItem2.vue';
import barItemSlot from '../components/barItem-slot.vue';
import mapItem from '../components/map.vue';
import bar1 from '../components/strength-bar-proportion.vue';
import bar from '../components/strength-bar.vue';

import { postTrainOperationLineIndex } from '../api/information.js';

const postTrainOperationLineIndexFn = () => {
  // let str = pageData.currentDate.replace('-', '', 'g');
  postTrainOperationLineIndex({
    status: 0,
    message: '乘客服务页面数据',
    data: 'passengerservice',
    date: '20221020',
  }).then((res) => {
    operationData(res.data.data);
  });
};

onMounted(() => {
  postTrainOperationLineIndexFn();
});

// 处理数据
const operationData = (arr: any) => {
  // 重置数据
  pageData.itemData1 = [];
  pageData.options = [];
  // 选择线路数据
  const arrTotal: any = arr.slice(1, -1);
  arrTotal.forEach((item: any) => {
    item.data[3].xlabel = item.lineName;
    pageData.itemData1.push(item.data[3]);
  });
};

const pageData: PageData = reactive({
  title: '客运强度驾驶舱',
  status: '良',
  options: [],
  itemData1: [{ xlabel: '123' }],
  barStatus: 1,
  itemData: [
    {
      indexName: '全网客运强度',
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
      label: '资源利用率驾驶舱',
      link: '/resource',
    },
    {
      label: '客运强度驾驶舱',
      link: '/strength',
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
  barStatus: number;
}
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
              title="客运强度"
            ></bar-item>
          </div>
          <div class="card-box">
            <bar-item-slot title="线路客运情况">
              <!-- 详情 -->
              <!-- 比例 -->
              <div class="btn-line">
                <el-button
                  size="small"
                  @click="pageData.barStatus = 1"
                  class="bar-btn"
                  >详情</el-button
                >
                <el-button
                  size="small"
                  @click="pageData.barStatus = 2"
                  class="bar-btn"
                  >比例</el-button
                >
              </div>
              <bar v-if="pageData.barStatus === 1"></bar>
              <bar-1 v-if="pageData.barStatus === 2"></bar-1>
            </bar-item-slot>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-2">
            <h2>北京地铁能力利用率图</h2>
            <map-item :options="pageData.options"></map-item>
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
.card-container {
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  .left-box {
    flex: 2;
  }
  .middle-box {
    flex: 6;
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
