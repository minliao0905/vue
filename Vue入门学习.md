

# **vue**

Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。2016年一项针对JavaScript的调查表明，Vue有着89%的开发者满意度。在GitHub上，该项目平均每天能收获95颗星，为Github有史以来星标数第3多的项目同时也是一款流行的JavaScript前端框架，旨在更好地组织与简化Web开发。Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互PS: Vue作者尤雨溪是在为AngularJS工作之后开发出了这一框架。他声称自己的思路是提取Angular中为自己所喜欢的部分，构建出一款相当轻量的框架最早发布于2014年2月

#### 1、Vue核心特性

##### [#](https://vue3js.cn/interview/vue/vue.html#数据驱动-mvvm)数据驱动（MVVM)

```
MVVM`表示的是 `Model-View-ViewModel
```

- Model：模型层，负责处理业务逻辑以及和服务器端进行交互
- View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面
- ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁

这时候需要一张直观的关系图，如下 ![image.png](web_img/4402c560-3ac6-11eb-85f6-6fac77c0c9b3.png)

##### [#](https://vue3js.cn/interview/vue/vue.html#组件化)组件化

1.什么是组件化一句话来说就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在`Vue`中每一个`.vue`文件都可以视为一个组件2.组件化的优势

- 降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现
- 调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单
- 提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级

##### [#](https://vue3js.cn/interview/vue/vue.html#指令系统)指令系统

解释：指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

- 常用的指令
  - 条件渲染指令 `v-if`
  - 列表渲染指令`v-for`
  - 属性绑定指令`v-bind`
  - 事件绑定指令`v-on`
  - 双向数据绑定指令`v-model`

没有指令之前我们是怎么做的？是不是先要获取到DOM然后在....干点啥

#### 2、Vue跟传统开发的区别

没有落地使用场景的革命不是好革命，就以一个高频的应用场景来示意吧注册账号这个需求大家应该很熟悉了，如下

![img](web_img/5ae84840-3ac6-11eb-ab90-d9ae814b240d.png)

用`jquery`来实现大概的思路就是选择流程dom对象，点击按钮隐藏当前活动流程dom对象，显示下一流程dom对象如下图(代码就不上了，上了就篇文章就没了..)

![img](web_img/65f89e60-3ac6-11eb-85f6-6fac77c0c9b3.png)

用`vue`来实现，我们知道`vue`基本不操作`dom`节点， 双向绑定使`dom`节点跟视图绑定后，通过修改变量的值控制`dom`节点的各类属性。所以其实现思路为：视图层使用一变量控制dom节点显示与否，点击按钮则改变该变量，如下图

![img](web_img/6f916fb0-3ac6-11eb-ab90-d9ae814b240d.png)

总结就是：

- Vue所有的界面事件，都是只去操作数据的，Jquery操作DOM
- Vue所有界面的变动，都是根据数据自动绑定出来的，Jquery操作DOM

#### 3、Vue和React对比

这里就做几个简单的类比吧，当然没有好坏之分，只是使用场景不同

