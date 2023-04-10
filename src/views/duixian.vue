<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/pageItem/barItem.vue';
import * as _ from 'lodash';
import { useRouter } from 'vue-router';
import { mainStore } from '../store/index';
// 引入condition-item组件
import conditionItem from '../components/cash/condition-item.vue';
import conditionItem1 from '../components/cash/condition-item-2.vue';
import conditionItem3 from '../components/cash/condition-item-3.vue';
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
  let num = 0;
  pageData.lineList.forEach((item: any) => {
    arr1.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 9,
      value: Math.random() * (1 - 0.999) + 0.999,
    });

    pageData.data1.data = arr1;
    pageData.data1.original = arr1;
  });
};
const pageData: PageData = reactive({
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
});

interface PageData {
  data1: any;
  lineList: any;
}

const router = useRouter();
const handleSelect = () => {
  router.push('/homeOperation');
};
const linkList = [
  {
    name: '综合运营指数',
    link: '/homeOperation',
  },
  {
    name: '运行指数',
    link: '/run',
  },
  {
    name: '列车兑现率',
    link: '/duixian',
  },
];
</script>

<template>
  <div class="page-container">
    <div class="content-box">
      <linkItem :obj="linkList"></linkItem>
      <!-- 综合信息栏 -->
      <div class="card-container">
        <div class="left-box">
          <div class="card-box">
            <bar-item :obj="pageData.data1"></bar-item>
          </div>
          <div class="card-box">
            <h2>列车兑现情况</h2>
            <condition-item></condition-item>
          </div>
        </div>
        <div class="right-box">
          <div class="card-box">
            <h2>开行总列次</h2>
            <condition-item-3></condition-item-3>
          </div>
          <div class="card-box">
            <h2>临客列数</h2>
            <condition-item-1></condition-item-1>
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
  padding: 20px 5px 10px;
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
