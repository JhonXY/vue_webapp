<template>
  <div class="login">
    <head-top v-bind="head"></head-top>
    <group>
      <x-input title="帐号" v-model="user"></x-input>
      <x-input title="密码" v-model="password"></x-input>
      <!-- <x-input title="title" v-model="value"></x-input> -->
    </group>
    <div class="login_btn">
      <x-button type="primary" @click.native="loginIn">登录</x-button>
    </div>
  </div>
</template>

<script>
import HeadTop from '../components/index/HeadTop.vue'
import { XButton } from 'vux'
import { Group } from 'vux'
import { XInput } from 'vux'
export default {
  components: {
    HeadTop,
    Group,
    XButton,
    XInput
  },
  data() {
    return {
      head: {
        goBack: true,
        title: '个人信息',
        login: false
      },
      password: '',
      user: ''
    }
  },
  methods: {
    loginIn() {

    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 2.5rem;
  .login_btn {
    padding: 0.75rem;
  }
}
</style>
