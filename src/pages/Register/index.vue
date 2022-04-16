<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <router-link to="/login">登陆</router-link>
        </span>
      </h3>
     <DynamicForm  />
    </div>


    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号
      </div>
    </div>
  </div>
</template>

<script>
import DynamicForm from "@/pages/Register/DynamicForm";
import * as Yup from 'yup';
  export default {
    name: 'Register',
     components:{
      DynamicForm,
     },
    data: () => {

    },
    // methods: {
    //   //获取验证码的回调函数
    //   async getCode(){
    //     //获取到手机号码
    //     const {phone} = this;
    //     //目前咱们不做表单验证功能，至少判断一下phone不能为空
    //     if(phone){
    //       //通知Vuex发请求，向用户的手机发短信,手机的短信是发不到手机上的
    //       //如果验证码发到真实的手机上【后台可以处理的：插件，前几百条免费、但是后续的验证码收钱的】
    //       try {
    //         await this.$store.dispatch('getCode',phone);
    //         //让组件直接获取到仓库的数据，进行展示
    //         this.code = this.$store.state.user.code;
    //       } catch (error) {
    //         console.log(error)
    //       }
    //     }
    //   },
    //   //完成注册按钮的回调
    //   async register(){
    //   //这里是vee-valadiate提供的一个方法，如果表单验证全部成功，返回布尔值真，
    //   //如有有一个字段验证失败，返回布尔值false
    //   const success = await this.$validator.validateAll();
    //   console.log(success);
    //   if(success){
    //     //进行判断：全部的字段，表单验证成功以后在发请求，
    //     //只要有一个字段验证没有通过，补发请求
    //      //携带参数的：phone code password
    //     const {phone,code,password,password1} = this;
    //     //不做表单验证[稍微验证一下]
    //        try {
    //          //注册成功
    //          await this.$store.dispatch('userRegister',{phone,code,password});
    //          //跳转到登录页面
    //          this.$router.push('/login');
    //        } catch (error) {
    //          //注册失败
    //          console.log(error);
    //        }
    //   }
    //   }
    // },
  }
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;

  ul {
    li {
      display: inline-block;
      border-right: 1px solid #e4e4e4;
      padding: 0 20px;
      margin: 15px 0;
    }
  }
}
</style>