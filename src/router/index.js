
import {createRouter ,createWebHistory} from 'vue-router';
import store from "@/store"


const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/home',
            component:()=>import('@/pages/Home'),
            meta: { show: true },
        },

        {
            path: '/detail/:skuId',
            component: () => import('@/pages/Detail'),
            meta: { show: true },
        },
        {
            path:'/addcartsuccess',
            component:()=>import('@/pages/AddCartSuccess'),
            meta :{show:true},
            name:"addcartsuccess"
        },{
        path:'/shopCart',
            component:()=>import('@/pages/ShopCart'),
            meta:{show:true}
        }, {
            path:'/Login',
            component:()=>import('@/pages/Login'),
            meta:{show:true}
        },
         {
            path:'/register',
            component:()=>import('@/pages/Register'),
            meta:{show:true}
        },
        {
            path: '/trade',
            component: () => import('@/pages/Trade'),
            meta: { show: true },
            beforeEnter: (to, from, next) => {
                //to：去哪个路由
                //from：从哪个路由而来
                //next：放行函数
                //代表的用户从购物车跳转到交易页面，才放行
                if (from.path == "/shopcart") {
                    next();
                } else {
                    //用户并非从购物车而来
                    //next(false): 中断当前的导航。
                    //如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
                    next(false);
                }
            },
        },
        // 重定向
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:'/Search/:keyword?',
            component:()=>import('@/pages/Search'),
            meta:{show:true},
            name:'search',
            // component: Search,
            // 将params参数和query参数映射成属性传入路由组件
            props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2})

        },
        {
            path: '/pay',
            component: () => import('@/pages/Pay'),
            meta: { show: true },
            //路由独享守卫
            beforeEnter: (to, from, next) => {
                //进入支付页面，必须从交易页面而来
                if (from.path == '/trade') {
                    next();
                } else {
                    next(false);
                }
            }

        }
        ,
        {
            path: '/paysuccess',
            component: () => import('@/pages/PaySuccess'),
            meta: { show: true }
        },
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
    ],
    scrollBehavior(to, from, savedPosition) {
        //设置Y轴的起点【y属性值没有负数】
        //当然滚动行为也可以设置x轴的
        return { y: 0 }
    }
})

//备份VueRouter.prototype原有的push|replace方法
let originPush = createRouter.prototype.push;
let originReplace = createRouter.prototype.replace;
//重写VueRouter.prototype的push方法
createRouter.prototype.push = function (location, resolve, reject) {
    //函数对象的apply与call的区别?
    //相同点:都可以改变函数的上下文一次，而且函数会立即执行一次
    //不同：函数执行的时候，传递参数不同，apply需要的是数组，call传递参数的时候用逗号隔开
    //原始的push方法可以进行路由跳转，但是需要保证上下文this是VueRouter类的实例
    //第一种情况：外部在使用push的时候传递成功与失败的回调
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        //第二种情况：外部在使用push方法的时候没有传递成功与失败的回调函数
        originPush.call(this, location, () => { }, () => { });
    }
}
//重写VueRouter.prototype.replace方法
createRouter.prototype.replace = function (location, resolve, reject) {
    (resolve && reject) ? originReplace.call(this, location, resolve, reject) : originReplace.call(this, location, () => { }, () => { });
}
router.beforeEach(async (to, from, next) => {

    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
if(token) {
    if (to.path == 'login') {
        next('/home')
    } else {
        if (name) {
            next();
        } else {
            try {
                await store.dispatch('getUserInfo');
                next()
            } catch (error) {
                await store.dispatch('userLogout');
                next('/login')
            }
        }
    }
}else {
    //未登录的判断
    //如果用户未登录：去交易页面trade、去支付页面pay、支付成功页面paysuccess、个人中心 center/myorder  center/grouporder
    //用户未登录应该去登录页
    //获取用户未登录想去的路由的路径
    let toPath = to.path;
    //判断未登录：去trade、去支付、去支付成功、去个人中心【我的订单、团购订单】
    if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
        //判断未登录：去trade、去支付、去支付成功、去个人中心【我的订单、团购订单】
        //跳转到登录页
        next('/login?redirect=' + toPath);
    } else {
        //去的并非上面这些路由,放行
        next();
    }

}
})

export default router