<script setup lang="ts">
import { Plus, Delete } from '@element-plus/icons-vue';

import { reactive, ref } from 'vue';

const drawer = ref(false);
const handleClose = () => {
  drawer.value = false;
};

const handleOpen = () => {
  drawer.value = true;
};
defineExpose({
  handleOpen,
});

const form = reactive({
  name: 25,
  region: '资源利用',
  date1: '',
  date2: '',
  delivery: true,
  delivery2: true,
  type: [],
  resource: '',
  desc: '',
  yuxing: [
    {
      name: '运营影响',
      value: 40,
    },
    {
      name: '资源利用',
      value: 30,
    },
    {
      name: '乘客服务',
      value: 30,
    },
  ],
  fuwu: [
    {
      name: '超载区间占比',
      value: 30,
    },
    {
      name: '列车最大满载率',
      value: 30,
    },
    {
      name: '旅行速度',
      value: 20,
    },
    {
      name: '换乘系数',
      value: 20,
    },
  ],
  ziyuan: [
    {
      name: '平均满载率',
      value: 40,
    },
    {
      name: '列车利用率',
      value: 30,
    },
    {
      name: '客运强度',
      value: 20,
    },
    {
      name: '能力利用率',
      value: 10,
    },
  ],
  yunying: [
    {
      name: '影响行车故障率',
      value: 30,
    },
    {
      name: '列车服务可靠度',
      value: 30,
    },
    {
      name: '列车正点率',
      value: 20,
    },
    {
      name: '列车兑现率',
      value: 20,
    },
  ],
});

const onSubmit = () => {
  console.log('submit!');
};
const add = (str: string) => {
  form[str].push({
    name: '',
    value: 0,
  });
};

const deleteItem = (index: number, str: string) => {
  // form.yuxing.splice(index, 1);
  form[str].splice(index, 1);
};
</script>

<template>
  <div class="container">
    <el-drawer v-model="drawer" title="参数配置" :before-close="handleClose">
      <div>
        <el-form :model="form" label-width="80px">
          <el-form-item label="列车运行"></el-form-item>
          <el-form-item
            label=""
            v-for="(item, index) in form.yuxing"
            :key="item.name"
          >
            <el-select
              v-model="item.name"
              class="select-icon"
              placeholder="请选择指标"
            >
              <el-option label="资源利用" value="资源利用" />
              <el-option label="运营影响" value="运营影响" />
              <el-option label="乘客服务" value="乘客服务" />
            </el-select>
            <el-input-number class="number-item" v-model="item.value" />
            <el-button
              type="danger"
              :icon="Delete"
              circle
              @click="deleteItem(index, 'yuxing')"
            />
            <el-button
              v-if="index === form.yuxing.length - 1"
              type="primary"
              :icon="Plus"
              circle
              @click="add('yuxing')"
            />
          </el-form-item>
          <el-form-item label="乘客服务"></el-form-item>
          <el-form-item
            label=""
            v-for="(item, index) in form.fuwu"
            :key="item.name"
          >
            <el-select
              v-model="item.name"
              class="select-icon"
              placeholder="请选择指标"
            >
              <el-option label="资源利用" value="资源利用" />
              <el-option label="运营影响" value="运营影响" />
              <el-option label="乘客服务" value="乘客服务" />
            </el-select>
            <el-input-number class="number-item" v-model="item.value" />
            <el-button
              type="danger"
              :icon="Delete"
              circle
              @click="deleteItem(index, 'fuwu')"
            />
            <el-button
              v-if="index === form.fuwu.length - 1"
              type="primary"
              :icon="Plus"
              circle
              @click="add('fuwu')"
            />
          </el-form-item>
          <el-form-item label="资源利用"></el-form-item>
          <el-form-item
            label=""
            v-for="(item, index) in form.ziyuan"
            :key="item.name"
          >
            <el-select
              v-model="item.name"
              class="select-icon"
              placeholder="请选择指标"
            >
              <el-option label="资源利用" value="资源利用" />
              <el-option label="运营影响" value="运营影响" />
              <el-option label="乘客服务" value="乘客服务" />
            </el-select>
            <el-input-number class="number-item" v-model="item.value" />
            <el-button
              type="danger"
              :icon="Delete"
              circle
              @click="deleteItem(index, 'ziyuan')"
            />
            <el-button
              v-if="index === form.ziyuan.length - 1"
              type="primary"
              :icon="Plus"
              circle
              @click="add('ziyuan')"
            />
          </el-form-item>
          <el-form-item label="运营影响"></el-form-item>
          <el-form-item
            label=""
            v-for="(item, index) in form.yunying"
            :key="item.name"
          >
            <el-select
              v-model="item.name"
              class="select-icon"
              placeholder="请选择指标"
            >
              <el-option label="资源利用" value="资源利用" />
              <el-option label="运营影响" value="运营影响" />
              <el-option label="乘客服务" value="乘客服务" />
            </el-select>
            <el-input-number class="number-item" v-model="item.value" />
            <el-button
              type="danger"
              :icon="Delete"
              circle
              @click="deleteItem(index, 'yunying')"
            />
            <el-button
              v-if="index === form.yunying.length - 1"
              type="primary"
              :icon="Plus"
              circle
              @click="add('yunying')"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<style lang="less" scoped>
.select-icon {
  width: 160px;
  margin-right: 10px;
}
.number-item {
  margin-right: 10px;
}
</style>
