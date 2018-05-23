<template>
  <div class="register">
    <head-top v-bind="head"></head-top>
    <group>
      <x-input 
      title="手机号" 
      is-type="china-mobile"
      v-model="tele"></x-input>
      <x-input 
      type="password"
      title="密码"
      @on-change="confirmPass"  
      v-model="password"></x-input>
      <x-input 
      :equal-with="password" 
      type="password"
      title="确认密码"
      v-model="confirm"></x-input>
      <x-input 
      title="昵称"
      v-model="user"></x-input>
    </group>
    <group title="性别">
      <radio @on-change="radioC" :options="options"></radio>
    </group>
    <div class="regist_btn">
      <x-button type="primary" @click.native="registerIn">注册</x-button>
    </div>
    <alert 
    v-model="show" 
    :title="'提示'"
    @on-hide="goLogin">{{'注册成功!'}}</alert>
  </div>
</template>

<script>
import HeadTop from '../components/index/HeadTop.vue';
import { register } from '@/apis/users.js';
import { XButton, XInput, Group, Radio, Alert } from 'vux';
export default {
  components: {
    HeadTop,
    Group,
    XButton,
    XInput,
    Radio,
    Alert
  },
  data(){
    return {
      user: '',
      tele: '',
      password: '',
      confirm: '',
      options: [{
        key: 1,
        value: '男'
      }, {
        key: 2,
        value: '女'
      }],
      head: {
        goBack: true,
        title: '个人信息',
        login: false
      },
      fordebounce: 1000,
      iconType: true,
      radio: null,
      show: false
    }
  },
  watch: {
  },
  methods: {
    confirmPass(value){
      this.password == this.confirm ? this.iconType = true : this.iconType = false
    },
    radioC(v){this.radio = v},
    registerIn(){
      let value = {
        nickname: this.user, 
        sex: this.radio, 
        phone: this.tele, 
        password: this.password, 
        role: 0
      }
      register(value).then(result => {
        let res = result.data
        if (res.code === 1) {
          this.show =true
        } else {
          this.show = false
        }
      })
    },
    goLogin(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style  lang="scss" scoped>
.register {
  margin-top: 2.5rem;
  .regist_btn {
    padding: 0.75rem;
  }
}
</style>
