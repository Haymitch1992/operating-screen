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
    tooltip: {},
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '公主坟站', max: 6500 },
        { name: '军事博物馆站', max: 16000 },
        { name: '复兴门站', max: 30000 },
        { name: '西单站', max: 38000 },
        { name: '东单站', max: 52000 },
        { name: '建国门站', max: 25000 },
        { name: '国贸站', max: 25000 },
        { name: '四惠站', max: 25000 },
        { name: '四惠东站', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [
              4200, 3000, 20000, 35000, 20000, 18000, 10000, 18000, 18000,
            ],
            name: '换乘量',
          },
        ],
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
  height: 420px;
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
