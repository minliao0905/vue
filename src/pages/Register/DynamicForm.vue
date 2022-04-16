<template>
  <Form :validation-schema="schema" v-slot="{ errors }" class="form"  >
    <div class="content" >
    <label>手机号：</label>

    <Field class="field" v-model="form.phone" name="phoneFn" type="text" placeholder="请输入手机号" />
    <!-- 用户名校验失败提示 -->
    <div class="error-msg" v-if="errors.phoneFn" >{{ errors.phoneFn}}</div>

    </div>
    <div class="content">
      <label>用户名：</label>
    <Field v-model="form.password" name="usernameFn" type="text" placeholder="请输入用户名" />
    <!-- 密码校验失败提示 -->
    <div class="error-msg" v-if="errors.usernameFn">{{ errors.usernameFn}}</div>
    </div>
    <div class="content">
      <label>登陆密码：</label>
      <Field v-model="form.password" name="passwordFn" type="password" placeholder="请输入密码" />
      <!-- 密码校验失败提示 -->
      <div class="error-msg" v-if="errors.passwordFn">{{ errors.passwordFn}}</div>
    </div>
    <div class="content">
      <label>确认密码：</label>
      <Field v-model="form.password1" name="passwordFn1" type="password" placeholder="请输入确认密码" />
      <!-- 密码校验失败提示 -->
      <div class="error-msg" v-if="errors.passwordFn1">{{ errors.passwordFn1}}</div>
    </div>
  </Form>


</template>
<script>
import { Form, Field } from 'vee-validate';
import {reactive} from "vue";
export default {
  name: 'DynamicForm',
  components: {
    Form,
    Field,
  },

  data() {

    // 定义表单数据
    const form = reactive({
      phone:null,
      username: null,
      password: null,
      password1:null,
    })
// 定义校验规则
    const schema = {
      phoneFn(value){
        if(!value) return '手机号不能为空'
        if(/^1\d{10}$/.test(value)) return '请填写正确的手机号信息'
        return true;
      },

      usernameFn(value) {
        // 非空校验
        if (!value) return '用户名不能为空'
        // 字母开头,6-20字符之间
        if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return '必须以字母开头，且为6-20个字符'
        return true
      },
      passwordFn(value) {
        // 非空
        if (!value) return '密码不能为空'
        // 6-24个字符
        if (!/\w{6,24}/.test(value)) return '密码为6-24个字符'
        return true
      },
      passwordFn1(value ){
        if(!value) return '密码不能为空'
        if(value!=form.password)
          return '两次输入的密码不一致'
        return true;
      }
    }

    return {form, schema}
  }
}
</script>
<style lang="less" scoped>
.form{
  border: 1px solid black;
   field{

   }
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
</style>