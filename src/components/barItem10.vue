<!-- 仪表盘和柱状图的组合 -->
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import bar2 from './bar-11.vue';


const lineData = reactive({});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const options = [
  {
    value: '优到差',
    label: '优到差',
  },
  {
    value: '差到优',
    label: '差到优',
  },
];

const itemData = reactive({
  sort: '优到差',
  dataStatus: 1,
  itemValue: '良',
  sliderValue: [10, 30],
  showItem: 1,
});
</script>

<template>
  <div class="container">
    <h2>
      <span>{{ props.title }}</span>
      <span class="select-right-item">
        <span
          class="select-text"
          @click="itemData.dataStatus = 1"
          :class="{ active: itemData.dataStatus === 1 }"
          >历史数据</span
        >
        <span
          class="select-text"
          @click="itemData.dataStatus = 2"
          :class="{ active: itemData.dataStatus === 2 }"
          >今日数据</span
        >
      </span>
    </h2>
    <!-- 仪表盘 -->

    <!-- 柱形图 -->
    <bar-2></bar-2>
    <!-- <div class="panel" ref="panel" id="panel"></div> -->
  </div>
</template>

<style lang="less" scoped>
.btn-line {
  display: block;
  padding: 20px 20px 0;
  text-align: right;
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
h2 {
  padding: 0 0 0 20px;
  margin: 0;
  color: #fff;
  font-size: 22px;
  line-height: 44px;
  border-bottom: 1px solid #3ae3ff;
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
  width: 420px;
  display: block;
  margin: 0 auto;
  padding-top: 30px;
}
.m-2 {
  width: 100px;

  padding-top: 20px;
  margin-right: 20px;
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

.bar-btn {
  background-color: #09204e;
  color: #3ae3ff;
  border: 1px solid #3ae3ff;
}
.bar-btn:hover {
  background-color: #18567f;
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
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  .left {
    flex: 1;
    height: 120px;
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
    height: 120px;
  }
}
</style>
