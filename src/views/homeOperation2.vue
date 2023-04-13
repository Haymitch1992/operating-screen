<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import instrumentPanelVue from '../components/instrument-panel-2.vue';
import instrumentPanelVue2 from '../components/instrument-panel-sm2.vue';
import matrixVue1 from '../components/matrix-5.vue';
import top from '../components/top.vue';
import barItem from '../components/barItem14.vue';
import synthesize from '../components/synthesize.vue';
import { useRouter } from 'vue-router';
import { mainStore } from '../store/index';
import linkItem from '../components/pageItem/link-item.vue';
const store = mainStore();

const pageData: PageData = reactive({
  title: '综合运营指数驾驶舱',
  status: '优',

  options: [],
  itemData1: [
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.2,
      value: 8.2,
      xlabel: '1-八通线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.5,
      value: 8.5,
      xlabel: '2号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.5,
      value: 8.5,
      xlabel: '5号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.7,
      value: 8.7,
      xlabel: '6号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.9,
      value: 8.9,
      xlabel: '7号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.7,
      value: 8.7,
      xlabel: '8号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.4,
      value: 8.4,
      xlabel: '9号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.5,
      value: 8.5,
      xlabel: '10号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '11号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '13号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.8,
      value: 8.8,
      xlabel: '15号线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.8,
      value: 8.8,
      xlabel: '昌平线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '亦庄线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '房山线',
    },
    {
      indexName: '平均满载率',
      rank: '优',
      ratio: 1,
      transferValue: 8.6,
      value: 8.6,
      xlabel: '首都机场线',
    },
  ],
  itemData: [
    {
      indexName: '平均满载率',
      rank: '良',
      ratio: 0.4,
      transferValue: 7,
      value: 0.30136702579672314,
    },
  ],
  dataList: [
    [
      {
        indexName: '运营事故数',
        rank: '优',
        ratio: 0.3,
        value: 3,
        transferValue: 9,
      },
      {
        indexName: '行车事故数',
        rank: '优',
        ratio: 0.2,
        value: 1,
        transferValue: 8,
      },
      {
        indexName: '运营险性事件数',
        rank: '优',
        ratio: 0.3,
        value: 2,
        transferValue: 9,
      },
      {
        indexName: '行车险性事件数',
        rank: '优',
        ratio: 0.2,
        value: 1,
        transferValue: 9,
      },
      {
        indexName: '安全指数',
        rank: '优',
        ratio: 0.2,
        value: 8.8,
        transferValue: 8.8,
      },
    ],
    [
      {
        indexName: '综合运营指数',
        rank: '优',
        ratio: 1,
        value: 8.1,
        transferValue: 8.1,
      },
    ],
    [
      {
        indexName: '列车兑现率',
        rank: '优',
        ratio: 0.3,
        value: 0.9998,
        transferValue: 10,
      },
      {
        indexName: '列车正点率',
        rank: '优',
        ratio: 0.4,
        value: 0.999,
        transferValue: 9,
      },
      {
        indexName: '列车利用率',
        rank: '良',
        ratio: 0.2,
        value: 0.6,
        transferValue: 6,
      },
      {
        indexName: '牵引单耗',
        rank: '良',
        ratio: 0.1,
        value: 2.0,
        transferValue: 8,
      },
      {
        indexName: '运行指数',
        rank: '优',
        ratio: 0.3,
        value: 8.6,
        transferValue: 8.6,
      },
    ],
    [
      {
        indexName: '列车最大满载率',
        rank: '优',
        ratio: 0.2,
        value: 1.1,
        transferValue: 8,
      },
      {
        indexName: '平均满载率',
        rank: '良',
        ratio: 0.1,
        value: 0.2,
        transferValue: 6,
      },
      {
        indexName: '超载区间占比',
        rank: '良',
        ratio: 0.2,
        value: 0.2,
        transferValue: 6,
      },
      {
        indexName: '乘客平均出行速度',
        rank: '优',
        ratio: 0.1,
        value: 35,
        transferValue: 8,
      },
      {
        indexName: '平均候车时长',
        rank: '优',
        ratio: 0.1,
        value: 5,
        transferValue: 8,
      },
      {
        indexName: '平均滞留次数',
        rank: '优',
        ratio: 0.1,
        value: 3,
        transferValue: 9,
      },
      {
        indexName: '客运强度',
        rank: '优',
        ratio: 0.1,
        value: 1.5,
        transferValue: 10,
      },

      {
        indexName: '乘客投诉率',
        rank: '良',
        ratio: 0.1,
        value: 0.02,
        transferValue: 6,
      },
      {
        indexName: '服务指数',
        rank: '优',
        ratio: 0.3,
        value: 8.5,
        transferValue: 8.5,
      },
    ],
    [
      {
        indexName: '列车服务可靠度',
        rank: '良',
        ratio: 0.3,
        value: 500,
        transferValue: 8,
      },
      {
        indexName: '影响行车故障率',
        rank: '优',
        ratio: 0.3,
        value: 0.05,
        transferValue: 8,
      },
      {
        indexName: '车辆系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 9,
      },
      {
        indexName: '信号系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 9,
      },
      {
        indexName: '供电系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 8,
      },
      {
        indexName: '机电系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 8,
      },
      {
        indexName: '设备指数',
        rank: '优',
        ratio: 0.1,
        value: 7.4,
        transferValue: 8.2,
      },
    ],
  ],

  matrixObj: [
    { indexName: '换乘系数', rank: '中', ratio: 0.2, transferValue: 5.0 },
  ],
  linkData: [
    {
      label: '列车运行驾驶舱',
      link: '/home',
    },
  ],

  classList: ['aa', 'bb', 'cc', 'dd', 'ff'],
});

