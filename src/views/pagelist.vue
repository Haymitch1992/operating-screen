<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const pageData = reactive({
  list: [
    {
      name: '列车运行驾驶舱',
      path: '/home',
    },
    {
      name: '资源利用驾驶舱',
      path: '/resource',
    },
    {
      name: '平均满载率驾驶舱',
      path: '/loadFactor',
    },
    {
      name: '列车利用率驾驶舱',
      path: '/useRatio',
    },
  ],
});
const router = useRouter();
const handleSelect = (key: string) => {
  router.push(key);
};
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="item in pageData.list" @click="handleSelect(item.path)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
ul {
  list-style: none;
  padding: 100px;
  margin: 0;
  li {
    display: inline-block;
    padding: 20px 30px;
    border: 1px solid #ddd;
    font-size: 20px;
    margin: 0 5px;
  }
}
</style>
