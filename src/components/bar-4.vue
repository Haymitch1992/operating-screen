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

const emit = defineEmits<{
  (event: 'changeDate', str: string): void;
}>();

watch(
  () => props.obj,
  (newValue, oldValue) => {
    // 数据发生变化重新渲染
    console.log(newValue, oldValue, '监听传递参数的变化');
    if (newValue.length !== 0) {
      initEcharts();
    }
  },
  { deep: true }
);

const initEcharts = () => {
  //
  var option;
  option = {
    backgroundColor: '#09204e',
    xAxis: {
      type: 'category',
      data: props.obj.up.x,
    },
    tooltip: {
      formatter: function (info: any) {
        var str = `名称：${info.name}<br/>
        最大断面客流量：${props.obj.up.y1[info.dataIndex]}<br/>
        运力：${props.obj.up.y2[info.dataIndex]}<br/>
        最大满载率：${props.obj.up.y3[info.dataIndex]}%<br/>
        `;
        return str;
      },
    },

    grid: {
      // 让图表占满容器
      top: '40px',
      left: '60px',
      right: '80px',
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
    dataZoom: [
      {
        type: 'slider',
        show: true,
        maxValueSpan: 10,
        minValueSpan: 5,
        start: 0,
        maxSpan: 20,
        end: 10,
        xAxisIndex: 0,
      },
    ],
    series: [
      {
        name: '最大断面客流量',
        data: props.obj.up.y1,
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
        // yAxisIndex: 1,
        data: props.obj.up.y2,
        type: 'line',
      },
      {
        name: '平均满载率',
        type: 'line',
        yAxisIndex: 1,
        step: 'start',
        data: props.obj.up.y3,
      },
    ],
  };
  var option2;
  option2 = {
    backgroundColor: '#09204e',
    xAxis: {
      type: 'category',
      data: props.obj.down.x,
      // show: false,
    },
    tooltip: {
      formatter: function (info: any) {
        var str = `名称：${info.name}<br/>
        最大断面客流量：${props.obj.up.y1[info.dataIndex]}<br/>
        运力：${props.obj.up.y2[info.dataIndex]}<br/>
        最大满载率：${props.obj.up.y3[info.dataIndex]}%<br/>
        `;
        return str;
      },
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        maxValueSpan: 10,
        minValueSpan: 5,
        start: 0,
        maxSpan: 20,
        end: 10,
        xAxisIndex: 0,
      },
    ],
    grid: {
      // 让图表占满容器
      top: '24px',
      left: '60px',
      right: '80px',
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
      {
        type: 'value',
        inverse: true,
        name: '最\n大\n断\n面\n满\n载\n率\n下\n行',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true,
        },
        nameTextStyle: {
          padding: [0, 0, -120, 100],
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
        data: props.obj.down.y1,
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'bottom',
            },
          },
        },
      },
      {
        name: '最大断面满载率',

        data: props.obj.down.y2,
        type: 'line',
      },
      {
        name: '平均满载率',
        yAxisIndex: 1,
        type: 'line',
        step: 'start',
        data: props.obj.down.y3,
      },
    ],
  };
  console.log(myChart.value);

  myChart.value.setOption(option);
  myChart.value.on('click', function (params) {
    console.log('#########', params.name);
    emit('changeDate', params.name);
  });
  myChart2.value.setOption(option2);
};

const panel: any = ref(null);

const panel2: any = ref(null);
const myChart = ref();
const myChart2 = ref();
onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
  myChart.value = echarts.init(panel._value, 'dark');
  myChart2.value = echarts.init(panel2._value, 'dark');
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
