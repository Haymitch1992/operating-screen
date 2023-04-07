<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const COLORS = ['#ff0000', '#e89c00', '#00d08d', '#1868fe'];

const panel: any = ref(null);
// 30万 公里 设置架修
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  const myChart = echarts.init(panel._value, 'dark');
  var option;
  option = {
    backgroundColor: '#09204e',
    xAxis: {
      type: 'category',
      data: [
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
      ],
    },
    grid: {
      // 让图表占满容器
      top: '80px',
      left: '40px',
      right: '40px',
      bottom: '50px',
    },

    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [33, 35, 42, 22, 14, 15, 16, 17, 18, 19],
        type: 'bar',
        barWidth: 10,
        stack: 'total',
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
