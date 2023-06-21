<!-- 矩阵图 -->
<!-- 仪表盘组件 -->
<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
const panel: any = ref(null);

// 需要的参数 指标名称 值 范围
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  // echart 初始化 需要 原生 DOM 对象
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
</script>

<template>
  <div class="container">
    {{ props.obj }}
    <div class="grid-box">
      <div class="item-1">
        <span>{{ props.obj[0][4].indexName }}：</span>
        <span>{{ props.obj[0][4].transferValue.toFixed(2) }}</span>
        <span
          class="icon"
          :style="{ background: setIconColor(props.obj[0][4].rank) }"
          >{{ props.obj[0][4].rank }}</span
        >
        <span class="pos-num">{{ props.obj[0][4].ratio * 100 }}%</span>
      </div>
      <div class="item-2">
        <span>{{ props.obj[1][4].indexName }}：</span>
        <span>{{ props.obj[1][4].transferValue.toFixed(2) }}</span>
        <span
          class="icon"
          :style="{ background: setIconColor(props.obj[1][4].rank) }"
          >{{ props.obj[1][4].rank }}</span
        >
        <span class="pos-num">{{ props.obj[1][4].ratio * 100 }}%</span>
      </div>
      <div class="item-3">
        <span>{{ props.obj[2][4].indexName }}：</span>
        <span>{{ props.obj[2][4].transferValue.toFixed(2) }}</span>
        <span
          class="icon"
          :style="{ background: setIconColor(props.obj[2][4].rank) }"
          >{{ props.obj[2][4].rank }}</span
        >
        <span class="pos-num">{{ props.obj[2][4].ratio * 100 }}%</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 25px 20px 25px;
}
.grid-box {
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 115px 115px;
  grid-template-areas:
    'a c'
    'b c';
  width: 100%;
  height: 230px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #3ae3ff;
  text-align: center;
}
.item-1 {
  grid-area: a;
  border: 1px solid #3ae3ff;
  position: relative;
  line-height: 115px;
  background-color: rgba(41, 171, 226, 0.2);
}
.item-2 {
  grid-area: c;
  border: 1px solid #3ae3ff;
  position: relative;
  background-color: rgba(41, 171, 226, 0.2);
  line-height: 230px;
}
.item-3 {
  grid-area: b;
  position: relative;
  border: 1px solid #3ae3ff;
  line-height: 115px;
  background-color: rgba(41, 171, 226, 0.2);
}
.pos-num {
  position: absolute;
  right: 4px;
  bottom: 4px;
  color: #3ae3ff;
  font-size: 14px;
  line-height: 20px;
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
</style>
