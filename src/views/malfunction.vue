<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/barItem2.vue';
import barItem3 from '../components/barItem3.vue';
import barItem6 from '../components/barItem6.vue';
import barItem7 from '../components/barItem7.vue';
import barItemSlot from '../components/barItem-slot.vue';
import barItem5 from '../components/barItem5.vue';
import instrumentPanelVue from '../components/instrument-panel.vue';
import mapItem from '../components/map.vue';
import malfunctionBar from '../components/malfunction-bar.vue';
const pageData: PageData = reactive({
  title: '影响行车故障率驾驶舱',
  status: '良',
  options: [],
  itemData: [
    {
      indexName: '全网列车故障率',
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
      label: '运营影响驾驶舱',
      link: '/operation',
    },
    {
      label: '影响行车故障率驾驶舱',
      link: '/malfunction',
    },
  ],
});

interface PageData {
  title: string;
  status: string;
  linkData: Array<object>;
  options: Array<object>;
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
              title="列车兑现率"
              :obj="pageData.itemData[0]"
              :yObj="pageData.itemData1"
            ></bar-item>
          </div>
          <div class="card-box">
            <bar-item-slot title="影响行车故障统计">
              <malfunction-bar></malfunction-bar>
            </bar-item-slot>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-2">
            <h2>北京地铁影响行车故障率图</h2>
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
