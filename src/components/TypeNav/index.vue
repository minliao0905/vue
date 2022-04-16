<template>
   <div class="type-nav">
     <div class="container">
       <div @mouseleave="leaveShow">
       <h2 class="all" @mouseenter="changeShow">全部商品分类</h2>
       <!-- 三级联动结构||过渡动画效果-->
         <transition name="sort">
           <div class="sort" v-show="show">
             <div class="all-sort-list2" @click="goSearch">
               <div
                   class="item"
                   v-for="(c1,index) in categoryList" :key="c1.categoryId"
                   @mouseenter="changeIndex(index)">
                 <h3 :class="{show:currentIndex === index }">
                   <a :data-categoryName="c1.categoryName"
                      :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                 </h3>
                 <div class="item-list cleatfix"
                      :style="{display:currentIndex===index ? 'block':'none',}">
                     <div class="subitem"
                          v-for="(c2,index) in c1.categoryChild"
                          :key="c2.categoryId">
                         <dl class="fore">
                           <dt>
                             <a :data-catagroyName="c2.categoryName"
                                :data-category2Id="c2.catagoryId">{{c2.categoryName}}</a>
                           </dt>
                           <dd>
                             <em
                               v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                               <a :data-catagoryName="c3.categoryName"
                                  :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                             </em>
                           </dd>
                         </dl>
                     </div>
                 </div>
               </div>
             </div>
           </div>
         </transition>
     </div>
       <nav class="nav">
         <a>服装城</a>
         <a href="###">美妆馆</a>
         <a href="###">尚品汇超市</a>
         <a href="###">全球购</a>
         <a href="###">闪购</a>
         <a href="###">团购</a>
         <a href="###">有趣</a>
         <a href="###">秒杀</a>
       </nav>
     </div>
   </div>
</template>

<script>
import  {mapState} from 'vuex';
import throttle from "lodash/throttle"
//按需引入
export default {
  name: "TypeNav",
  data(){
    return {
      currentIndex:-1,
      show:true,
    }
  },
  mounted() {
    this.$store.dispatch('getCategoryList');
  },
   computed:{
    ...mapState({
      //右侧需要一个函数。当使用这个计算属性时，右侧函数会立即执行一次
      categoryList:(state)=>{
        // console.log(state.home.categoryList)
        return state.home.categoryList;
      }
    })
  },
  methods: {
    //h3的鼠标移入事件:用户行为如果过快，会出现浏览器反应不过来的现象----【用户行为太快】
    //回调函数里面业务代码很多，卡顿、业务没有完整完成。
    //节流功能
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 20),
    //编程式导航按钮的回调函数
    goSearch(event) {
      // this.$router.push('/Search')
      console.log("Tynav跳转")
      //点击a标签进行路由跳转：父节点代理的子节点的类型很多 div h3 dd dt em a
      //通过event可以获取到当前触发事件的节点
      let nodeElement = event.target;
      //给a标签添加自定义属性data-categoryName，保证这个节点带data-categoryName，一定是a标签
      //可以通过节点的dataset属性获取相应节点的自定义属性，返回的是一个对象KV【自定义属性相关的】
      //如果带有categoryname字段的一定是a标签
      let { categoryname, category1id, category2id, category3id } =
          nodeElement.dataset;
      //执行if语句：只能区分点击的标签是不是a
      if (categoryname) {
        //准备路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        //一级分类的a标签
        if (category1id) {
          query.category1Id = category1id;
          //二级分类的a标签
        } else if (category2id) {
          query.category2Id = category2id;
          //三级分类a标签
        } else {
          query.category3Id = category3id;
        }
        //路由跳转之前：看一下有没有params参数，如果有params参数需要携带给search
        if (this.$route.params) {
          //query参数
          location.query = query;
          //params
          location.params = this.$route.params;
          //如有有params参数也需要携带给search模块
          //home->search确实需要记录历史
          //search->search不需要存储历史记录
          if (this.$route.path != "/home") {
            this.$router.replace(location);
          } else {
            this.$router.push(location);
          }
        }
      }
    },
    //修改show的属性的方法（鼠标进入）
    changeShow() {
      //鼠标移上去三级联动需要隐藏
      //下面代码只有在serach模块的时候，才会执行
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    //修改show的属性的方法（鼠标离开）
    leaveShow() {
      //鼠标移出的时候，三级联动的一级菜单没有背景颜色
      this.currentIndex = -1;
      //需要把三级联动展示出来
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
            &.show {
              background: linear-gradient(
                  to right,
                  pink,
                  yellow,
                  cyan,
                  blue,
                  red
              );
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    //过渡动画的样式
    //如果transiton没有name属性 ： v-enter   v-enter-to v-enter-active
    //如果transition有name属性  ： name的属性值-enter  name的属性值-enter-to
    //进入状态：开始阶段
    .sort-enter {
      height: 0px;
      transform: rotate(0deg);
    }
    //进入状态：结束阶段
    .sort-enter-to {
      height: 461px;
      transform: rotate(360deg);
    }
    //定义过渡动画的时间等等
    .sort-enter-active {
      transition: all 0.2s;
    }
  }
}
</style>

