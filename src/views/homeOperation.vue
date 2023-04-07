<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import instrumentPanelVue from '../components/instrument-panel-2.vue';
import matrixVue1 from '../components/matrix-4.vue';
import top from '../components/top.vue';
import synthesize from '../components/synthesize.vue';
import { useRouter } from 'vue-router';
const pageData: PageData = reactive({
  title: '综合运营指数驾驶舱',
  status: '优',
  dataList: [
    [
      {
        indexName: '行车指数',
        rank: '优',
        ratio: 0.3,
        value: 8.6,
        transferValue: 8.6,
      },
      {
        indexName: '服务指数',
        rank: '良',
        ratio: 0.2,
        value: 6.4,
        transferValue: 6.4,
      },
      {
        indexName: '能效指数',
        rank: '良',
        ratio: 0.1,
        value: 7.4,
        transferValue: 7.4,
      },
      {
        indexName: '故障指数',
        rank: '良',
        ratio: 0.2,
        value: 8.6,
        transferValue: 8.6,
      },

      {
        indexName: '安全指数',
        rank: '优',
        ratio: 0.2,
        value: 8.8,
        transferValue: 8.8,
      },

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
        ratio: 0.2,
        value: 0.9998,
        transferValue: 10,
      },
      {
        indexName: '列车正点率',
        rank: '优',
        ratio: 0.2,
        value: 0.9999,
        transferValue: 9,
      },
      {
        indexName: '列车服务可靠度',
        rank: '良',
        ratio: 0.3,
        value: 500,
        transferValue: 8,
      },
      {
        indexName: '影响行车故障率',
        rank: '良',
        ratio: 0.3,
        value: 0.05,
        transferValue: 8,
      },
      {
        indexName: '行车指数',
        rank: '优',
        ratio: 0.3,
        value: 8.6,
        transferValue: 8.6,
      },
    ],

    [
      {
        indexName: '列车最大满载率',
        rank: '中',
        ratio: 0.2,
        value: 1.1,
        transferValue: 4,
      },
      {
        indexName: '换成系数',
        rank: '良',
        ratio: 0.1,
        value: 1.5,
        transferValue: 6,
      },
      {
        indexName: '乘客投诉率',
        rank: '良',
        ratio: 0.1,
        value: 0.02,
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
        indexName: '旅行速度',
        rank: '良',
        ratio: 0.1,
        value: 35,
        transferValue: 7,
      },
      {
        indexName: '超载区间占比',
        rank: '良',
        ratio: 0.2,
        value: 0.2,
        transferValue: 6,
      },
      {
        indexName: '服务指数',
        rank: '良',
        ratio: 0.2,
        value: 6.4,
        transferValue: 6.4,
      },
    ],
    [
      {
        indexName: '平均满载率',
        rank: '中',
        ratio: 0.3,
        value: 0.2,
        transferValue: 6,
      },
      {
        indexName: '列车利用率',
        rank: '中',
        ratio: 0.2,
        value: 0.6,
        transferValue: 6,
      },
      {
        indexName: '能力利用率',
        rank: '中',
        ratio: 0.1,
        value: 0.95,
        transferValue: 6,
      },
      {
        indexName: '客运强度',
        rank: '优',
        ratio: 0.3,
        value: 1.5,
        transferValue: 6,
      },
      {
        indexName: '牵引电耗',
        rank: '优',
        ratio: 0.1,
        value: 2.0,
        transferValue: 10,
      },
      {
        indexName: '能效指数',
        rank: '良',
        ratio: 0.1,
        value: 7.4,
        transferValue: 7.4,
      },
    ],
    [
      {
        indexName: '车辆系统故障率',
        rank: '优',
        ratio: 0.3,
        value: 0.015,
        transferValue: 9,
      },
      {
        indexName: '信号系统故障率',
        rank: '优',
        ratio: 0.3,
        value: 0.015,
        transferValue: 9,
      },
      {
        indexName: '供电系统故障率',
        rank: '良',
        ratio: 0.2,
        value: 0.015,
        transferValue: 8,
      },
      {
        indexName: '机电系统故障率',
        rank: '良',
        ratio: 0.2,
        value: 0.015,
        transferValue: 8,
      },
      {
        indexName: '故障指数',
        rank: '良',
        ratio: 0.2,
        value: 8.6,
        transferValue: 8.6,
      },
    ],
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
        rank: '良',
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
  classList: ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'],
});

interface PageData {
  title: string;
  status: string;
  dataList: Array<any>;
  classList: Array<any>;
  linkData: Array<any>;
}
const router = useRouter();
const handleSelect = (key: string) => {
  router.push(key);
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

const buildData = () => {
  // 根据规则生成随机数
  


};
</script>

<template>
  <div class="container">
    <top :topObj="pageData" :link="pageData.linkData"></top>
    <div class="content-box">
      <!-- 综合信息栏 -->
      <div class="card-container">
        <div
          class="card-box"
          :class="pageData.classList[index]"
          v-for="(item, index) in pageData.dataList"
          :key="item"
        >
          <h2
            :class="{ 'link-text': index === 1 }"
            @click="handleSelect('/xingche')"
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
          </h2>
          <div class="strong-box" v-if="index === 0">
            <div class="strong-item">
              <instrument-panelVue
                :obj="
                  pageData.dataList[index][pageData.dataList[index].length - 1]
                "
              ></instrument-panelVue>
            </div>
            <div class="strong-item">
              <ul class="strong-ul">
                <li
                  :style="{
                    borderColor: setIconColor(item2.rank),
                  }"
                  v-for="item2 in pageData.dataList[0].slice(0, -1)"
                  :key="item2"
                >
                  <p>{{ item2.indexName }} {{ item2.value }}</p>
                </li>
              </ul>
              <!-- <matrixVue-1 :obj="pageData.dataList[index]"></matrixVue-1> -->
            </div>
          </div>
          <div v-else>
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
    height: 530px;
    vertical-align: top;
    margin: 0 10px;
  }
}
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'aa aa bb'
    'aa aa cc'
    'dd ee ff';
  grid-gap: 20px 20px;
  width: 1880px;
  height: 920px;
  padding: 20px;
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
    border: 1px solid #3ae3ff;
    display: inline-block;
    border-radius: 4px;
    color: #fff;
    background-color: #09204e;
    font-size: 14px;

    text-align: left;
    h2 {
      padding: 0 0 0 20px;
      text-align: left;
      margin: 0;
      color: #fff;
      font-size: 22px;
      line-height: 44px;
      border-bottom: 1px solid #3ae3ff;
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
</style>
