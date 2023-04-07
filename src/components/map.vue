<!-- 地图组件 -->

<script setup lang="ts">
import { reactive, watch } from 'vue';

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
});

const itemData = reactive({
  sort: '',
});
</script>

<template>
  <div class="container">
    <ul class="icon-list">
      <li>
        <span>评级</span>
      </li>
      <li>
        <span class="icon icon-1">差</span>
      </li>
      <li>
        <span class="icon icon-2">中</span>
      </li>
      <li>
        <span class="icon icon-3">良</span>
      </li>
      <li>
        <span class="icon icon-4">优</span>
      </li>
    </ul>
    <el-select
      v-model="itemData.sort"
      class="m-2"
      placeholder="Select"
      size="small"
    >
      <el-option
        v-for="item in props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <img src="../assets/subway.jpg" alt="" />
  </div>
</template>

<style lang="less" scoped>
img {
  display: block;
  width: 100%;
}
.icon {
  display: inline-block;
  width: 30px;
  line-height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

}
.icon-1 {
  background: #ff0000;
}
.icon-2 {
  background: #e99d00;
}
.icon-3 {
  background: #00d08d;
}
.icon-4 {
  background: #1969ff;
}
.container {
  position: relative;
  .icon-list {
    position: absolute;
    top: 30px;
    left: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      width: 38px;
    }
  }
  .m-2 {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 160px;
    padding-top: 20px;
    margin-right: 20px;
  }
  :deep(.el-select .el-input__wrapper) {
    background-color: #09204e;
    box-shadow: 0 0 0 1px #3ae3ff;
  }
  :deep(.el-input__inner) {
    color: #3ae3ff !important;
  }
  :deep(.el-select .el-input .el-select__caret.el-icon) {
    color: #3ae3ff;
  }
}
</style>
