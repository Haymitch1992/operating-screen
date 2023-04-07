<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const COLORS = ['#ff0000', '#e89c00', '#00d08d', '#1868fe'];

const panel: any = ref(null);
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  const myChart = echarts.init(panel._value, 'dark');
  var option;
  option = {
    backgroundColor: '#09204e',
    xAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      // 让图表占满容器
      top: '60px',
      left: '60px',
      right: '20px',
      bottom: '50px',
    },
    legend: {
      data: ['信号故障', '车辆故障', '屏蔽门故障', '其他故障'],
      bottom: 0,
    },
    yAxis: {
      type: 'category',
      data: [
        '1号线',
        '2号线',
        '3号线',
        '4号线',
        '5号线',
        '6号线',
        '7号线',
        '8号线',
        '9号线',
        '10号线',
      ],
    },
    series: [
      {
        data: [22, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        type: 'bar',
        name: '信号故障',
        barWidth: 10,
        stack: 'total',
      },
      {
        data: [11, 12, 13, 14, 15, 16, 17, 18, 19, 14],
        type: 'bar',
        name: '车辆故障',
        stack: 'total',
        barWidth: 10,
      },
      {
        data: [3,1, 0, 1, 0, 0, 0, 0, 0, 0, ],
        type: 'bar',
        stack: 'total',
        name: '屏蔽门故障',
        barWidth: 10,
      },
      {
        data: [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        type: 'bar',
        name: '其他故障',
        stack: 'total',
        barWidth: 10,
      },
    ],
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
  height: 400px;
  display: block;
  margin: 0 auto;
}
</style>
