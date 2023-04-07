<!-- 综合信息栏 -->
<script setup lang="ts">
import { reactive, ref } from 'vue';

var props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="line">
      <div class="left">
        <div class="num">
          {{ (props.obj[0].value*100).toFixed(2)
          }}<span class="tag-small">%</span>
        </div>
        <p>{{ props.obj[0].indexName }}</p>
      </div>
      <div class="right">
        <p>主要原因为</p>
        <p>
          <span class="tag-num">1</span
          >平峰期间客流较少，但需要保持最大行车间隔不超过6min；
        </p>
        <p><span class="tag-num">2</span>线路采用8编组，运能浪费相对严重</p>
      </div>
    </div>
    <div class="line">
      <div class="left">
        <div class="num">
          {{  (props.obj[1].value*100).toFixed(2)
          }}<span class="tag-small">%</span>
        </div>
        <p>{{ props.obj[1].indexName }}</p>
      </div>
      <div class="right">
        <p>主要原因为</p>
        <p>
          <span class="tag-num">1</span>初期客流低于预期值，上线列车数较少；
        </p>
        <p>
          <span class="tag-num">2</span>受列车制造计划影响，按照近期配车数配车
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.line {
  display: flex;
  padding-top: 30px;
  font-size: 16px;
}
.left {
  flex: 1;
  text-align: center;
}
.right {
  flex: 2;
  font-size: 14px;
}
.num {
  width: 125px;
  height: 64px;
  line-height: 64px;
  color: #1ddbff;
  font-size: 40px;
  display: inline-block;

  border-radius: 8px;
  border: 1px solid #1ddbff;
  background: linear-gradient(180deg, rgba(83, 213, 243, 0.1) 0%, #29abe2 100%);
  text-align: center;
}
.tag-num {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  color: #fff;
  background-color: #326bfa;
  border-radius: 50%;
  margin-right: 4px;
}
.tag-small {
  font-size: 18px;
}
p {
  padding: 0;
  line-height: 32px;
  margin: 0;
}
</style>
