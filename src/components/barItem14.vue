<!-- 仪表盘和柱状图的组合 -->
<script setup lang="ts">
import { reactive, ref, onMounted, watch } from 'vue';
import instrumentPanelVue from './instrument-panel-sm.vue';
import * as echarts from 'echarts';
import bar1 from './bar-1-1.vue';
const lineData = reactive({});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  yObj: {
    type: Object,
    required: true,
  },
});

const itemData = reactive({
  sort: '优到差',
  dataStatus: 1,
  itemValue: '良',
  sliderValue: '2022-01-23',
  barStatus: 1,
  obj: props.yObj,
});

const handlechange = (val: string) => {
  console.log(val, '修改日期');
  emit('changeDate', val);
};
const echart = ref();
const emit = defineEmits<{
  (event: 'changeDate', str: string): void;
}>();
</script>

<template>
  <div class="container">
    <!-- 仪表盘 -->
    <div>
      <div class="bar-top-item">
        <div class="left">
          <!-- {{ props.obj }} -->
          <!-- <instrumentPanelVue :obj="props.obj"></instrumentPanelVue> -->
          <!-- <p>全网平均满载率30</p> -->
        </div>

        <div class="right">
          <div class="btn-line">
            <el-button
              size="small"
              :class="{ active: itemData.barStatus === 1 }"
              @click="itemData.barStatus = 1"
              class="bar-btn"
              >图表</el-button
            >
            <el-button
              size="small"
              :class="{ active: itemData.barStatus === 2 }"
              @click="itemData.barStatus = 2"
              class="bar-btn"
              >线网图</el-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 柱形图 -->
    <!-- {{ props.yObj }} -->
    <div v-show="itemData.barStatus === 1">
      <bar-1 :yObj="props.yObj" ref="echart"></bar-1>
    </div>
    <div v-show="itemData.barStatus === 2">
      <img class="item-img" src="../assets/subway2.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
h2 {
  padding: 0 0 0 20px;
  margin: 0;
  color: #fff;
  font-size: 22px;
  line-height: 44px;
  border-bottom: 1px solid #3ae3ff;
}

.item-img {
  width: 100%;
  height: 300px;
}
.btn-line {
  padding-right: 20px;
  padding-top: 10px;
}
.bar-btn {
  background-color: #20232f;
  color: #fff;
  border: 1px solid #6e7283;
}
.bar-btn:hover {
  background-color: #7598eb57;
}
.active {
  background-color: #7598eb57;
}
.icon {
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: #00cc92;
  color: #fff;
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  vertical-align: middle;
  margin: 0 4px;
}
.date-slider {
  padding-top: 20px;
  padding-right: 20px;
}
.m-2 {
  width: 100px;

  padding-top: 20px;
  margin-right: 20px;
}
.panel {
  width: 100%;
  height: 300px;
  display: block;
  margin: 0 auto;
}
:deep(.el-input__wrapper) {
  background-color: #09204e;
  box-shadow: 0 0 0 1px #3ae3ff;
}
:deep(.el-input__inner) {
  color: #3ae3ff !important;
}
:deep(.el-input .el-select__caret.el-icon) {
  color: #3ae3ff;
}
.select-right-item {
  float: right;
}
.select-text.active {
  color: #3ae3ff;
  border-bottom: 2px solid #3ae3ff;
}
.select-text {
  color: #fff;
  font-size: 16px;
  margin: 0 10px;
  border-bottom: 2px solid transparent;
  padding-bottom: 9px;
  cursor: pointer;
}
.bar-top-item {
  display: flex;
  border-top: 1px solid #6e7283;
  width: 100%;
  padding: 20px 0 0;
  box-sizing: border-box;
  .left {
    flex: 1;
    height: 60px;
    p {
      padding: 0;
      margin: 0;
      width: 200px;
      text-align: center;
      font-size: 12px;
    }
  }
  .right {
    flex: 4;
    text-align: right;
    height: 60px;
  }
}
</style>
