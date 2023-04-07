<!-- 矩阵图 -->
<!-- 仪表盘组件 -->
<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import * as echarts from 'echarts';
const rect: any = ref(null);

// 需要的参数 指标名称 值 范围
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

const unitList = [
  {
    lable: '超载区间占比',
    unit: '%',
    coefficient: 100, // 系数
  },
  {
    lable: '列车最大满载率',
    unit: '%',
    coefficient: 100, // 系数
  },
  {
    lable: '列车利用率',
    unit: '%',
    coefficient: 100, // 系数
  },
  {
    lable: '平均满载率',
    unit: '%',
    coefficient: 100, // 系数
  },
  {
    lable: '能力利用率',
    unit: '%',
    coefficient: 100, // 系数
  },
  {
    lable: '列车正点率',
    unit: '%',
    coefficient: 100, // 系数
  },
  {
    lable: '列车兑现率',
    unit: '%',
    coefficient: 100, // 系数
  },
  {
    lable: '影响行车故障率',
    unit: '次/万车公里',
    coefficient: 1, // 系数
  },
  {
    lable: '列车服务可靠率',
    unit: '万车公里',
    coefficient: 1, // 系数
  },
  
];
const unitTransfer = (str: string, val: number) => {
  let returnNum: any = val.toFixed(2);
  // 单位转换
  unitList.forEach((item) => {
    if (str === item.lable) {
      returnNum = (item.coefficient * val).toFixed(2) + item.unit;
    }
  });
  return returnNum;
};

// 全局定义 四种颜色
const arr: any = ref([]);
const initEcharts = () => {
  const myChart = echarts.init(rect._value, 'dark');
  //
  arr.value = [];
  props.obj.slice(0, -1).forEach((item: any) => {
    arr.value.push({
      name: item.indexName,
      indexName: item.indexName,
      value: item.ratio * 100,
      rank: item.rank,
      ratio: item.ratio,
      transferValue: item.transferValue,
      valueNum: item.value,
    });
  });
  var option;
  option = {
    backgroundColor: '#09204e',

    color: [
      '#0f3c6c',
      '#0f3c6c',
      '#0f3c6c',
      '#0f3c6c',
      '#0f3c6c',
      '#0f3c6c',
      '#0f3c6c',
      '#0f3c6c',
    ],
    tooltip: {
      formatter: function (info: any) {
        var str = `指标名称：${info.data.indexName}<br/>
      评级：${info.data.rank}<br/>
      分数：${info.data.transferValue.toFixed(2)}
      占比：${info.data.ratio * 100}%<br/>`;
        return str;
      },
    },
    label: {
      formatter: function (info: any) {
        return (
          info.data.name +
          ':\n' +
          unitTransfer(info.data.name, info.data.valueNum) +
          ' ' +
          '{' +
          setIconColor(info.data.rank) +
          '|' +
          info.data.rank +
          '}'
        );
      },
      rich: {
        a: {
          color: '#fff',
          backgroundColor: '#FF0000',
          padding: 4,
          borderRadius: 4,
        },
        b: {
          color: '#fff',
          backgroundColor: '#E99D00',
          padding: 4,
          borderRadius: 4,
        },
        c: {
          color: '#fff',
          backgroundColor: '#00D08D',
          padding: 4,
          borderRadius: 4,
        },
        d: {
          color: '#fff',
          backgroundColor: '#1969FF',
          padding: 4,
          borderRadius: 4,
        },
      },
    },
    itemStyle: {
      borderRadius: 2,
    },
    series: [
      {
        type: 'treemap',
        squareRatio: 1,
        data: arr.value,
        nodeClick: false,
        breadcrumb: false,
        roam: false, //禁止滑动缩放
        itemStyle: {
          borderColor: '#3ae3ff',
          borderWidth: 1,
        },
      },
    ],
  };
  myChart.setOption(option);
};

onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  setTimeout(() => {
    initEcharts();
  }, 1000);
});

const colorObj =
  getCurrentInstance()?.appContext.config.globalProperties.$colorObj;

const setIconColor = (value: string) => {
  var returnColor: string = '#ddd';
  colorObj.forEach((element: any) => {
    if (element.name === value) {
      returnColor = element.icon;
    }
  });
  return returnColor;
};
</script>

<template>
  <div class="container">
    <!-- 方块矩阵 -->
    <div ref="rect" class="rect"></div>
  </div>
</template>

<style lang="less" scoped>
.rect {
  width: 100%;
  height: 300px;
}
</style>
