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
      top: '40px',
      left: '60px',
      right: '20px',
      bottom: '50px',
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
        data: [2, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        type: 'bar',
        name: '始发晚点列车数',
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
  height: 420px;
  display: block;
  margin: 0 auto;
}
</style>
