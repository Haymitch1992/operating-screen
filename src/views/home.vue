<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import instrumentPanelVue from '../components/instrument-panel.vue';
import matrixVue from '../components/matrix-3.vue';
import matrixVue1 from '../components/matrix-2.vue';
import top from '../components/top.vue';
import synthesize from '../components/synthesize.vue';
import { postTrainOperation } from '../api/information';
import { useRouter } from 'vue-router';
const pageData: PageData = reactive({
  title: '列车运行驾驶舱',
  status: '良',
  data: [
    [
      { indexName: '换乘系数', rank: '中', ratio: 0.2, transferValue: 5.0 },
      {
        indexName: '列车最大满载率',
        rank: '中',
        ratio: 0.3,
        transferValue: 5.0,
      },
      { indexName: '超载区间占比', rank: '差', ratio: 0.3, transferValue: 1.0 },
      { indexName: '旅行速度', rank: '差', ratio: 0.2, transferValue: 1.0 },
      { indexName: '乘客服务', rank: '中', ratio: 0.3, transferValue: 3.0 },
    ],
    [
      { indexName: '平均满载率', rank: '中', ratio: 0.4, transferValue: 5.0 },
      { indexName: '列车利用率', rank: '差', ratio: 0.3, transferValue: 2.0 },
      { indexName: '能力利用率', rank: '优', ratio: 0.1, transferValue: 9.0 },
      { indexName: '客运强度', rank: '中', ratio: 0.2, transferValue: 5.0 },
      { indexName: '资源利用', rank: '中', ratio: 0.3, transferValue: 4.5 },
    ],
    [
      { indexName: '列车兑现率', rank: '优', ratio: 0.2, transferValue: 9.0 },
      { indexName: '列车正点率', rank: '差', ratio: 0.2, transferValue: 1.0 },
      {
        indexName: '列车服务可靠率',
        rank: '优',
        ratio: 0.3,
        transferValue: 10.0,
      },
      {
        indexName: '影响行车故障率',
        rank: '良',
        ratio: 0.3,
        transferValue: 8.0,
      },
      { indexName: '运营影响', rank: '良', ratio: 0.4, transferValue: 7.4 },
    ],
    [{ indexName: '列车运行', rank: '中', ratio: 1.0, transferValue: 3.72 }],
  ],
  matrixObj: [
    { indexName: '换乘系数', rank: '中', ratio: 0.2, transferValue: 5.0 },
  ],
  linkData: [
    {
      label: '列车运行驾驶舱',
      link: '/home',
    },
  ],
});

interface PageData {
  title: string;
  status: string;
  data: Array<Object>;
  matrixObj: Array<Object>;
  linkData: Array<Object>;
}
const router = useRouter();
const handleSelect = (key: string) => {
  router.push(key);
};
onMounted(() => {
  postTrainOperation({
    data: '',
    date: '20221021',
  }).then((res: any) => {
    // 渲染数据
    pageData.data = res.data.data;
    console.log(res);
    pageData.matrixObj = [];
    pageData.matrixObj.push(pageData.data[0][4]);
    pageData.matrixObj.push(pageData.data[1][4]);
    pageData.matrixObj.push(pageData.data[2][4]);
    console.log(pageData.matrixObj);
  });
});

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
</script>

<template>
  <div class="container">
    <top :topObj="pageData" :link="pageData.linkData"></top>
    <div class="content-box">
      <!-- 综合信息栏 -->
      <div class="card-container">
        <div class="card-box">
          <h2>综合信息栏</h2>
          <synthesize :obj="pageData.data[1]"></synthesize>
        </div>
        <div class="card-box">
          <instrument-panelVue :obj="pageData.data[3][0]"></instrument-panelVue>
        </div>
        <div class="card-box">
          <h2>列车运行指标组成及得分</h2>
          <matrixVue :obj="pageData.matrixObj"></matrixVue>
        </div>
      </div>

      <!-- 列车运行指标组成及得分 -->
      <div class="card-container">
        <div class="card-box">
          <h2 class="link-text" @click="handleSelect('/serve')">
            乘客服务
            <span
              class="icon"
              :style="{ background: setIconColor(pageData.data[0][4].rank) }"
              >{{ pageData.data[0][4].rank }}</span
            >
          </h2>
          <instrument-panelVue :obj="pageData.data[0][4]"></instrument-panelVue>
          <matrixVue-1 :obj="pageData.data[0]"></matrixVue-1>
        </div>
        <div class="card-box">
          <h2 class="link-text" @click="handleSelect('/resource')">
            资源利用
            <span
              class="icon"
              :style="{ background: setIconColor(pageData.data[1][4].rank) }"
              >{{ pageData.data[1][4].rank }}</span
            >
          </h2>
          <instrument-panelVue :obj="pageData.data[1][4]"></instrument-panelVue>
          <matrixVue-1 :obj="pageData.data[1]"></matrixVue-1>
        </div>
        <div class="card-box">
          <h2 class="link-text" @click="handleSelect('/operation')">
            运营影响
            <span
              class="icon"
              :style="{ background: setIconColor(pageData.data[2][4].rank) }"
              >{{ pageData.data[2][4].rank }}</span
            >
          </h2>
          <instrument-panelVue :obj="pageData.data[2][4]"></instrument-panelVue>
          <matrixVue-1 :obj="pageData.data[2]"></matrixVue-1>
        </div>
      </div>

      <!-- 乘客服务 -->
      <!-- 资源利用 -->
      <!-- 运营影响 -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.link-text {
  text-decoration: underline;
  cursor: pointer;
  position: relative;
}
.card-container {
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  .card-box {
    flex: 1;
    border: 1px solid #3ae3ff;
    border-radius: 4px;
    margin: 0 10px 20px;
    color: #fff;
    background-color: #09204e;
    font-size: 14px;
    h2 {
      padding: 0 0 0 20px;
      margin: 0;
      color: #fff;
      font-size: 22px;
      line-height: 44px;

      border-bottom: 1px solid #3ae3ff;

      // font-family: Arial, Helvetica, sans-serif;
    }
  }
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
  position: absolute;
  top: 10px;
  left: 114px;
}
</style>
