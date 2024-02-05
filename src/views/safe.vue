<!-- 资源利用驾驶舱 -->
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import top from '../components/top.vue';
import barItem from '../components/pageItem/barItem.vue';
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
  pageData.lineList.forEach((item: any) => {
    arr1.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 10,
      value: Math.random() * (0.3 - 0.1) + 0.1,
    });
    arr2.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 10,
      value: Math.random() * (0.1 - 0) + 0,
    });
    arr3.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 10,
      value: Math.random() * (0.3 - 0.1) + 0.1,
    });
    arr4.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 10,
      value: Math.random() * (0.1 - 0) + 0,
    });
    arr5.push({
      xlabel: item.label,
      rank: '优',
      ratio: 1,
      transferValue: 10,
      value: 10,
    });
    pageData.data1.data = arr1;
    pageData.data1.original = arr1;
    pageData.data2.data = arr2;
    pageData.data2.original = arr2;
    pageData.data3.data = arr3;
    pageData.data3.original = arr3;
    pageData.data4.data = arr4;
    pageData.data4.original = arr4;
    pageData.pageMain.data = arr5;
    pageData.pageMain.original = arr5;
    pageData.pageMain.transferValue = 10;
    // 通过随机数生成
    // 通过值进行计算
  });

  // 随机生成中间 矩阵数据
};

const pageData: any = reactive({
  pageMain: {
    indexName: '安全指数',
    rank: '优',
    ratio: 1,
    value: 10,
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
  data2: {
    indexName: '运营事故数',
    rank: '优',
    ratio: 1,
    transferValue: 9.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data2',
    unit: 'number',
    unitCn: '件',
    fixed: 1,
    data: [],
    original: [],
  },
  data3: {
    indexName: '行车事故数',
    rank: '优',
    ratio: 1,
    transferValue: 9.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data3',
    unit: 'number',
    unitCn: '件',
    fixed: 1,

    data: [],
    original: [],
  },
  data4: {
    indexName: '运营险性事件数',
    rank: '优',
    ratio: 1,
    transferValue: 9.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data4',
    unit: 'number',
    unitCn: '件',
    fixed: 1,
    data: [],
    original: [],
  },
  data1: {
    indexName: '行车险性事件数',
    rank: '优',
    ratio: 1,
    transferValue: 9.5,
    value: 0.31898001019726985,
    xlabel: '1号线',
    targetKey: 'data1',
    unit: 'number',
    unitCn: '件',
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

const linkList = [
  {
    name: '综合运营指数',
    link: '/homeOperation',
  },
  {
    name: '安全指数',
    link: '/safe',
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
            <!-- 组件 -->
            <!-- {{ pageData.data1 }} -->
            <bar-item :obj="pageData.data1" @changeSort="changeSort"></bar-item>
          </div>
          <div class="card-box">
            <bar-item :obj="pageData.data2" @changeSort="changeSort"></bar-item>
          </div>
        </div>
        <div class="middle-box">
          <div class="card-box middle-box-2">
            <h2 class="link-text" @click="handleSelect()">安全指数</h2>
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
            <bar-item :obj="pageData.data3" @changeSort="changeSort"></bar-item>
          </div>
          <div class="card-box">
            <bar-item :obj="pageData.data4" @changeSort="changeSort"></bar-item>
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
  padding: 0 10px;
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
      background-color: #20232f;
      // font-family: Arial, Helvetica, sans-serif;
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