[#](https://vue3js.cn/interview/vue/vue.html#相同点)相同点

- 都有组件化思想
- 都支持服务器端渲染
- 都有Virtual DOM（虚拟dom）
- 数据驱动视图
- 都有支持native的方案：`Vue`的`weex`、`React`的`React native`
- 都有自己的构建工具：`Vue`的`vue-cli`、`React`的`Create React App`

##### [#](https://vue3js.cn/interview/vue/vue.html#区别)区别

- 数据流向的不同。`react`从诞生开始就推崇单向数据流，而`Vue`是双向数据流
- 数据变化的实现原理不同。`react`使用的是不可变数据，而`Vue`使用的是可变的数据
- 组件化通信的不同。`react`中我们通过使用回调函数来进行通信的，而`Vue`中子组件向父组件传递消息有两种方式：事件和回调函数
- diff算法不同。`react`主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。`Vue` 使用双向指针，边对比，边更新DOM

## 

![vue-知识导航](D:\Typoramarkdown学习编辑\img\vue-知识导航.png)

## 一、初级入门

### 1.vue.js的目录解析

![20201230141638889](D:\Typoramarkdown学习编辑\img\20201230141638889.png)

| 目录/文件    | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| build        | 项目构建(webpack)相关代码                                    |
| config       | 配置目录，包括端口号等。我们初学可以使用默认的。             |
| node_modules | npm 加载的项目依赖模块                                       |
| src          | 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：**assets:** 放置一些图片，如logo等。**components**: 目录里面放了一个组件文件，可以不用。**App.vue**: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。**main.js**: 项目的核心文件。 |
| static       | 静态资源目录，如图片、字体等。                               |
| test         | 初始测试目录，可删除                                         |
| .xxxx文件    | 这些是一些配置文件，包括语法配置，git配置等。                |
| index.html   | 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。       |
| package.json | 项目配置文件。                                               |
| README.md    | 项目的说明文档，markdown 格式                                |



**创建组件，导入组件，应用组件**

```2html
<!-- 展示模板 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--引用该组件 -->
    <hello></hello>
  </div>
</template>
 
<script>
// 导入组件
import Hello from './components/Hello'
 
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
<!-- 样式代码 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 2.vue.js起步

每个vue应用都需要实例化vue（在JavaScript文件中编写以下代码，即实现  js。）

```
比如 `var vm = new Vue({`    

`el:"#id类元素名"`  

`data:{`     //定义的数组数据

`site :" xxx",`

`url:"xxxx"`

`},`

`methods:{` // 定义的方法

 `details: function() {                return  this.site + " - 学的不仅是技术，更是梦想！";            }`

`}`

 `})`
 
 // 引用vue对象
 document.write(vm.site === data.site) // true
document.write("<br>") 
vm.site = "124"  //直接引用
```

### 3vue.js 的模板语法，指令

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。

Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。

结合响应系统，在应用状态改变时， Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。



- **文本**

  ```
  <div id ="xx">
      <p>
         文本
      </p>
  </div>
  ```

  

- **html（v-html指令）用于输出html代码**

  ```
  <div id="app">
      <div v-html="message"></div>
  </div>
      
  <script>
  new Vue({
    el: '#app',
    data: {
      message: '<h1>菜鸟教程</h1>'
    }
    function_name(){
    
    }
  })
  </script>
  ```

- **html属性中的值 使用v-bind指令**

  通过vue实例中的判断use的值，class1类 样式的使用  input为选择方格 当前点击方格时，样式改变

  **v-model** 指令用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。

  按钮的事件我们可以使用 v-on 监听事件，并对用户的输入进行响应。

  ```html
  <style>
  .class1{
    background: #444;
    color: #eee;
  }
  </style>
  <body>
  <script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
  
  <div id="app">
    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <br><br>
    <div v-bind:class="{'class1': use}">
      v-bind:class 指令
    </div>
      </div>
      
  <script>
  new Vue({
      el: '#app',
    data:{
        use: false
    }
  });
  </script>
  ```

  

- **JavaScript表达式**

  Vue.js提供了完全的javascript 表达式的支持

- **指令**

  指令是带有 v- 前缀的特殊属性。

  指令用于在表达式的值改变时，将某些行为应用到 DOM 上。如下例子：

- **过滤器**

  Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示,

- **缩写**

  v-bind 缩写

  Vue.js 为两个最为常用的指令提供了特别的缩写：

  ```
  <!-- 完整语法 -->
  <a v-bind:href="url"></a>
  <!-- 缩写 -->
  <a :href="url"></a>
  ```

  v-on 缩写

  ```
  <!-- 完整语法 -->
  <a v-on:click="doSomething"></a>
  <!-- 缩写 -->
  <a @click="doSomething"></a>
  ```

### 4vue中MVVM 

![image-20220305154805425](D:\Typoramarkdown学习编辑\img\image-20220305154805425.png)

-  view:视图层 ，即界面
-  model层：数据层 ，获取界面所需数据，将其保存在这一层
-  vuemodel ：视图模型层，即实现界面交互（点击按钮，滚动时）时，数据的绑定和更新

![image-20220305154919692](D:\Typoramarkdown学习编辑\img\image-20220305154919692.png)	 



### 5.vue的生命周期

**1、什么是vue生命周期？**

Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

**2、vue生命周期的作用是什么？**

让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

**3、vue生命周期总共有几个阶段？**

它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后

**4、第一次页面加载会触发哪几个钩子？**

第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子

**5、DOM 渲染在 哪个周期中就已经完成？**

DOM 渲染在 mounted 中就已经完成了。 

**6、Vue实例的生命周期执行过程**

![image-20220305162654503](D:\Typoramarkdown学习编辑\img\image-20220305162654503.png)

![image-20220305162724756](D:\Typoramarkdown学习编辑\img\image-20220305162724756.png)

![image-20220305162741622](D:\Typoramarkdown学习编辑\img\image-20220305162741622.png)



![image-20220305162758384](D:\Typoramarkdown学习编辑\img\image-20220305162758384.png) 

![image-20220305163923087](D:\Typoramarkdown学习编辑\img\image-20220305163923087.png)

**7、父子组件的加载生命周期**

**父beforeDestroy->子beforeDestroy->子destroyed->父destroyed**

### 6.vue组件

作用：

- 可以提高代码复用率
- 简化js的编写，提高js的运行效率

![image-20220305212059834](D:\Typoramarkdown学习编辑\img\image-20220305212059834.png)

#### 组件嵌套

组件之间可以存在嵌套

```
 {
   path: '/center',
    component: () => import('@/pages/Center'),
  meta: { show: true },
   children: [
     //我的订单二级路由
     {
      path: "myorder",
     component: () => import('@/pages/Center/myOrder'),
   }
   ,
   {
      path: 'grouporder',
     component: () => import('@/pages/Center/groupOrder')
    }
    ,
    {
       path: '/center',
     redirect: '/center/myorder'
    }
   ] 
  }
```



#### vueComponent

![image-20220401230040620](web_img/image-20220401230040620.png)

当创建组件时，vue.extend() 返回vuecomponent对象，this指向的也为vuecomponent对象

**内置关系**

vuecomponent.prototype._proto_ === vue.prototype 

即组件的原型对象中的_proto_，指向vue的原型对象

![image-20220401231420959](web_img/image-20220401231420959.png)

#### props配置

设置接收的数据

<img src="web_img/image-20220401232842172.png" alt="image-20220401232842172" style="zoom:150%;" />

<img src="web_img/image-20220401233511228.png" alt="image-20220401233511228" style="zoom:150%;" />



### 7.vue-router

#### 1.router路由配置

![image-20220305214713403](D:\Typoramarkdown学习编辑\img\image-20220305214713403.png)

**创建VueRouter对象** 

```
const routers = [
{
path:'/home'
component:Home
children:[
{path:' '
component:  }
]
},
{
path:''
redirct:"/home"   //重定向，当打开页面时，自动跳转至path+重定向的路径页面
// 即配置路由的默认路径---根目录
}
]
// 配置路由和组件之间的应用关系
const router = new Vuerouter({
routers,
mode:’history‘ // 配置模式
})
```

**router-link属性**

属性：to 用于转向指定的页面

属性：tag 表示渲染的组件

属性：relace 无需赋值，不会留下记录，不能返回到上一个页面中。

属性：active-class  = ” active“ 可替换 class="router-link-active router-exact-active "

在style中可设置属性，实现当点击时，会修改属性，当有所有router-link 需要添加该属性时，也可

![image-20220305221928020](D:\Typoramarkdown学习编辑\img\image-20220305221928020.png)

router-link 也可通过按钮添加点击事件，实现跳转页面路径

页面跳转语句 this.$router.repalce();

 

**router 动态路由**

```
// App.vue中
<router-link :to="'/user/'+userId"></router-link>  // 使用v-bind的简略方式 --》 ：

export default {
 name:app 
 data(){
  return {
  userId:"zhangsan"
  }
 }
}

// user.vue中
在user组件的视图中获取用户数据
在script中实现
export default{
name: "user"
computed:{
userId(){
return thid.$router.params.userid   ;   //这里的username为在全局router中的path ：“/user/:userid”
}
}
}
```

#### 2.router路由的懒加载   --最方便的路由配置

![image-20220305225646091](D:\Typoramarkdown学习编辑\img\image-20220305225646091.png)

#### 3.router的嵌套

```
//在home.vue 组件中的显示， 在url中也会显示同样的路径
<router-link to="/home/news"></router-link>
<router-view></router-view>
```

#### 4.router的参数传递

当路由跳转时，从路径中获取数据

两种方式：params 和query 

可用router-link和javascript两种方法 ，实现跳转和获取参数

![image-20220306133103917](D:\Typoramarkdown学习编辑\img\image-20220306133103917.png)

 

```
<routet-link :to="{path:'/profile',query:{name:'xx',id:"xx"}}">档案</router-link>

// profile.vue

```





### 8.axios框架

axios 是一个基于[Promise](https://so.csdn.net/so/search?q=Promise&spm=1001.2101.3001.7020) 用于浏览器和 nodejs 的 HTTP 客户端，简单的理解就是ajax的封装。

- 特性：
  - 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
  - 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
  - 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
  - 拦截请求和响应
  - 转换请求数据和响应数据
  - 取消请求
  - 自动转换 JSON 数据
- 安装

```
npm install axios --save

//利用cdn（常用）

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

- axios 的基本使用

```
post请求的时候参数通过data进行传递
get请求的时候参数通过params进行传递
//在app.vue中，实现具体代码
1. axios 发送get、post请求
//get请求方式一：
axios({
		// 默认请求方式为get
		method: 'get',
		url: 'api',    //  api 为请求路径
		// 传递参数
		params: {
			key: value
		},
		// 设置请求头信息
		headers: {
			key: value
		}
		responseType: 'json'
	}).then((response) => {
		// 请求成功
		let res = response.data;
		console.log(res);
	}).catch((error) => {
		// 请求失败，
		console.log(error);
});
//post请求方式一：
// 注：post请求方法有的要求参数格式为formdata格式，此时需要借助 Qs.stringify()方法将对象转换为字符串
let obj = qs.stringify({
	key: value
});
axios({
	method: 'post',
	url: 'api',
	// 传递参数
	data: obj,
	// 设置请求头信息
	headers: {
		key: value
	},
	responseType: 'json'
}).then((response )=> {
	// 请求成功
	let res = response.data;
	console.log(res);
}).catch(error => {
	// 请求失败，
	console.log(error);
});

```

- axios请求方式

![image-20220306153527215](D:\Typoramarkdown学习编辑\img\image-20220306153527215.png)

![image-20220306153857305](D:\Typoramarkdown学习编辑\img\image-20220306153857305.png)

- axios发送并发请求

  主要用到两个函数

  ```
  axios.all([])  // 放入多个请求的数组
  axios.spread() // 将返回结果，转换为数组并输出
  ```

![image-20220306154448370](D:\Typoramarkdown学习编辑\img\image-20220306154448370.png)

- axios的全局配置

![image-20220306155310534](D:\Typoramarkdown学习编辑\img\image-20220306155310534.png)

常见的配置选项：

![image-20220306155553030](D:\Typoramarkdown学习编辑\img\image-20220306155553030.png)

- axios实例和模块分装

  ```js
  <script>
      //创建一个axios的实例
      let instance=axios.create({
          baseURL:"http://localhost:8888/",
          timeout:4000
      })
      //实例的使用
      instance({
          url: "info"
      }).then(res=>{
          console.log(res);
      })
  </script>
  ```

  

- axios的拦截器：

  - 1、请求拦截器（成功，失败）

  - 2、响应拦截器（成功，失败）

拦截器的作用：
1、在网络请求时发起请求

2、请求响应时对操作进行相应的处理

拦截器的使用案例：
1、请求拦截器成功时，可以添加网页加载的动画等

2、响应拦截器成功时，可以进行数据的相应处理

//定义了两个请求拦截器，两个响应拦截器，为了看运行流程

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
       //axios的请求拦截器，在axios进行网络请求之前触发
       axios.interceptors.request.use(
           config => {
               //在发送请求之前做些什么
               console.log("请求拦截器方向成功1");
               return config;   //请求拦截成功时必须返回config
           },
           error => {
               //对请求错误做些什么
               console.log("请求拦截器方向失败1");
               return Promise.reject(error);
           }
       )
       axios.interceptors.request.use(
           config => {
               console.log("请求拦截器方向成功2");  
               return config;   //请求拦截成功时必须返回config
           },
           error => {
               console.log("请求拦截器方向失败2");
               return Promise.reject(error);
           }
       )
       //axios的响应拦截器，在axios响应数据之前触发
       axios.interceptors.response.use(
           response => {
               //对响应数据做点什么
               console.log("响应拦截器方向成功1");
               return response;  //响应拦截器成功时必须返回response
           },
           error => {
               //对错误数据做点什么
               console.log("响应拦截器方向失败1");
               return Promise.reject(error);
           }
       )
       axios.interceptors.response.use(
           response => {
               console.log("响应拦截器方向成功2");
               return response;  //响应拦截器成功时必须返回response
           },
           error => {
               console.log("响应拦截器方向失败2");
               return Promise.reject(error);
           }
       )
           //axios发送get请求
    axios.get('http://localhost:8888/info').then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
    </scrpit>
```



###  9.vue 数据代理

![image-20220328231813160](web_img/image-20220328231813160.png)

![image-20220328231848267](web_img/image-20220328231848267.png)

### 10.vue事件



![image-20220328233116094](web_img/image-20220328233116094.png)

#### vue事件修饰符

```
修饰符可以连续写，在找顺序执行
事件执行的步骤为：捕捉事件-》事件冒泡
事件冒泡：
指发生在子元素身上的事件，会冒泡到父元素身上，如果在子元素身上点击后，也会出发父元素的点击事件，事件可以一级一级的冒上去，事件冒泡这个行为是默认存在，故需要进行及时阻止
```

![image-20220329191432121](web_img/image-20220329191432121.png)

#### 1.事件event

原生dom绑定事件，如click事件，在原生dom元素中才可使用，在自定义组件标签内无法直接调用

#### 2.native

 @click是vue事件绑定操作，具体是给普通的html标签使用的。

给下拉组件项设置点击事件：

<el-dropdown-item @click="logout()">退出 </el-dropdown-item>   

 el-dropdown-item本身是一个“组件”，组件是很多html标签的集合体，给这个集合体绑定事件，但是不知道具体给到哪个标签使用，因此事件绑定失败。

解决方案：

给事件绑定设置一个名称为native的修饰符(事件修饰符)，使得该事件作用到内部的html标签身上：
<el-dropdown-item @click.native="logout()">退出</el-dropdown-item>  

在vue3中已经被弃用

#### 3.stop 停止事件冒泡

父级元素和子级元素同时存在点击事件，事件就会逐层冒泡，阻止事件向上级传递，常用为内层事件添加stop修饰符

```html
<button @click.stop="addCountClick()">增加一位小伙伴</button>
```

#### 4.self修饰符

只有当点击当前事件时才会触发事件，在父级元素上加上self修饰符，除最外层div下，都是独立的dom元素，点击他们，都不会触发父级事件

```
template:`
        <div @click.self="handleBtnClick1">
            我是最外层的DIV文字
            <div>目前已点报名的小伙伴数量{{count}}.</div>
            <button @click=" addCountClick()">增加一位小伙伴</button>
       </div>
```

#### 5.prevent阻止默认事件的发生

   默认事件指对DOM的操作会引起自动执行的动作，比如点击超链接的时候会进行页面的跳转，点击表单提交按钮时会        重新加载页面等，使用".prevent"修饰符可以阻止这些事件的发生。

#### 6.capture捕获冒泡

当由冒泡事件发生时，有该修饰符的dom元素，会先执行

![image-20220416151521546](web_img/image-20220416151521546.png)

#### 7.once设置事件只能触发一次

#### 8.passive

passive 会告诉浏览器你不想阻止事件的默认行为。目的提高性能

#### vue键盘事件

```html
<input type="text" placeholder="键盘操作" @keyup.enter="function_name">

//特殊键盘事件  如ctrl,alt .shift, meta(win键)
// 系统修饰键
<input type="text" placeholder="键盘操作" @keydown.tab="function_name">
```

<img src="web_img/image-20220329193609064.png" alt="image-20220329193609064" style="zoom:150%;" />





### 11.计算属性和监听属性（compute & watch)

**计算属性：**

> - 支持缓存，只有依赖数据发生改变，才会重新进行计算
> - 不支持异步，当computed内有异步操作时无效，无法监听数据的变化  
> - 如果computed属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。 

```js
const vm = new Vue({
    el:"#root",
    data:{
        firstname:"张",
        lastname:"三",
    },
    methods:{
      fullname(){
          return this.firstname + " . " +this.lastname;
      }
    },
    computed:{
      fullname_c:{
          //get方法 有缓存的作用
          //get方法什么时候被调用？ 除此读取fullname时，所依赖的数据发生改变时
          get(){
              return '小猪佩奇的名字是 ：' + this.firstname + this.lastname;
          }
      }
    }, 
})
```

**监听属性watch：**

> - 不支持缓存，数据变，直接会触发相应的操作；
> - watch支持异步；
> - 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
> - 当一个属性发生变化时，需要执行对应的操作；一对多；
> - 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数： 
> - deep:  深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修改obj里面任何一个属性都会触发这个监听器里的 handler
> - immediate:组件加载立即出发回调函数执行

```js
const vm2 = new Vue ({
     el:"#root2",
     data:{
         isHot:true,
     },
     computed:{
         info(){
             return this.isHot ? "搞笑，炎热":"不搞笑，凉爽"
         }
     },
     methods:{
         changeWeather(){
             this.isHot = !this.isHot;
         }
     },
     //监视方法1
     watch:{
         isHot:{
             //handler 当 ishot变化时，才被调用
             handler(newValue,oldValue){
                 console.log('isHot被修改了',newValue,oldValue);
             }
         }
     }
 })
 //监视方法2：在不确定监视对象的情况可用
 vm2.$watch('isHot',{
     handler(newValue,oldValue){
         console.log('isHot被修改了2',newValue,oldValue);
     }
 })
```

**深度监视 :deep**

<img src="web_img/image-20220329214512665.png" alt="image-20220329214512665" style="zoom:150%;" />

### 12.V-指令

```
//全选按钮选中|未选中
isChecks() {
  //遍历数组里面的每一个元素（产品）：如果每一个产品的isChecked属性都为1->勾上
  //如果有一个产品isChecked属性为零，底下计算返回的是布尔值false->不够选上
  return this.shopList.every((item) => item.isChecked == 1) && this.shopList.length>0;
},
```

#### v-show 和v-if

v-show:通过样式display控制
v-if：通过元素上树与下树进行操作
面试题:开发项目的时候，优化手段有哪些?
1:v-show|v-if
2:按需加载 

#### v-model

实际只是作为语法糖

实现：v-bind绑定响应式数据，触发oninput事件并传递数据

```
<input v-model="searchText">

<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>

监听绑定事件，主要用于textArea ,input ,checkbox以及select 创建双向数据绑定，v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。
v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
text 和 textarea 元素使用 value 属性和 input 事件
checkbox 和 radio 使用 checked 属性和 change 事件
select 字段将 value 作为 prop 并将 change 作为事件
```



## 二、组件化开发vue

### 1.路由传递参数

params参数：路由需要占位，程序就崩了，属于URL当中一部分
query参数：路由不需要占位，写法类似于ajax当中query参数

**路由传递参数先关面试题**

```
 1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
      不可以：不能这样书写，程序会崩掉
     2:如何指定params参数可传可不传? 
     3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
     4:如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
     5: 路由组件能不能传递props数据?
```

### 2.vuex 状态管理库

作为官方提供的一个插件，集中式的管理项目中的组件共用的数据

**模块式开发【modules】**

**Vuex核心概念:state、actions、mutations、getters、modules**

```
创建实例 ===》 创建 store--->index.js

import {createStore} from "vuex"; 
 
export default createStore({
   //模块式开发 ，将小仓库合并为大仓库
     modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
  },
})；
```

```
//在store --》 home  --》 index.js 中 关于获取categoryList 的配置
import {reqCategoryList} from '@/api';

const state = {
    categoryList:[],
}

const mutations = {
    GETCATEGORY(state,categoryList){
        state.categoryList = categoryList;
    },
}
const actions = {
    async getCategoryList({commit}){
        let result = await reqCategoryList();
        //获取的categoryList 为 0 输出查看result之后，查看 result.data
        // console.log( result);
        if(result.data.code == 200){
            commit('GETCATEGORY',result.data.data);
        }
    },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}
```



```
state：

用于存放数据，通常将全局数据保存在这里
  state: {
        msg: 'hello world'
    }
    //或者
  const state = {
   msg：‘hello world'
  }  
在vue组件中我们可以通过this.$store.state来获取vuex下的state状态。
 data() {
    return {
      msg: this.$store.state.msg
    };
  }
```

```
Getter

有些时候我们需要从store中的state中返回特定的模板或者计算，这个时候我们就需要用到Getter
```

```
Mutation

Mutation 使用来修改state中的数据，不支持异步修改。
mutations:{
   state.msg = 'hello world again'
}
```

```
Action

Action 和 Mutation 都是修改state中的数据，唯一的区别就是Action支持异步调用Mutation来修改。
 async getUsermsg({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("GETUSERADDRESS", result.data);
    }
  },
```

```
Module

我们将store分割成模块，每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块，这样的话就解决了多人写作开发中同名数据发生冲突导致被修改。
```

#### mapState 辅助函数

　当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，

```
import  {mapState} from 'vuex';
import throttle from "lodash/throttle"
export default {
  name: "TypeNav",
  data(){
    return {
      currentIndex:-1,
      show:true,
    }
  },
  mounted() {
     //获取数据
    this.$store.dispatch('getCategoryList');
  },
   computed:{
    ...mapState({
      //右侧需要一个函数。当使用这个计算属性时，右侧函数会立即执行一次
      categoryList:(state)=>{
      //  console.log(state.home.categoryList)
        return state.home.categoryList;
      }
    })
  },
```

### 3.vue3--vue-router 配置

- 安装路由

  npm install vue-router@4

- 创建的路由组件一般放置在 view|pages文件夹

- 配置路由 router---》index.js文件

  ```
  import {createRouter ,createWebHistory} from 'vue-router';
  //import router from './router'  可以将router定义为外部文件，然后引入
  const router = createRouter({
      history:createWebHistory(),
      routes: [
          {
              path:'/home',
              //component右侧数值：放置的是一个箭头函数，当这个home路由被访问的时候，才会执行；
              //当用户访问当前Home的时候，我才加载Home路由组件，不访问，不加载当前Home路由组件
              component:()=>import('@/pages/Home'),
              //路由元信息--》控制footer显示
              meta:{show:true},
          },
          {
              path:'/Login',
               component:()=>import('@/pages/Login'),
              meta:{show:true},
          }
      ],
  })
  
   // 暴露router
   export default router
  ```

- 在main.js 中配置路由

  ```
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from './router/index'
  
  //注意use要在mount之前
  createApp(App).use(router).mount('#app') 
  ```

- 添加全局组件

  ```
  import xxx from xxxx/xxxx
  createApp(App).use(router).component("name",组件)
  
  import TypeNav from '@/pages/Home/TypeNav';
  // 参数：1.全局组件的名字，2引入的组件 
  createApp(App).use(router).component(TypeNav.name,TypeNav).mount('#app')
  
  ```

  

### 4.axios二次分装

可采用方法：XMLHttpRequest fetch JQ,axios

为什么要二次封装axios：主要需要使用请求和响应拦截器

请求拦截器 --》可以在发送请求之前处理一些业务

响应拦截器--》 当服务器返回数据之后，处理一些业务

- 安装 axios  ---> npm install --save axios

- 在api文件夹中配置 axios 的二次封装  --》@/api

- 可参考git|npm文档

  ```
  //======>requests.js文件中
  import axios from 'axios'
  //配置对象
  // 配置基础路径，发送请求的时候，在url路径中会出现api
  const requests = axios.create({
   		baseURL :"/api",
   		timeout:5000,
  })
  // 请求拦截器，在发送请求之前，该拦截器可以实现处理一些东西
  requests.interceptors.request.use((config)=>{
  //config 配置对象，对象中的属性 header 请求头
  return config;
  })
  requests.interceptors.response.use((res)=>{
  //成功获取之后的回调函数。服务器相应数据返回后，响应拦截器，可以检测，对返回做一些处理
  return res.data;
  },(error)=>{
  // 响应失败的回调函数，回调即作为参数传递给另一个函数的函数
    return Promise.reject(new Error('faile'));
  })
  
  //对外暴露
  export default requests;
  
  ```

  ```
  //=======>api----->index.js
  //当前这个模块，API进行统一管理
  import requests from '.request';
  
  export const reqCategoryList = ()=>{
  //发请求 axios 该返回时Promise对象
  return requests({url:'/product/getBaseCategoryList',method:'get'});
  
  }
  ```
  
  
  
  

### 5如何解决跨域问题

```
跨域问题
出现协议，端口，端口号不同请求，称为跨域，
当请求一个接口时，出现 Access-control-Allow-Orgin字眼的时候说明请求跨域
```

**如何解决跨域问题**

1.使用jsonp实现，网页通过script标签向服务器请求json数据，

服务器受到请求后，将数据放在一个指定名字的回调函数的参数里面传给前端。

2，CROS

3.代理 配置 vue.config.js 文件

```
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false , //关闭语法检查
  // //代理跨域
  devServer:{
    proxy:{
     '/api':{
       target:'http://localhost:',
       pathRewrite:{'^/api':''},
     } ,
    },
  },
})

```





### 6.防抖和节流

正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）

防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发,只会执行最后一次

节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发

区别：两者触发的频率不同

#### 函数防抖

**lodash 插件**

 **防抖: _.debounce(fn,waitTime,option)    节流: _.throttle(fn,waitTime,option)**

<img src="web_img/image-20220404233215572.png" alt="image-20220404233215572" style="zoom:150%;" />

<img src="web_img/image-20220404233719828.png" alt="image-20220404233719828" style="zoom:150%;" />

<img src="web_img/image-20220404233755338.png" alt="image-20220404233755338" style="zoom:150%;" />

#### 防抖和节流的区别:

**函数防抖debounce只是在最后一次事件后才触发一次函数。**
 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。


**函数节流throttle:不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数**


防抖适用于，用户点击更新，点赞和取消点赞事件，search搜索事件等等

节流适用于，页面滚动，每隔一段时间刷新，而不是等待滚动结束才发送请求执行操作。
search搜索是指，用户不断输入值的情况

*防抖，节流的实现*
*防抖 定时器*
*在固定时间内没有响应事件，则响应，反之则延长响应时间*

*节流 时间戳或者定时器，*
*在固定的时间段内执行一次该事件*

### 7、nextTick

> 定义: 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

#### 原理：异步任务处理

js是单线程语言，即某一时间内只能做一件事

**概念**

- 同步 在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务
- **异步** 不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行

**运行机制：**

**理解：即同步线程在主线程（执行栈），异步线程在任务队列，执行栈执行完毕后，执行异步任务**

- 所有同步线程都在主线程上执行，形成一个执行栈（execution context stack）
- 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
- 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

- 主线程不断重复上面的第三步

![image.png](web_img/83308f80-d881-11ea-ae44-f5d67be454e7.png)

#### nextTick

实现过程就是，创建一个异步任务，与dom更新一起。

 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM







### 8.Proxy |ES6的代理模式















### 9.在vue中使用Swiper



#### 样式导入

在swiper7中使用字段，所有样式导入都是预定义的，不允许直接导入样式文件

swiper6

```
 // swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'
```

swiper7

```
// swiper bundle styles    
import 'swiper/css/bundle' 

// swiper core styles
import 'swiper/css'   //该样式包 包含 所有刷卡器样式，包括所有模块样式（如导航，分页等）

//导入其他样式
import swiper/css/autoplay- 自动播放模块所需的样式 
import swiper/less/autoplay
import swiper/scss/autoplay
```

#### 网页版式

Swiper 容器元素现在应该具有类而不是 ：`swiper``swiper-container`

在刷卡器 6 中：

```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    ...
  </div>
</div>
```

在刷卡器 7 中：

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    ...
  </div>
</div>
```



####  模块安装

在 Swiper 7 之前，必须使用 Swiper 类上的方法安装模块。在版本 7 中，它仍然受支持，但是有一种新的推荐方法可以使用 parameter 安装模块：`Swiper.use()modules`

在刷卡器 6 中：

```js
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

new Swiper('.my-swiper', {
  // ...
});
```

在刷卡器 7 中：

```js
import Swiper, { Navigation, Pagination } from 'swiper';
//导入导航按钮和分页器
new Swiper('.my-swiper', {
  // pass modules here
  modules: [Navigation, Pagination],
  // ...
});
```

#### 方法，属性，事件

Swiper附带了一堆有用的事件，您可以收听。可以通过两种方式分配事件：

1. 在刷卡器初始化时使用参数：`on`

   ```js
   const swiper = new Swiper('.swiper', {
     // ...
     on: {
       init: function () {
         console.log('swiper initialized');
       },
     },
   });
   ```

2. 刷卡器初始化后使用的方法。`on`

   ```js
   const swiper = new Swiper('.swiper', {
     // ...
   });
   swiper.on('slideChange', function () {
     console.log('slide changed');
   });
   ```

#### 使用例子

```js
<template>
  <div class="swiper" ref="cur"   >
    <div class="swiper-wrapper">
      <!-- 全局轮播图的结构，需要一个数组，数组里面有多少个元素，就有多少张图片 -->
      <div class="swiper-slide" v-for="(item,index) in bannerList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <div class="swiper-scrollbar"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'
//引入Swiper
export default {
  name: "Carousel",
  props: ["bannerList"],
  watch: {
    //监听父组件给子组件传递过来的props属性
    //没有执行：为什么没有执行啊？
    //floorInfo是父组件传递过来的数据，因为没有发生变化，导致监听不到？
    bannerList: {
      //监听属性：立即监听，不管你属性有没有发生变化，立即执行一次。
      immediate: true,
      //监听回调
      handler() {
        //监听到属性变化，立即初始化swiper实例
        this.$nextTick(() => {
          //回调里面写代码的时候:1:服务器数据回来了 2:v-for执行完毕，结构已经有了
          new Swiper(this.$refs.cur, {
            loop: true,
            //设置自动播放的属性
            // autoplay:true;
            autoplay: {
              delay:2000,
            },

            modules: [Navigation, Pagination,Scrollbar,A11y ,Autoplay],
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //分页器小球点击的时候切换图片
              clickable: true,
             },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            // //如果需要滚动条的话
            // scrollbar:{
            //   el:'.swiper-scrollbar',
            // }
          });
        });
      },
    },
  },
};
</script>

