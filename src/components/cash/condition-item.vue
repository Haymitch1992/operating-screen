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
      top: '40px',
      left: '60px',
      right: '20px',
      bottom: '50px',
    },
    legend: {
      data: ['实际开行列数', '计划开行列数'],
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
        data: [2, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        type: 'bar',
        name: '实际开行列数',
        barWidth: 8,
      },
      {
        data: [11, 12, 13, 14, 15, 16, 17, 18, 19, 14],
        type: 'bar',
        name: '计划开行列数',
        barWidth: 8,
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
