import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
router.beforeEach((to, from, next) => {
  
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
});
const pinia = createPinia()



const app =createApp(App)
// 声明全局变量
app.config.globalProperties.$colorObj = [
  { name: '优',value:'#91cd77',icon:'d'},
  { name: '良', value: '#f0c854',icon:'c'} ,
  { name: '中', value: '#fc8251' ,icon:'b'},
  { name: '差', value: '#ff6f71',icon:'a'} 
]
  
  

app.use(router).use(pinia).use(ElementPlus).mount("#app");
