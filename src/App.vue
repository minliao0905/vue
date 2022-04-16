<template>
  <div>
    <Header/>
<!--    &lt;!&ndash; 路由组件出口的地方:展示的地方 &ndash;&gt;-->
    <router-view> </router-view>
<!--    &lt;!&ndash; 显示:首页、搜索显示  隐藏：登录、注册 &ndash;&gt;-->
<!--    v-show="$route.path=='/home'||$route.path=='/search'"-->
<!--    <Footer v-show="$route.meta.show"></Footer>-->
  </div>
</template>

<script>
//引入非路由组件
import Header from './components/Header';
import Home from "@/pages/Home";
// import Footer from './components/Footer'
export default {
  name: "App",
  components: {
    Home,
    Header
  },

};
</script>
<style scoped>
</style>
