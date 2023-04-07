<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const COLORS = ['#ff0000', '#e89c00', '#00d08d', '#1868fe'];

const panel: any = ref(null);
const panel2: any = ref(null);
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  const myChart = echarts.init(panel._value, 'dark');
  const myChart2 = echarts.init(panel2._value, 'dark');
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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },

    grid: {
      // 让图表占满容器
      top: '40px',
      left: '60px',
      right: '20px',
      bottom: '40px',
    },

    yAxis: [
      {
        type: 'value',
        name: '最\n大\n断\n面\n客\n流\n量',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
        },
        nameTextStyle: {
          padding: [0, 0, -80, -70],
        },
        nameLocation: 'bottom',
      },

    ],
    series: [
      {
        name: '最大断面客流量',
        data: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: (item: any) => {
              let returnColor = null;
              // 根据数值取颜色
              if (item.data > 25) {
                returnColor = COLORS[3];
              } else {
                returnColor = COLORS[2];
              }
              return returnColor;
            },
            label: {
              show: true,
              position: 'top',
            },
          },
        },
      },

      {
        name: '平均满载率',
        type: 'line',
        step: 'start',
        data: [30, 32, 34, 43, 36, 30, 33, 43, 34, 37],
      },
    ],
  };
  var option2;
  option2 = {
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
      show: false,
    },
    tooltip: {
      trigger: 'axis',

      axisPointer: {
        type: 'cross',
      },
    },

    grid: {
      // 让图表占满容器
      top: '24px',
      left: '60px',
      right: '20px',
      bottom: '40px',
    },

    yAxis: [
      {
        type: 'value',
        name: '最\n大\n断\n面\n客\n流\n量\n下\n行',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
        },
        nameTextStyle: {
          padding: [0, 0, -120, -70],
        },
        nameLocation: 'bottom',
        inverse: true,
      },

    ],
    series: [
      {
        name: '最大断面客流量',
        data: [14, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: (item: any) => {
              let returnColor = null;
              // 根据数值取颜色
              if (item.data > 25) {
                returnColor = COLORS[3];
              } else {
                returnColor = COLORS[2];
              }
              return returnColor;
            },
            label: {
              show: true,
              position: 'bottom',
            },
          },
        },
      },

      {
        name: '平均满载率',
        type: 'line',
        step: 'start',
        data: [30, 32, 34, 43, 36, 30, 33, 43, 34, 37],
      },
    ],
  };
  myChart.setOption(option);
  myChart2.setOption(option2);
});
</script>

<template>
  <div class="container">
    <div class="panel" ref="panel" id="panel"></div>
    <div class="panel2" ref="panel2" id="panel2"></div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 100%;
  height: 210px;
  display: block;
  margin: 0 auto;
}
.panel2 {
  width: 100%;
  height: 210px;
  display: block;
  margin: 0 auto;
}
</style>
