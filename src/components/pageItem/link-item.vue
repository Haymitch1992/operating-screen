<script setup lang="ts">
import { reactive, ref } from 'vue';
// 写一个面包屑导航 通过传入的数据来渲染
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: item.link }" v-for="item in props.obj">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
:deep(.is-link) {
  color: #ddd;
}
:deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
  color: #ddd;
  text-decoration: underline;
}
.container {
  line-height: 20px;
  height: 20px;
  padding: 0 20px;
}
</style>