interface PageData {
  title: string;
  status: string;
  itemData1: Array<object>;
  itemData: Array<object>;
  dataList: Array<any>;
  classList: Array<any>;
  options: Array<object>;
  linkData: Array<any>;
}
const router = useRouter();
const handleSelect = (num: number) => {
  switch (num) {
    case 0:
      router.push('/safe');
      break;
    case 2:
      router.push('/run');
      break;
    case 3:
      router.push('/service');
      break;
    case 4:
      router.push('/equipment');
      break;
  }
};

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
const changeCurrentDate = () => {};

const changeData = () => {
  pageData.dataList = [
    [
      {
        indexName: '运营事故数',
        rank: '优',
        ratio: 0.3,
        value: 3,
        transferValue: 9,
      },
      {
        indexName: '行车事故数',
        rank: '优',
        ratio: 0.2,
        value: 1,
        transferValue: 8,
      },
      {
        indexName: '运营险性事件数',
        rank: '优',
        ratio: 0.3,
        value: 2,
        transferValue: 9,
      },
      {
        indexName: '行车险性事件数',
        rank: '优',
        ratio: 0.2,
        value: 1,
        transferValue: 9,
      },
      {
        indexName: '安全指数',
        rank: '优',
        ratio: 0.2,
        value: 8.8,
        transferValue: Math.random() * (8.8 - 8.7) + 8.7,
      },
    ],
    [
      {
        indexName: '综合运营指数',
        rank: '优',
        ratio: 1,
        value: 8.1,
        transferValue: Math.random() * (8.8 - 8.1) + 8.1,
      },
    ],
    [
      {
        indexName: '列车兑现率',
        rank: '优',
        ratio: 0.3,
        value: 0.9998,
        transferValue: 10,
      },
      {
        indexName: '列车正点率',
        rank: '优',
        ratio: 0.4,
        value: 0.999,
        transferValue: 9,
      },
      {
        indexName: '列车利用率',
        rank: '良',
        ratio: 0.2,
        value: 0.6,
        transferValue: 6,
      },
      {
        indexName: '牵引单耗',
        rank: '良',
        ratio: 0.1,
        value: 2.0,
        transferValue: 8,
      },
      {
        indexName: '运行指数',
        rank: '优',
        ratio: 0.3,
        value: 8.6,
        transferValue: 8.6,
      },
    ],
    [
      {
        indexName: '列车最大满载率',
        rank: '优',
        ratio: 0.2,
        value: 1.1,
        transferValue: 8,
      },
      {
        indexName: '平均满载率',
        rank: '良',
        ratio: 0.1,
        value: 0.2,
        transferValue: 6,
      },
      {
        indexName: '超载区间占比',
        rank: '良',
        ratio: 0.2,
        value: 0.2,
        transferValue: 6,
      },
      {
        indexName: '乘客平均出行速度',
        rank: '优',
        ratio: 0.1,
        value: 35,
        transferValue: 8,
      },
      {
        indexName: '平均候车时长',
        rank: '优',
        ratio: 0.1,
        value: 5,
        transferValue: 8,
      },
      {
        indexName: '平均滞留次数',
        rank: '优',
        ratio: 0.1,
        value: 3,
        transferValue: 9,
      },
      {
        indexName: '客运强度',
        rank: '优',
        ratio: 0.1,
        value: 1.5,
        transferValue: 10,
      },

      {
        indexName: '乘客投诉率',
        rank: '良',
        ratio: 0.1,
        value: 0.02,
        transferValue: 6,
      },
      {
        indexName: '服务指数',
        rank: '优',
        ratio: 0.3,
        value: 8.5,
        transferValue: 8.5,
      },
    ],
    [
      {
        indexName: '列车服务可靠度',
        rank: '良',
        ratio: 0.3,
        value: 500,
        transferValue: 8,
      },
      {
        indexName: '影响行车故障率',
        rank: '优',
        ratio: 0.3,
        value: 0.05,
        transferValue: 8,
      },
      {
        indexName: '车辆系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 9,
      },
      {
        indexName: '信号系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 9,
      },
      {
        indexName: '供电系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 8,
      },
      {
        indexName: '机电系统故障率',
        rank: '优',
        ratio: 0.1,
        value: 0.015,
        transferValue: 8,
      },
      {
        indexName: '设备指数',
        rank: '优',
        ratio: 0.1,
        value: 7.4,
        transferValue: Math.random() * (8.1 - 8.2) + 8.2,
      },
    ],
  ];
};

