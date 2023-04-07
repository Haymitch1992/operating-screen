<script setup lang="ts">
import { reactive, ref } from 'vue';
import instrumentPanelVue from '../../components/instrument-panel-2.vue';
import bar1 from './bar-1.vue';
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

const pageData = reactive({
  barData: [
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.2,
      value: 8.2,
      xlabel: '1-八通线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.5,
      value: 8.5,
      xlabel: '2号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.5,
      value: 8.5,
      xlabel: '5号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.7,
      value: 8.7,
      xlabel: '6号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.9,
      value: 8.9,
      xlabel: '7号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.7,
      value: 8.7,
      xlabel: '8号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.4,
      value: 8.4,
      xlabel: '9号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.5,
      value: 8.5,
      xlabel: '10号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '11号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '13号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.8,
      value: 8.8,
      xlabel: '15号线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.8,
      value: 8.8,
      xlabel: '昌平线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '亦庄线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '房山线',
      unit: 'number',
      fixed: 1,
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '首都机场线',
      unit: 'number',
      fixed: 1,
    },
  ],
});
</script>

<template>
  <div class="container">
    <instrument-panelVue :obj="props.obj"></instrument-panelVue>
    <bar-1 :yObj="props.obj.data"></bar-1>
  </div>
</template>

<style lang="scss" scoped></style>
