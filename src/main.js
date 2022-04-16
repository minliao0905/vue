import { createApp } from 'vue'
import App from './App.vue'

import  router from './router'
import store from '@/store';
import mitt from "mitt";
import mock from '@/mock/serve.js';


// 注册全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
const  app = createApp(App) ;
app.component(TypeNav.name,TypeNav);
app.use(store);
app.use(mock);
app.component(Carousel.name,Carousel);
app.component(Pagination.name,Pagination);
//配置全局事件总线
app.config.globalProperties.$bus = mitt();

app.use(router).mount('#app');

