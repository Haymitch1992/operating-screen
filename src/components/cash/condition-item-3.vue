<script setup lang="ts">
import { reactive, Ref, ref, onMounted, watch, getCurrentInstance } from 'vue';
import * as echarts from 'echarts';

const initEcharts = () => {
  const myEcharts = echarts.init(myChart.value, 'dark');

  var option;
  option = {
    backgroundColor: '#20232f',
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
      data: ['实际开行列数', '临客列数', '回空列数', '救援列数'],
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
        name: '实际开行列数',
        barWidth: 10,
        stack: 'total',
      },
      {
        data: [11, 12, 13, 14, 15, 16, 17, 18, 19, 14],
        type: 'bar',
        name: '临客列数',
        stack: 'total',
        barWidth: 10,
      },
      {
        data: [3, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        type: 'bar',
        stack: 'total',
        name: '回空列数',
        barWidth: 10,
      },
      {
        data: [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        type: 'bar',
        name: '救援列数',
        stack: 'total',
        barWidth: 10,
      },
    ],
  };
  option && myEcharts.setOption(option);
};

const myChart: Ref<HTMLElement | any> = ref(null);
onMounted(() => {
  initEcharts();
  // echart 初始化 需要 原生 DOM 对象
});
</script>

<template>
  <div class="container">
    <!-- {{ props.yObj }} -->
    <div class="panel" ref="myChart" id="panel"></div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 100%;
  height: 370px;
  display: block;
  margin: 0 auto;
  text-align: center;
}
</style>