<style scoped>
</style>
```





### 10.父子组件的通信方式props

父组件 传入参数

```js
<Floor v-for="(floor,index) in floorList" :key="floor.id" :floor-info="floor" />
```

子组件获取参数

```
props: ['floorInfo'],
```

实际传入方法：

在父组件页面中使用子组件，传入 ：list="数据名"

子组件 props :["数据名"]

**props ： 建议采用a-b (短横线分隔命名）**(曾在命名上踩坑)

### 11.子组件传值给父组件$emit 的用法

1、父组件可以使用 props 把数据传给子组件。
2、子组件可以使用 $emit,让父组件[监听] 到自定义事件 。

```
vm.$emit( event, arg ) //触发当前实例上的事件

vm.$on( event, fn );//监听event事件后运行 fn；
//使用,data表示传值或事件

this.$emit(“showcityName”,data) ////select事件触发后，自动触发showCityName事件
showcityName:是子组件传递给父组件的事件名，------父组件 可在子组件的调用中使用

//111111111***父组件中调用的子组件：
<son  v-on:increment="appAddCounter"><son>
<son   @increment="appAddCounter"></son>
appAddCounter是父组件中响应的方法
appAddCounter: function(e) {
	console.log('子组件传的值：',e)
}

//222222222***子组件：
template: '<button v-on:click="addCounter">第{{idx}}个子组件： {{ counter }}</button>',
methods：{
 addCounter(){
 var str = "我是子组件要传给父组件的值"
   console.log("这是子组件中的方法，在点击子组件中的button,响应事件，然后传值");
   this.$emit("increment",str)
 }
}


