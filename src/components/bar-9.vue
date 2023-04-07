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
    xAxis: [
      {
        type: 'category',
        data: [
          'A站',
          'B站',
          'C站',
          'D站',
          'E站',
          'F站',
          'G站',
          'H站',
          'I站',
          'J站',
        ],
      },
      {
        type: 'category',
        data: [
          'A站',
          'B站',
          'C站',
          'D站',
          'E站',
          'F站',
          'G站',
          'H站',
          'I站',
          'J站',
        ],
        show:false,
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
        top: '40px',
        left: '60px',
        right: '20px',
        bottom: '55%',
      },
      {
        top: '55%',
        left: '60px',
        right: '20px',
        bottom: '40px',
      },
    ],
    series: [
      {
        name: '运行时间',
        data: [221, 322, 123, 224, 225, 126, 197, 228, 178, 120],
        type: 'bar',
        barWidth: 5,
      },
      {
        name: '站停时间',
        data: [15, 21, 22, 23, 24, 15, 26, 27, 28, 29],
        type: 'bar',
        barWidth: 5,
      },
      {
        name: '运行时间',
        data: [220, 221, 322, 123, 224, 225, 126, 197, 228, 178],
        type: 'bar',
        barWidth: 5,
        xAxisIndex: 1,
        yAxisIndex: 1,
      },
      {
        name: '站停时间',
        data: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        type: 'bar',
        barWidth: 5,
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
  height: 370px;
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
