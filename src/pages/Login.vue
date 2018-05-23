<template>
  <div class="login">
    <head-top v-bind="head"></head-top>
    <group>
      <x-input title="帐号" v-model="user"></x-input>
      <x-input type="password" title="密码" v-model="password"></x-input>
      <!-- <x-input title="title" v-model="value"></x-input> -->
    </group>
    <div class="login_btn">
      <x-button type="primary" @click.native="loginIn">登录</x-button>
    </div>
    <router-link class="toregister" :to="'/register'">无账号请先注册</router-link>
  </div>
</template>

<script>
import HeadTop from '../components/index/HeadTop.vue';
import { setStore, getStore } from '@/utils/storage.js';
import { login } from '@/apis/login.js';
import { hotelOrderSub, foodOrderSub } from '@/apis/users.js'
import { XButton, XInput, Group } from 'vux';
import { mapGetters } from 'vuex';
// import getSocket from '@/apis/socket'

export default {
  components: {
    HeadTop,
    Group,
    XButton,
    XInput
  },
  computed: {
    // 需要获取用户的个人Info,应预先存入vuex
    ...mapGetters([
      'shopId'
    ]),
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
          
          // 根据是否传参来判断是否有需要保存的订单
          if(Object.keys(this.$route.params).length > 0){
            // 旅店订单处理
            if('hasOrder' in this.$route.params){
              let user = getStore('userInfo').user
            
              let obj = getStore('order')
              obj.userId = user.id

              hotelOrderSub(obj)
                .then(res => {         
                  if(res.data.success){
                    this.$router.push({
                      path: '/orderManage/allOrders', 
                      query: { 
                        forSocket: true, 
                        shopId: this.shopId,
                        orderType: 0 
                      }
                    })
                  }
                })
            }
            // 食物订单处理
            if('hasFoodOrder' in this.$route.params){
              let user = getStore('userInfo').user
              console.log(user);
              
              let obj = getStore('foodOrder')  
              obj.userId = user.id
              obj.purchaser = user.nickname
              obj.phone = user.phone
              console.log(obj);
              
              foodOrderSub(obj)
                .then(res => {         
                  if(res.data.success){
                    this.$router.push({
                      path: '/orderManage/allOrders', 
                      query: { 
                        forSocket: true, 
                        shopId: this.shopId,
                        orderType: 1
                      }
                    })
                  }
                })
            }
            
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
.toregister {
  text-align: center;
  width: 100%;
  display: block;
  font-size: .7rem;
  margin-top: -.5rem;
}
</style>