```


```js
<head> 
	<title>Vue 父组件和子组件相互传值demo</title> 
</head>
<body>
	<div id="app">
		<div id="counter-event-example">
			<p>{{ total }}</p>
 
			<!--这里使用了两个子组件，因为子组件的data是函数，所以它们的值互不影响-->
			<!--父组件在使用子组件的地方直接用 v-on 来监听子组件触发的事件。-->
			<button-counter v-bind:idx="1" v-on:increment="appAddCounter"></button-counter>
			<button-counter v-bind:idx="2" v-on:increment="appAddCounter"></button-counter>
		</div>
	</div>
 
	<script>
		Vue.component('button-counter', {
			//1.使用 $on(eventName)监听事件
			template: '<button v-on:click="addCounter">第{{idx}}个子组件： {{ counter }}</button>',
			props:['idx'],
			data: function() {
				return {
					counter: 0
				}
			},
			methods: {
				//子组件的自定义事件  
				addCounter: function() {
					this.counter += 1;
					var str ='我是第'+this.idx+'个子组件,我的值为：'+this.counter;
					//2.使用 $emit(eventName,obj) 触发事件   
					//increment: 是父组件指定的传数据绑定的函数，str: 子组件给父组件传递的数据
					this.$emit('increment',str);
				}   
			},
		})
		new Vue({
			el: '#counter-event-example',
			data: {
				total: 0
			},
			methods: {
				appAddCounter: function(e) {
					console.log('子组件传的值：',e)
					this.total += 1
				}
			}
		})
	</script>
