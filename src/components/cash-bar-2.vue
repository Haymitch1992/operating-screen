<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const COLORS = ['#ff0000', '#e89c00', '#00d08d', '#1868fe'];

var datalist = [
  {
    name: '1号线',
    type: '常规大客流',
    value: 2,
  },
  {
    name: '2号线',
    type: '设备系统故障',
    value: 4,
  },
  {
    name: '3号线',
    type: '设备系统故障',
    value: 4,
  },
];

var xData = [
  '常规大客流',
  '设备系统故障',
  '周边活动',
  '特殊天气',
  '疫情管控',
  '总和',
];
var yData = [];

const panel: any = ref(null);
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  const myChart = echarts.init(panel._value, 'dark');
  var data = [
    { tech: '常规大客流', business: '5号线', num: 5 },
    { tech: '常规大客流', business: '2号线', num: 15 },
    { tech: '常规大客流', business: '1号线', num: 10 },
    { tech: '常规大客流', business: '6号线', num: 10 },
    { tech: '周边活动', business: '2号线', num: 8 },
    { tech: '设备系统故障', business: '6号线', num: 8 },
    { tech: '特殊天气', business: '2号线', num: 10 },
    { tech: '特殊天气', business: '4号线', num: 15 },
    { tech: '周边活动', business: '8号线', num: 11 },
    { tech: '周边活动', business: '6号线', num: 13 },
    { tech: '其它', business: '6号线', num: 14 },
    { tech: '其它', business: '5号线', num: 15 },
    { tech: '其它', business: '6号线', num: 16 },
  ];
  var xData = [
    '常规大客流',
    '设备系统故障',
    '周边活动',
    '特殊天气',
    '疫情管控',
    '其它',
  ];
  var yData = [
    '',
    '1号线',
    '2号线',
    '3号线',
    '4号线',
    '5号线',
    '6号线',
    '7号线',
    '8号线',
  ];
  var option = {
    backgroundColor: '#09204e',
    padding: 5,
    grid: {
      top: '20px',
      left: '50px',
      right: '30px',
      bottom: '40px',
    },
    xAxis: {
      boundaryGap: ['5%', '0%'],
      nameTextStyle: {
        fontSize: 15,
        color: '#fff',
        verticalAlign: 'bottom',
        fontWeight: 'bold',
      },
      scale: true,
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: function (params) {
          return xData[params];
        },
      },
      interval: 1,
      splitNumber: xData.length,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#e3e3e3',
        },
      },
    },
    yAxis: {
      boundaryGap: ['5%', '0%'],
      nameTextStyle: {
        align: 'right',
        fontSize: 15,
        color: '#666',
        fontWeight: 'bold',
      },
      interval: 1,
      splitNumber: yData.length,
      scale: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        formatter: function (idx) {
          console.log(idx); //
          return yData[idx];
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#e3e3e3',
        },
      },
    },
    series: data.map((d, i) => {
      return {
        type: 'scatter',
        label: {
          show: true,
          formatter: function (params) {
            return data[params.seriesIndex].num;
          },
        },
        symbolSize: 20,
        data: [[xData.indexOf(d.tech), yData.indexOf(d.business)]],
      };
    }),
  };
  myChart.setOption(option);
});
</script>

<template>
  <div class="container">
    <div class="panel" ref="panel" id="panel"></div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 100%;
  height: 350px;
  display: block;
  margin: 0 auto;
}
</style>
