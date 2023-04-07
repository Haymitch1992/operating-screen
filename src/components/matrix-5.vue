<!-- 矩阵图 -->
<!-- 仪表盘组件 -->
<script setup lang="ts">
import { Ref, reactive, watch, ref, onMounted, getCurrentInstance } from 'vue';
import * as echarts from 'echarts';
const rect: any = ref(null);

// 需要的参数 指标名称 值 范围
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});
watch(
  () => props.obj,
  (newValue, oldValue) => {
    // 数据发生变化重新渲染
    console.log(newValue, oldValue, '监听传递参数的变化');
    if (newValue.length !== 0) {
      initEcharts();
    }
  },
  { deep: true }
);

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
    lable: '乘客投诉率',
    unit: '次/百万人次',
    coefficient: 1, // 系数
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
  {
    lable: '平均候车时长',
    unit: 'min',
    coefficient: 1, // 系数
  },
  {
    lable: '客运强度',
    unit: '万乘次/公里.日',
    coefficient: 1, // 系数
  },
  {
    lable: '车辆系统故障率',
    unit: '次/每万车公里',
    coefficient: 1, // 系数
  },
  {
    lable: '运营事故数',
    unit: '件',
    coefficient: 1, // 系数
  },
  {
    lable: '行车事故数',
    unit: '件',
    coefficient: 1, // 系数
  },
  {
    lable: '运营险性事件数',
    unit: '件',
    coefficient: 1, // 系数
  },
  {
    lable: '行车险性事件数',
    unit: '件',
    coefficient: 1, // 系数
  },
  {
    lable: '信号系统故障率',
    unit: '次/每万车公里',
    coefficient: 1, // 系数
  },
  {
    lable: '供电系统故障率',
    unit: '次/每万车公里',
    coefficient: 1, // 系数
  },
  {
    lable: '机电系统故障率',
    unit: '次/每万车公里',
    coefficient: 1, // 系数
  },
  {
    lable: '牵引电耗',
    unit: '度/车公里',
    coefficient: 1, // 系数
  },
  {
    lable: '旅行速度',
    unit: 'km/h',
    coefficient: 1, // 系数
  },
  {
    lable: '乘客平均出行速度',
    unit: 'km/h',
    coefficient: 1, // 系数
  },
  {
    lable: '列车服务可靠度',
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
const arr2: any = ref([]);
const initEcharts = () => {
  const myEcharts = echarts.init(myChart.value);
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
    switch (item.rank) {
      case '优':
        arr2.value.push('#91cd77');
        break;
      case '良':
        arr2.value.push('#f0c854');
        break;
      case '中':
        arr2.value.push('#fc8251');
        break;
      case '差':
        arr2.value.push('#ff6f71');
        break;
    }
  });

  var option;
  option = {
    backgroundColor: '#20232f',
    color: arr2.value,
    // color: [
    //   '#ff6f71',
    //   '#20232f',
    //   '#20232f',
    //   '#20232f',
    //   '#20232f',
    //   '#20232f',
    //   '#20232f',
    //   '#20232f',
    //   '#20232f',
    // ],
    tooltip: {
      formatter: function (info: any) {
        var str = `指标名称：${info.data.indexName}<br/>
      评级：${info.data.rank}<br/>
      分数：${info.data.transferValue.toFixed(2)}
      占比：${info.data.ratio * 100}%<br/>
      数值：${unitTransfer(info.data.name, info.data.valueNum)}<br/>`;
        return str;
      },
    },
    label: {
      formatter: function (info: any) {
        return (
          info.data.name +
          ':\n' +
          unitTransfer(info.data.name, info.data.valueNum)
        );
      },

      // formatter: function (info: any) {
      //   return (
      //     ' ' +
      //     info.data.name +
      //     ':\n' +
      //     unitTransfer(info.data.name, info.data.valueNum) +
      //     '\n{' +
      //     setIconColor(info.data.rank) +
      //     '|' +
      //     info.data.rank +
      //     '}'
      //   );
      // },
      // rich: {
      //   a: {
      //     color: '#fff',
      //     backgroundColor: '#ff6f71',
      //     lineHeight: 24,
      //     verticalAlign: 'middle',
      //     fontSize: 14,
      //     with: '100%',
      //   },
      //   b: {
      //     color: '#fff',
      //     backgroundColor: '#fc8251',
      //     lineHeight: 24,
      //     verticalAlign: 'middle',
      //     fontSize: 14,
      //     with: '100%',
      //   },
      //   c: {
      //     color: '#fff',
      //     backgroundColor: '#f0c854',
      //     lineHeight: 24,
      //     verticalAlign: 'middle',
      //     fontSize: 14,
      //     with: '100%',
      //   },
      //   d: {
      //     color: '#fff',
      //     backgroundColor: '#91cd77',
      //     with: '100%',
      //     lineHeight: 24,
      //     verticalAlign: 'middle',
      //     fontSize: 14,
      //   },
      // },
    },
    itemStyle: {
      borderRadius: 2,
      borderColor: '#fff',
    },
    series: [
      {
        type: 'treemap',
        width: '92%',
        squareRatio: 1.5,
        data: arr.value,
        nodeClick: false,
        breadcrumb: false,
        roam: false, //禁止滑动缩放
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 0.5,
        },
        label: {
          // distance: 15,
          // position: [1, 1],
          color: '#000',
          fontSize: 15,
          align: 'center',
          lineHeight: 24,
          verticalAlign: 'middle',
        },
      },
    ],
  };
  option && myEcharts.setOption(option);
};

// onMounted(() => {
//   // echart 初始化 需要 原生 DOM 对象
//   setTimeout(() => {
//     initEcharts();
//   }, 1000);
// });

const myChart: Ref<HTMLElement | any> = ref(null);
onMounted(() => {
  initEcharts();
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
    <div ref="myChart" class="rect"></div>
  </div>
</template>

<style lang="less" scoped>
.rect {
  width: 100%;
  height: 200px;
}
</style>
