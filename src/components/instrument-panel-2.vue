<!-- 矩阵组件 -->
<script setup lang="ts">
// 是否可以采用原生矩阵 总宽度固定

import { reactive, ref, Ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
const panel: any = ref(null);

// 需要的参数 指标名称 值 范围
var props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});
watch(
  () => props.obj,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '监听传递参数的变化');
    initEcharts();
  },
  { deep: true }
);

const initEcharts = () => {
  const myEcharts = echarts.init(myChart.value, 'dark');
  var option;

  option = {
    backgroundColor: '#20232f',
    tooltip: {
      formatter: `
      指标名称：${props.obj.indexName}<br/>
      评级：${props.obj.rank}<br/>
      分数：${props.obj.transferValue.toFixed(2)}
      占比：${props.obj.ratio * 100}%<br/>`,
    },
    series: [
      {
        type: 'gauge',
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 42,
            color: [
              [0.2, '#ff6f71'],
              [0.5, '#fc8251'],
              [0.8, '#f0c854'],
              [1, '#91cd77'],
            ],
          },
        },
        markPoint: {
          data: [
            {
              x: '85%',
              y: '60%',
              value: '优',
              symbol: 'text',

              itemStyle: {
                color: 'transparent',
              },
            },
            {
              x: '15%',
              y: '60%',
              value: '差',
              symbol: 'text',

              itemStyle: {
                color: 'transparent',
              },
            },
            {
              x: '25%',
              y: '20%',
              value: '中',
              symbol: 'text',
              itemStyle: {
                color: 'transparent',
              },
            },
            {
              x: '75%',
              y: '20%',
              value: '良',
              symbol: 'text',
              itemStyle: {
                color: 'transparent',
              },
            },
          ],
        },

        min: 0,
        max: 10,
        pointer: {
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          distance: -42,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        splitLine: {
          distance: -42,
          length: 42,
          lineStyle: {
            color: '#fff',
            width: 6,
          },
        },
        axisLabel: {
          color: 'auto',
          fontSize: 14,
          distance: 56,
        },
        detail: {
          valueAnimation: true,
          color: 'auto',
          fontSize: 40,
          offsetCenter: [0, '45%'],
          formatter: function (value: number) {
            // 格式化中间数值 保留两位小数
            return value.toFixed(2);
          },
        },
        data: [
          {
            value: props.obj.transferValue,
            name: props.obj.indexName,
          },
        ],
      },
    ],
  };
  option && myEcharts.setOption(option);
};
// 需要的参数 指标名称 值 范围
const myChart: Ref<HTMLElement | any> = ref(null);
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  initEcharts();
});
</script>

<template>
  <div class="container">
    <div class="panel" ref="myChart" id="panel"></div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 590px;
  height: 450px;
  display: block;
  margin: 0px auto 0px;
}
.container {
  height: 450px;
  overflow: hidden;
}
</style>
