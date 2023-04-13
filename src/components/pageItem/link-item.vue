<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Plus, Delete } from '@element-plus/icons-vue';
// 写一个面包屑导航 通过传入的数据来渲染
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});
const drawer = ref(false);
const handleClose = () => {
  drawer.value = false;
};

const handleOpen = () => {
  drawer.value = true;
};
const form = reactive({
  datename: '日',
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
  fileList: [
    {
      name: '火灾事件',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
      name: '人员伤亡事件',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
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
const handleRemove = (file, fileList) => {
  console.log(file, fileList);
};
const handlePreview = (file) => {
  console.log(file);
};
const handleExceed = (files, fileList) => {
  this.$message.warning(
    `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
      files.length + fileList.length
    } 个文件`
  );
  form.fileList = fileList;
};
const beforeRemove = (file, fileList) => {
  return this.$confirm(`确定移除 ${file.name}？`);
};
const deleteItem = (index: number, str: string) => {
  // form.yuxing.splice(index, 1);
  form[str].splice(index, 1);
};
</script>

<template>
  <div class="container" id="draw">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: item.link }" v-for="item in props.obj">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button size="small" type="text" class="float-btn" @click="drawer = true"
      >参数配置</el-button
    >
    <el-drawer
      v-model="drawer"
      size="50%"
      title="参数配置"
      :before-close="handleClose"
    >
      <h2>数据颗粒度选择</h2>
      <el-select
        v-model="form.datename"
        class="select-icon"
        size="small"
        placeholder="请选择数据颗粒度"
      >
        <el-option label="日" value="日" />
        <el-option label="周" value="周" />
        <el-option label="旬" value="旬" />
        <el-option label="月" value="月" />
        <el-option label="季度" value="季度" />
        <el-option label="半年" value="半年" />
        <el-option label="年" value="年" />
      </el-select>
      <h2>数据管理</h2>
      <el-upload
        class="upload-demo"
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="form.fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <h2>指标占比</h2>
      <div>
        <el-form :model="form">
          <div class="dis-box">
            <p>列车运行</p>
            <el-form-item
              label=""
              v-for="(item, index) in form.yuxing"
              :key="item.name"
            >
              <el-select
                v-model="item.name"
                class="select-icon"
                size="small"
                placeholder="请选择指标"
              >
                <el-option label="资源利用" value="资源利用" />
                <el-option label="运营影响" value="运营影响" />
                <el-option label="乘客服务" value="乘客服务" />
              </el-select>
              <el-input-number
                size="small"
                class="number-item"
                v-model="item.value"
              />
              <el-button
                type="danger"
                :icon="Delete"
                circle
                size="small"
                @click="deleteItem(index, 'yuxing')"
              />
              <el-button
                v-if="index === form.yuxing.length - 1"
                type="primary"
                :icon="Plus"
                circle
                size="small"
                @click="add('yuxing')"
              />
            </el-form-item>
          </div>
          <div class="dis-box">
            <p>乘客服务</p>
            <el-form-item
              label=""
              v-for="(item, index) in form.fuwu"
              :key="item.name"
            >
              <el-select
                v-model="item.name"
                size="small"
                class="select-icon"
                placeholder="请选择指标"
              >
                <el-option label="资源利用" value="资源利用" />
                <el-option label="运营影响" value="运营影响" />
                <el-option label="乘客服务" value="乘客服务" />
              </el-select>
              <el-input-number
                class="number-item"
                v-model="item.value"
                size="small"
              />
              <el-button
                type="danger"
                size="small"
                :icon="Delete"
                circle
                @click="deleteItem(index, 'fuwu')"
              />
              <el-button
                v-if="index === form.fuwu.length - 1"
                type="primary"
                size="small"
                :icon="Plus"
                circle
                @click="add('fuwu')"
              />
            </el-form-item>
          </div>
          <div class="dis-box">
            <p>资源利用</p>
            <el-form-item
              label=""
              v-for="(item, index) in form.ziyuan"
              :key="item.name"
            >
              <el-select
                v-model="item.name"
                class="select-icon"
                size="small"
                placeholder="请选择指标"
              >
                <el-option label="资源利用" value="资源利用" />
                <el-option label="运营影响" value="运营影响" />
                <el-option label="乘客服务" value="乘客服务" />
              </el-select>
              <el-input-number
                class="number-item"
                v-model="item.value"
                size="small"
              />
              <el-button
                type="danger"
                :icon="Delete"
                size="small"
                circle
                @click="deleteItem(index, 'ziyuan')"
              />
              <el-button
                v-if="index === form.ziyuan.length - 1"
                type="primary"
                :icon="Plus"
                size="small"
                circle
                @click="add('ziyuan')"
              />
            </el-form-item>
          </div>
          <div class="dis-box">
            <p>运营影响</p>
            <el-form-item
              label=""
              v-for="(item, index) in form.yunying"
              :key="item.name"
            >
              <el-select
                v-model="item.name"
                class="select-icon"
                size="small"
                placeholder="请选择指标"
              >
                <el-option label="资源利用" value="资源利用" />
                <el-option label="运营影响" value="运营影响" />
                <el-option label="乘客服务" value="乘客服务" />
              </el-select>
              <el-input-number
                size="small"
                class="number-item"
                v-model="item.value"
              />
              <el-button
                type="danger"
                :icon="Delete"
                size="small"
                circle
                @click="deleteItem(index, 'yunying')"
              />
              <el-button
                v-if="index === form.yunying.length - 1"
                type="primary"
                :icon="Plus"
                size="small"
                circle
                @click="add('yunying')"
              />
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<style lang="less" scoped>
:deep(.is-link) {
  color: #ddd;
  text-decoration: underline;
}
p {
  color: #666;
  line-height: 40px;
  margin: 0;
}
h2 {
  color: #3572fe;
  font-size: 14px;
  padding-top: 10px;
  line-height: 40px;
  font-weight: 0;
  margin: 0;
}
.dis-box {
  display: inline-block;
  width: 440px;
  margin: 4px;
  vertical-align: top;
}
:deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
  color: #ddd;
  text-decoration: none;
}
.container {
  line-height: 20px;
  height: 20px;
  padding: 0 20px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
.float-btn {
  position: absolute;
  right: 20px;
  top: -6px;
}
.select-icon {
  width: 160px;
  margin-right: 10px;
}
.number-item {
  margin-right: 10px;
}
:deep(.el-drawer__body .el-input__wrapper) {
  background-color: #fff !important;
}
:deep(.el-drawer__body .el-input__inner) {
  color: #000 !important;
}
.el-form-item__content {
  margin-left: 0;
}
</style>
