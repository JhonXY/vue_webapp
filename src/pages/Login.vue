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
import HeadTop from '../components/index/HeadTop.vue';
import { setStore, getStore } from '@/utils/storage.js';
import { login } from '@/apis/login.js';
import { hotelOrderSub } from '@/apis/users.js'
import { XButton } from 'vux';
import { Group } from 'vux';
import { XInput } from 'vux';

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
      login({ userphone: this.user, password: this.password})
        .then(res => {
          let { userInfo, bean } = res.data
          setStore('userInfo', userInfo)
          setStore('token', bean) 
          this.$store.dispatch('getUserInfo')
          this.$store.dispatch('toggleLogined')  
          
          console.log(this.$route.params);
          
          // 根据是否传参来判断是否有需要保存的订单
          if(Object.keys(this.$route.params).length > 0){
            let user = getStore('userInfo').user
            
            let obj = getStore('order')
            obj.userId = user.id

            hotelOrderSub(obj)
              .then(res => {         
                if(res.data.success){
                  this.$router.push({path: '/orderManage/allOrders'})
                }
              })
          } else {
            this.$router.push({ path: '/userInfo' })
          }
        })
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
