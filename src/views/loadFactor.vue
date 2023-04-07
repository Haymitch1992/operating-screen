<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/barItem2.vue';
import barItem3 from '../components/barItem3.vue';
import barItem4 from '../components/barItem4.vue';
import barItem5 from '../components/barItem5.vue';
import {
  postLineSectionData,
  postLineTimeSerialData,
  postTransitNetworkData,
  postTrainOperationLineIndex,
} from '../api/information.js';

import instrumentPanelVue from '../components/instrument-panel.vue';
import mapItem from '../components/map.vue';
// 渲染数据
const setData = (obj: Array<object>) => {
  // 处置数据
  pageData.yunli = {
    up: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
    down: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
  };
  obj.forEach((item) => {
    pageData.yunli.up.x.push(item.name);
    pageData.yunli.up.y1.push(item.data.maxSectionPF_LineUp);
    pageData.yunli.up.y2.push(item.data.maxSectionTrafficPower_LineUp);
    pageData.yunli.up.y3.push(
      (item.data.maxSectionLoadRate_LineUp * 100).toFixed(2)
    );
    pageData.yunli.down.x.push(item.name);
    pageData.yunli.down.y1.push(item.data.maxSectionPF_LineDown);
    pageData.yunli.down.y2.push(item.data.maxSectionTrafficPower_LineDown);
    pageData.yunli.down.y3.push(
      (item.data.maxSectionLoadRate_LineDown * 100).toFixed(2)
    );
  });
};

const setData2 = (obj: Array<object>) => {
  // 处置数据
  pageData.duanmian = {
    up: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
    down: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
  };
  obj.forEach((item) => {
    pageData.duanmian.up.x.push(item.name);
    pageData.duanmian.up.y1.push(item.data.sectionPF_LineUp);
    pageData.duanmian.up.y2.push(item.data.sectionTrafficPower_LineUp);
    pageData.duanmian.up.y3.push(
      (item.data.sectionLoadRate_LineUp * 100).toFixed(2)
    );
    pageData.duanmian.down.x.push(item.name);
    pageData.duanmian.down.y1.push(item.data.sectionPF_LineDown);
    pageData.duanmian.down.y2.push(item.data.sectionTrafficPower_LineDown);
    pageData.duanmian.down.y3.push(
      (item.data.sectionLoadRate_LineDown * 100).toFixed(2)
    );
  });
};

const postLineTimeSerialDataFn = () => {
  postLineTimeSerialData({
    date: pageData.currentDate,
    data: pageData.currentData,
  }).then((res) => {
    setData(res.data);
  });
};

const postTransitNetworkDataFn = () => {
  postTransitNetworkData({
    date: pageData.currentDate,
  }).then((res) => {
    pageData.keliu = res.data;
  });
};

const postLineSectionDataFn = () => {
  postLineSectionData({
    date: pageData.currentDate,
    time: pageData.currentTime,
    data: pageData.currentData,
  }).then((res) => {
    setData2(res.data);
    // console.log(res.data, 'postLineSectionDataFn');
  });
};

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

onMounted(() => {
  postLineSectionDataFn();
  postTransitNetworkDataFn();
  postLineTimeSerialDataFn();
  postTrainOperationLineIndexFn();
});

const pageData: PageData = reactive({
  title: '平均满载率驾驶舱',
  status: '良',
  options: [],
  itemData1: [],
  itemData: [{}, {}, {}, {}, {}],
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
      label: '平均满载率驾驶舱',
      link: '/loadFactor',
    },
  ],
  keliu: [
    {
      name: '',
      data: {
        maxSectionPF: 0,
        maxSectionLoadRate: 0,
      },
    },
  ],
  yunli: {
    up: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
    down: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
  },
  duanmian: {
    up: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
    down: {
      x: [],
      y1: [],
      y2: [],
      y3: [],
    },
  },
  currentDate: '2022-01-23',
  currentTime: '8:00:00',
  currentData: '7号线',
});

interface PageData {
  title: string;
  status: string;
  itemData1: Array<object>;
  itemData: Array<object>;
  linkData: Array<object>;
  options: Array<object>;
  keliu: Array<object>;
  yunli: any;
  duanmian: any;
  currentDate: string;
  currentTime: string;
  currentData: string;
}

const changeCurrentTime = (val: string) => {
  pageData.currentTime = val;
  postLineSectionDataFn();
};
const changeCurrentData = (val: string) => {
  pageData.currentData = val;
  postLineTimeSerialDataFn();
  postLineSectionDataFn();
};
const changeCurrentDate = (val: string) => {
  pageData.currentDate = val;
  postLineSectionDataFn();
  postTransitNetworkDataFn();
  postLineTimeSerialDataFn();
  postTrainOperationLineIndexFn();
};
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
              title="平均满载率"
              :obj="pageData.itemData[0]"
              :yObj="pageData.itemData1"
              @changeDate="changeCurrentDate"
            ></bar-item>
          </div>
          <div class="card-box">
            <bar-item4
              :title="`${pageData.currentData} 上/下行断面客流及运力`"
              :obj="pageData.yunli"
              @changeDate="changeCurrentTime"
            ></bar-item4>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-2">
            <h2>资源利用</h2>
            <map-item :options="pageData.options"></map-item>
          </div>
        </div>
        <div class="right-box">
          <div class="card-box">
            <bar-item3
              @changeDate="changeCurrentData"
              :obj="pageData.keliu"
              title="断面客流量"
            ></bar-item3>
          </div>
          <div class="card-box">
            <bar-item4
              :title="`${pageData.currentTime} 时段上/下行断面客流及运力`"
              :obj="pageData.duanmian"
            ></bar-item4>
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
