<!-- 矩阵组件 -->
<script setup lang="ts">
// 是否可以采用原生矩阵 总宽度固定

import { reactive, ref, watch, onMounted } from 'vue';
import * as echarts from 'echarts';
const panel: any = ref(null);

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
    // setData();
    initEcharts();
  },
  { deep: true }
);

const initEcharts = () => {
  const myEcharts = echarts.init(myChart.value, 'dark');
  var option;

  option = {
    backgroundColor: '#20232f',
    series: [
      {
        type: 'gauge',
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 28,
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
              x: '90%',
              y: '60%',
              value: '优',
              symbol: 'text',

              itemStyle: {
                color: 'transparent',
              },
            },
            {
              x: '10%',
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
          distance: -28,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        splitLine: {
          distance: -28,
          length: 28,
          lineStyle: {
            color: '#fff',
            width: 4,
          },
        },
        axisLabel: {
          color: 'auto',
          fontSize: 12,
          // distance: -20,
          distance: 38,

          // formatter: function (value: number) {
          //   if (value === 1) {
          //     return '差';
          //   } else if (value === 4) {
          //     return '中';
          //   } else if (value === 7) {
          //     return '良';
          //   } else if (value === 9) {
          //     return '优';
          //   }
          //   return '';
          // },
        },
        // markPoint: {
        //   data: [
        //     {
        //       x: '80%',
        //       y: '60%',
        //       value: '优',
        //       symbol: 'text',

        //       itemStyle: {
        //         color: 'transparent',
        //       },
        //     },
        //     {
        //       x: '20%',
        //       y: '60%',
        //       value: '差',
        //       symbol: 'text',

        //       itemStyle: {
        //         color: 'transparent',
        //       },
        //     },
        //     {
        //       x: '25%',
        //       y: '20%',
        //       value: '中',
        //       symbol: 'text',

        //       itemStyle: {
        //         color: 'transparent',
        //       },
        //     },
        //     {
        //       x: '75%',
        //       y: '20%',
        //       value: '良',
        //       symbol: 'text',
        //       itemStyle: {
        //         color: 'transparent',
        //       },
        //     },
        //   ],
        // },
        title: {
          offsetCenter: [0, '100%'],
          fontSize: 12,
          show: true,
        },
        // axisLabel: {
        //   color: '#fff',
        //   fontSize: 6,
        //   distance: -6,

        // },
        detail: {
          valueAnimation: true,
          formatter: `{value}`,
          color: '#fff',
          fontSize: 14,
          offsetCenter: [0, '45%'],
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
console.log(panel);
const myChart: Ref<HTMLElement | any> = ref(null);
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  initEcharts();
});
</script>

<template>
  <div>
    <div class="panel" ref="myChart" id="panel"></div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 200px;
  height: 220px;
  display: block;
}
</style>