</body>
```

### 12.子组件通信-BUS总线mitt实现组件之间通信和传参

**vue2之前：**

```js
main.js文件中的配置
//创建Vue类的一个实例// 即通过创建一个空的Vue来作为总线
new Vue({
  render: h => h(App),
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //把全部的请求函数：作为Vue.prototype的属性，组件实例可以获取
    //请求函数只需要注册一次，可以在组件当中使用。
    Vue.prototype.$API = API;
  }
  ,
  //注册路由,给组件的身上添加了$router与$route两个属性
  router,
  //注册仓库，给每一个组件的身上添加$store属性
  store
}).$mount('#app');
//可以 vue使用use方法
```

**vue3：**

```js
// 在vue3中 bus方式改为了使用mitt
// 使用emit 来注册， emitt("type","event"),第一个参数为事件名称，第二个为传参
// 使用on 来箭头，on("type","handler")
//两个成对出现，一个发起，一个接收。
```

**步骤：**

- 安装mitt

  ```js
  npm install --save mitt
  ```

- 在main.js中引入

  ```js
  import mitt from "mitt"
  app.config.globalProperties.$bus = mitt()
  ```

- 使用

  ```
   methods: {
      handler(index) {
        this.currentIndex = index;
        //通过全局事件总线：通知兄弟当前显示第几张图
  
        this.$bus.emit('send',index);
      },
    },
    
  ```

  ```
  mounted(){
    //接受兄弟组件传递过来的索引值
    this.$bus.on('send',(index)=>{ 
        this.currentIndex = index; 
    })
  }
  ```

### 13.导航守卫

导航，表示路由正在发生改变，进行路由改变

 是由vue-router提供的导航守卫，主要用来跳转和取消的方式来守卫导航

每个守卫方法接收两个参数

- **`to`**: 即将要进入的目标 [用一种标准化的方式](https://router.vuejs.org/zh/api/#routelocationnormalized)
- **`from`**: 当前导航正要离开的路由 

### 14.组件间通信

 



## 错误记录

### 1.命名        

      runtime-core.esm-bundler.js?d2dd:38   [Vue warn]: Do not use built-in or reserved HTML elements as component id: header 

这是因为组件的命名和html标签重复导致警告

将组件名改为 

```
<v-header class="header">
 name: "v-header",
