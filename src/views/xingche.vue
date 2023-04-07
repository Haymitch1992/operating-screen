<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/barItem.vue';
import instrumentPanelVue from '../components/instrument-panel.vue';
import { postTrainOperationLineIndex } from '../api/information';
import mapItem from '../components/map.vue';
const pageData: PageData = reactive({
  title: '行车指数驾驶舱',
  status: '良',
  itemData: [{}, {}, {}, {}, {}],
  itemData1: [],
  itemData2: [],
  itemData3: [],
  itemData4: [],
  linkData: [
    {
      label: '综合运营指数驾驶舱',
      link: '/homeOperation',
    },
    {
      label: '行车指数驾驶舱',
      link: '/xingche',
    },
  ],
  options: [],
});

interface PageData {
  title: string;
  status: string;
  itemData1: Array<object>;
  itemData2: Array<object>;
  itemData3: Array<object>;
  itemData4: Array<object>;
  itemData: Array<object>;
  linkData: Array<object>;
  options: Array<any>;
}

// 处理数据
const operationData = (arr: any) => {
  //
  pageData.itemData1 = [];
  pageData.itemData2 = [];
  pageData.itemData3 = [];
  pageData.itemData4 = [];
  pageData.itemData = arr[0].data;
  pageData.options = [];
  // 选择线路数据
  const arrTotal: any = arr.slice(1, -1);
  arrTotal.forEach((item: any) => {
    item.data[0].xlabel = item.lineName;
    item.data[1].xlabel = item.lineName;
    item.data[2].xlabel = item.lineName;
    item.data[3].xlabel = item.lineName;
    pageData.itemData1.push(item.data[0]);
    pageData.itemData2.push(item.data[1]);
    pageData.itemData3.push(item.data[2]);
    pageData.itemData4.push(item.data[3]);
  });
  pageData.itemData.slice(0, -1).forEach((item: any) => {
    pageData.options.push({
      value: item.indexName,
      label: item.indexName,
    });
    pageData.options[0].value = '';
  });
};

onMounted(() => {
  postTrainOperationLineIndex({
    status: 0,
    message: '运营影响页面数据',
    data: 'impactonoperation',
    date: '20221021',
  }).then((res: any) => {
    // 渲染数据
    console.log(res);
    operationData(res.data.data);
  });
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
            ></bar-item>
          </div>
          <div class="card-box">
            <bar-item
              :obj="pageData.itemData[1]"
              :yObj="pageData.itemData2"
            ></bar-item>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-1">
            <instrument-panelVue
              :obj="pageData.itemData[4]"
            ></instrument-panelVue>
          </div>
          <div class="card-box middle-box-2">
            <h2>资源利用</h2>
            <map-item :options="pageData.options"></map-item>
          </div>
        </div>
        <div class="right-box">
          <div class="card-box">
            <bar-item
              :obj="pageData.itemData[2]"
              :yObj="pageData.itemData3"
            ></bar-item>
          </div>
          <div class="card-box">
            <bar-item
              :obj="pageData.itemData[3]"
              :yObj="pageData.itemData4"
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
    height: 288px;
    overflow: hidden;
  }
  .middle-box-2 {
    height: 654px;
    overflow: hidden;
    background-color: #01133b;
  }
}
</style>