onMounted(() => {});
const linkList = [
  {
    name: '综合运营指数',
    link: '/homeOperation',
  },
];
</script>

<template>
  <div class="container">
    <top :topObj="pageData" :link="pageData.linkData" v-if="false"></top>

    <div class="content-box">
      <linkItem :obj="linkList"></linkItem>
      <!-- 综合信息栏 -->
      <div class="card-container">
        <div
          class="card-box"
          :class="pageData.classList[index]"
          v-for="(item, index) in pageData.dataList"
          :key="item"
        >
          <h2
            :class="{ 'link-text': index !== 1 }"
            @click="handleSelect(index)"
          >
            {{
              pageData.dataList[index][pageData.dataList[index].length - 1]
                .indexName
            }}

            <span
              class="icon"
              :style="{
                background: setIconColor(
                  pageData.dataList[index][pageData.dataList[index].length - 1]
                    .rank
                ),
              }"
              >{{
                pageData.dataList[index][pageData.dataList[index].length - 1]
                  .rank
              }}</span
            >
            <span class="picker-item" v-if="index === 1">
              <el-date-picker
                v-model="store.currentTime"
                type="date"
                placeholder="选择日期"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                @change="changeData()"
              >
              </el-date-picker>
            </span>
          </h2>
          <div class="strong-box" v-if="index === 1">
            <div class="strong-item">
              <instrument-panelVue
                :obj="
                  pageData.dataList[index][pageData.dataList[index].length - 1]
                "
              ></instrument-panelVue>
              <bar-item
                title=""
                :yObj="pageData.itemData1"
                @changeDate="changeCurrentDate"
              ></bar-item>
            </div>
          </div>
          <div v-else>
            <instrument-panelVue-2
              style="margin: 0 auto"
              :obj="
                pageData.dataList[index][pageData.dataList[index].length - 1]
              "
            ></instrument-panelVue-2>

            <matrixVue-1 :obj="pageData.dataList[index]"></matrixVue-1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.link-text {
  cursor: pointer;
  position: relative;
  text-decoration: underline;
}
.content-box {
  padding: 10px 0 0;
}
h2 {
  position: relative;
}
.picker-item {
  position: absolute;
  top: -2px;
  right: 12px;
}

.strong-ul {
  list-style: none;
  padding-top: 4px;
  p {
    margin: 0;
    padding: 0;
  }
  li {
    height: 80px;
    background: rgba(15, 60, 108, 0.8);
    border-left: 8px solid #00cc92;
    margin: 14px 0;
    padding: 0 20px;
    line-height: 80px;
    font-size: 20px;
  }
}
.grid-box {
  div {
    background: rgba(24, 55, 158, 0.548);
  }
}
.strong-box {
  width: 100%;
  padding-top: 20px;
  text-align: center;
  .strong-item {
    display: inline-block;
    text-align: left;
    width: 590px;
    vertical-align: top;
    margin: 0 10px;
  }
}
.card-container {
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'aa bb cc'
    'dd bb ff';
  grid-gap: 20px 20px;
  width: 1880px;
  height: 920px;
  padding: 0px 20px;
  .aa {
    grid-area: aa;
  }
  .bb {
    grid-area: bb;
  }
  .cc {
    grid-area: cc;
  }
  .dd {
    grid-area: dd;
  }
  .ee {
    grid-area: ee;
  }
  .ff {
    grid-area: ff;
  }
  .card-box {
    border: 1px solid #6e7283;
    display: inline-block;
    border-radius: 4px;
    color: #fff;
    background-color: #20232f;
    font-size: 14px;
    text-align: left;
    h2 {
      padding: 0 0 0 20px;
      text-align: left;
      margin: 0;
      color: #fff;
      font-size: 22px;
      line-height: 44px;
      border-bottom: 1px solid #6e7283;
    }
  }
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
  // position: absolute;
  // top: 10px;
  // left: 114px;
}
:deep(.el-input__wrapper) {
  background-color: #7598eb57 !important;
  box-shadow: none;
  border: 1px solid #6e7283;
}
:deep(.el-input__inner) {
  color: #fff !important;
}
:deep(.el-input .el-select__caret.el-icon) {
  color: #6e7283;
}
</style>
