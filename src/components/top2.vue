<script setup lang="ts">
import { reactive, ref, withDefaults, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import setting from './setting.vue';
const props = defineProps({
  topObj: {
    type: Object,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
});
const router = useRouter();
const handleSelect = (key: string) => {
  router.push(key);
};
const currentTime = ref('');
const settingitem: any = ref(null);
onMounted(() => {
  let timer = setInterval(() => {
    currentTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);
  // 开始
});
const openDrawer = () => {
  console.log(settingitem, '************');
  settingitem.value.handleOpen();
};
</script>

<template>
  <div class="container">
    <div class="top-box">
      <span class="left-text">
        <img src="../assets/icon-3.png" alt="" />
        <span class="date-text"> {{ currentTime }} </span>
        <!-- link -->
        <span class="link-text" v-if="props.link.length > 1">
          <i
            v-for="(item, index) in props.link"
            @click="handleSelect(item.link)"
            class="link-text-i"
          >
            {{ item.label }}
            <i class="icon-i" v-if="props.link.length !== index + 1">/</i>
          </i>
        </span>
      </span>
      <span class="middle-text">
        <span class="title">{{ props.topObj.title }}</span>
        <span class="icon">{{ props.topObj.status }}</span>
      </span>
      <span class="right-text">
        <img src="../assets/icon-4.png" alt="" />
        <img src="../assets/icon-2.png" @click="openDrawer" alt="" />
        <img src="../assets/icon-1.png" alt="" />
        <img src="../assets/icon-5.png" alt="" />
        <span> 运营总监 </span>
      </span>
    </div>
    <setting ref="settingitem"></setting>
  </div>
</template>

<style lang="less" scoped>
.icon-i {
  margin: 0 4px 0 0;
  font-style: normal;
}
.top-box {
  height: 100px;
  text-align: center;
  padding: 0 20px;
  color: #26d4ff;
  font-size: 20px;
  background: url(../assets/top-bg.png) no-repeat 20px 0;
  box-sizing: border-box;
  overflow: hidden;
  img {
    width: 40px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
  }

  .left-text {
    float: left;
    padding-top: 40px;
    line-height: 20px;
    width: 350px;
    text-align: left;
    // line-height: 110px;
  }
  .date-text {
    line-height: 20px;
  }
  .link-text {
    display: block;
    font-size: 14px;
    color: #ddd;
    cursor: pointer;
    position: relative;
    left: 64px;
    text-align: left;
    top: -4px;
  }
  .link-text-i:hover {
    color: #3ae3ff;
  }
  .middle-text {
    width: 434px;
    display: inline-block;
    padding-left: 0px;
    text-align: center;
    .title {
      color: #3ae3ff;
      font-size: 40px;
      line-height: 80px;
    }
    .icon {
      width: 24px;
      height: 24px;
      text-align: center;
      background-color: #1969FF;
      color: #fff;
      display: inline-block;
      border-radius: 4px;
      font-size: 14px;
      line-height: 24px;
      vertical-align: middle;
      margin: 0 4px;
      position: relative;
      top: -16px;
    }
  }
  .right-text {
    float: right;
    line-height: 110px;
  }
}
</style>
