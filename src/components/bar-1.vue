<script setup lang="ts">
import { reactive, ref, onMounted, watch, getCurrentInstance } from 'vue';
import * as echarts from 'echarts';
const COLORS = ['#ff0000', '#e89c00', '#00d08d', '#1868fe'];

const props = defineProps({
  yObj: {
    type: Object,
    required: true,
  },
});

const echartsData = reactive({
  xValue: [],
  yValue: [],
  colorList: [],
});

watch(
  () => props.yObj,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, '监听传递参数的变化');
    setData();
    initEcharts();
  },
  { deep: true }
);

const setData = () => {
  echartsData.xValue = [];
  echartsData.yValue = [];
  echartsData.colorList = [];
  props.yObj.forEach((item: any) => {
    console.log(props.yObj);
    let str: string = '';
    if (item.indexName === '列车正点率') {
      str = item.value.toFixed(4);
    } else {
      str = item.value.toFixed(2);
    }

    let num: number = parseFloat(str);
    // arr.value.push(num);
    echartsData.xValue.push(item.xlabel);
    echartsData.yValue.push(num);
    echartsData.colorList.push(setIconColor(item.rank));
  });
};

const myChart = ref();
// 数据发生变化 重新绘制图表
const echartResize = () => {
  console.log('重新渲染图表');
};
defineExpose({
  echartResize,
});
const colorObj =
  getCurrentInstance()?.appContext.config.globalProperties.$colorObj;

const setIconColor = (value: string) => {
  var returnColor: string = '#ddd';
  colorObj.forEach((element: any) => {
    if (element.name === value) {
      returnColor = element.value;
    }
  });
  return returnColor;
};

const arr = ref([]);

const initEcharts = () => {
  arr.value = [];
  var colorArr: any = [];

  var option;
  option = {
    backgroundColor: '#09204e',
    xAxis: {
      type: 'value',
    },
    grid: {
      // 让图表占满容器
      top: '0px',
      left: '60px',
      right: '50px',
      bottom: '20px',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    yAxis: {
      type: 'category',
      data: echartsData.xValue,
    },
    series: [
      {
        data: echartsData.yValue,
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: (item: any) => {
              let returnColor = null;
              returnColor = echartsData.colorList[item.dataIndex];
              return returnColor;
            },
            label: {
              show: true,
              position: 'right',
            },
    
          },
        },
      },
    ],
  };
  myChart.value.setOption(option);
};
const panel: any = ref(null);
onMounted(() => {
  myChart.value = echarts.init(panel._value, 'dark');
  // echart 初始化 需要 原生 DOM 对象
});
</script>

<template>
  <div class="container">
    <!-- {{ props.yObj }} -->
    <div class="panel" ref="panel" id="panel"></div>
  </div>
</template>

<style lang="less" scoped>
.panel {
  width: 100%;
  height: 300px;
  display: block;
  margin: 0 auto;
  text-align: center;
}
</style>
