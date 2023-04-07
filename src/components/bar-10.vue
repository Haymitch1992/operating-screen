<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const COLORS = ['#ff0000', '#e89c00', '#00d08d', '#1868fe'];

const panel: any = ref(null);
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  const myChart = echarts.init(panel._value, 'dark');
  var option3;
  option3 = {
    backgroundColor: '#09204e',
    legend: {
      data: ['运行时间', '站停时间'],
      top: 10,
    },
    tooltip: {
      trigger: 'axis',
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        maxValueSpan: 10,
        minValueSpan: 5,
        start: 0,
        maxSpan: 10,
        end: 10,
        xAxisIndex: [0, 1],
      },
    ],
    xAxis: [
      {
        type: 'category',
        data: [
          '1号线',
          '2号线',
          '4号线',
          '5号线',
          '6号线',
          '7号线',
          '8号线',
          '9号线',
          '10号线',
          '11号线',
        ],
      },
      {
        type: 'category',
        data: [
          '1号线',
          '2号线',
          '4号线',
          '5号线',
          '6号线',
          '7号线',
          '8号线',
          '9号线',
          '10号线',
          '11号线',
        ],
        show: false,
        gridIndex: 1,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '上\n行',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
        },
        nameTextStyle: {
          padding: [-20, 0, -80, -80],
        },
        nameLocation: 'bottom',
      },
      {
        type: 'value',
        name: '下\n行',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
        },
        nameTextStyle: {
          padding: [-50, 0, -0, -80],
        },
        gridIndex: 1,
        nameLocation: 'bottom',
        inverse: true,
      },
    ],
    grid: [
      {
        top: '20px',
        left: '60px',
        right: '20px',
        bottom: '55%',
      },
      {
        top: '55%',
        left: '60px',
        right: '20px',
        bottom: '20px',
      },
    ],
    series: [
      {
        name: '超载区间占比',
        data: [15, 21, 22, 23, 24, 15, 26, 27, 28, 29],
        type: 'bar',
        barWidth: 10,
      },
      {
        name: '超载区间占比',
        data: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 1,
        yAxisIndex: 1,
      },
    ],
  };
  myChart.setOption(option3);
});
</script>

<template>
  <div class="container">
    <div class="panel" ref="panel" id="panel"></div>
    <!-- <div class="panel2" ref="panel2" id="panel2"></div> -->
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 100%;
  height: 300px;
  display: block;
  margin: 0 auto;
}
// .panel2 {
//   width: 100%;
//   height: 185px;
//   display: block;
//   margin: 0 auto;
// }
</style>
