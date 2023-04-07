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

// 全局定义 四种颜色

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

const setHeight = (value: number) => {
  //  需要按照比例 来显示 高度

  var returnHeight: number = 500;
  returnHeight = returnHeight * value;
  return returnHeight + 'px';
};
</script>

<template>
  <div class="container">
    <div class="grid-box">
      <div class="item-left">
        <div
          class="item-1"
          :style="[
            { height: setHeight(props.obj[0].ratio) },
            { lineHeight: setHeight(props.obj[0].ratio) },
          ]"
        >
          <span>{{ props.obj[0].indexName }}：</span>
          <span>{{ props.obj[0].transferValue.toFixed(2) }}</span>
          <span
            class="icon"
            :style="{ background: setIconColor(props.obj[0].rank) }"
            >{{ props.obj[0].rank }}</span
          >
          <span class="pos-num">{{ props.obj[0].ratio * 100 }}%</span>
        </div>
        <div
          class="item-3"
          :style="[
            { height: setHeight(props.obj[2].ratio) },
            { lineHeight: setHeight(props.obj[2].ratio) },
          ]"
        >
          <span>{{ props.obj[2].indexName }}：</span>
          <span>{{ props.obj[2].transferValue.toFixed(2) }}</span>
          <span
            class="icon"
            :style="{ background: setIconColor(props.obj[2].rank) }"
            >{{ props.obj[2].rank }}</span
          >
          <span class="pos-num">{{ props.obj[2].ratio * 100 }}%</span>
        </div>
      </div>
      <div class="item-right">
        <div
          class="item-2"
          :style="[
            { height: setHeight(props.obj[1].ratio) },
            { lineHeight: setHeight(props.obj[1].ratio) },
          ]"
        >
          <span>{{ props.obj[1].indexName }}：</span>
          <span>{{ props.obj[1].transferValue.toFixed(2) }}</span>
          <span
            class="icon"
            :style="{ background: setIconColor(props.obj[1].rank) }"
            >{{ props.obj[1].rank }}</span
          >
          <span class="pos-num">{{ props.obj[1].ratio * 100 }}%</span>
        </div>
        <div
          class="item-4"
          :style="[
            { height: setHeight(props.obj[3].ratio) },
            { lineHeight: setHeight(props.obj[3].ratio) },
          ]"
        >
          <span>{{ props.obj[3].indexName }}：</span>
          <span>{{ props.obj[3].transferValue.toFixed(2) }}</span>
          <span
            class="icon"
            :style="{ background: setIconColor(props.obj[3].rank) }"
            >{{ props.obj[3].rank }}</span
          >
          <span class="pos-num">{{ props.obj[3].ratio * 100 }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 20px;
}
.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 250px;
  width: 100%;
  height: 250px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #3ae3ff;
  text-align: center;
}
.item-1 {
  border: 1px solid #3ae3ff;
  position: relative;
  height: 100px;
  line-height: 125px;
  background-color: rgba(41, 171, 226, 0.2);
}
.item-2 {
  border: 1px solid #3ae3ff;
  position: relative;
  height: 100px;
  background-color: rgba(41, 171, 226, 0.2);
  line-height: 125px;
}
.item-3 {
  position: relative;
  line-height: 125px;
  height: 100px;
  border: 1px solid #3ae3ff;
  background-color: rgba(41, 171, 226, 0.2);
}
.item-4 {
  position: relative;
  line-height: 125px;
  height: 100px;
  border: 1px solid #3ae3ff;
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
