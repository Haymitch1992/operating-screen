<script setup lang="ts">
import { reactive, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
const COLORS = ['#ff0000', '#e89c00', '#00d08d', '#1868fe'];

const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

watch(
  () => props.obj,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '监听传递参数的变化');
    setData();
    initEcharts();
  },
  { deep: true }
);

const echartsData = reactive({
  xValue: [],
  yValue: [],
  y2Value: [],
});

const setData = () => {
  echartsData.xValue = [];
  echartsData.yValue = [];
  echartsData.y2Value = [];
  props.obj.forEach((item: any) => {
    let str: string = item.data.maxSectionPF;
    let str2: string = (item.data.maxSectionLoadRate * 100).toFixed(2);
    let num: number = parseFloat(str);
    let num2: number = parseFloat(str2);
    echartsData.xValue.push(item.name);
    echartsData.yValue.push(num);
    echartsData.y2Value.push(num2);
  });
};

const emit = defineEmits<{
  (event: 'changeDate', str: string): void;
}>();

const initEcharts = () => {
  var option;
  option = {
    backgroundColor: '#09204e',
    xAxis: {
      type: 'category',
      data: echartsData.xValue,
      axisLabel: {
        interval: 0,
        formatter: function (value: any) {
          return value.split('').join('\n');
        },
      },
    },
    tooltip: {
      // trigger: 'axis',
      // axisPointer: {
      //   type: 'cross',
      // },
      formatter: function (info: any) {
        var str = `线路名称：${info.name}<br/>
        最大断面客流量：${echartsData.yValue[info.dataIndex]}<br/>
        最大断面满载率：${echartsData.y2Value[info.dataIndex]}%<br/>`;
        return str;
      },
    },
    legend: {
      data: ['最大断面客流量', '最大断面满载率'],
      bottom: 0,
    },
    grid: {
      // 让图表占满容器
      top: '20px',
      left: '70px',
      right: '70px',
      bottom: '80px',
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
          padding: [0, 0, -80, -100],
        },
        nameLocation: 'bottom',
      },
      {
        type: 'value',
        name: '最\n大\n断\n面\n满\n载\n率',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true,
        },
        nameTextStyle: {
          padding: [0, 0, -80, 100],
        },
        nameLocation: 'bottom',
        axisLabel: {
          formatter: '{value} %',
        },
      },
    ],
    series: [
      {
        name: '最大断面客流量',
        data: echartsData.yValue,
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
            },
          },
        },
      },
      {
        name: '最大断面满载率',
        yAxisIndex: 1,
        data: echartsData.y2Value,
        type: 'line',
      },
    ],
  };
  myChart.value.setOption(option);
  myChart.value.on('click', function (params) {
    console.log('#########', params.name);
    emit('changeDate', params.name);
  });
};
const myChart = ref();
const panel: any = ref(null);
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  myChart.value = echarts.init(panel._value, 'dark');
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
  height: 340px;
  display: block;
  margin: 0 auto;
}
</style>