```

### 2.warn警告

![image-20220406193316503](web_img/image-20220406193316503.png)



解决方法：报错原因本就是currentInde 没有定义 赋初值就好

```
在data（）中定义 currentIndex 
export default {
  name: "TypeNav",
  data(){
    return {
      currentIndex:-1,
      show:true,
    }
  },
  }
```

### 3.为什么mockjs返回404

原因：main.js中没有引入mock.js文件，或者没有安装 mock插件

### 4.关于谷歌浏览器报错 Not allowed to load local resource 的原因

原因： 
如果页面在服务器上，浏览器出于安全考虑是不允许html访问本地文件的。不会允许浏览器打开file://开头的本地图片的。

如果页面html文件是放在本地的，比如用浏览器打开桌面上的html文件，是可以访问本地图片文件的。但也不能访问所在根目录以外的文件夹下的图片。否则会报错： “not allowed to load local resource”。 

### 5.子组件获取不到父组件的数据

原因：子组件中存在报错，加载错误，导致加载不出数据

子组件报错，bus 全局总线--使用问题

## 日记

 

### spa与mpa

单页面应用和多页面应用
动态按需加载html js css 
由一个主页面和多个页面片段加载组成
和多页面应用，每个页面都是主页面，页面切换，都需要重新加载html js css 



优势:
提供较好的用户体验
加载速度快，局部刷新 

**面试题**

vue组件(最突出的的功能)

组件之间的通信方式有哪些？ 
对数据双向绑定的理解
1.model-view 之间存在的双向绑定

2.view-model
数据变化后更新视图
视图变化后更新视图

3.通过两个重要组成部分实现
监听器(observe)
解析器(compiler)



**字符串分割**

字符串切割 substring（begin，end）
切割范围【b，e）
不包含e

split 分割符分割



### 关于vue的理解

是目前非常流行的js框架，采用了mvc的开发模式，能够有效的获取数据更新，通过组件中特定的方法实现视图与模型的交互

特点
数据驱动mvvc开发模式

组件化

指令系统


传统开发，jQuery主要采用操作dom对象来实现，而vue实现双向数据绑定



react 

趋向于单向数据流，而vue趋向双向数据流

组件通信方式不同

