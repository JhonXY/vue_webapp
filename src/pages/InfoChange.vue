<template>
  <div class="info-change">
    <head-top v-bind="head"></head-top>
    <group>
      <x-input title="旧密码" type="password" text-align="right" v-model="old"></x-input>
      <x-input title="新密码" type="password" text-align="right" v-model="newP"></x-input>
      <x-input title="确认密码" type="password" text-align="right" :equal-with="newP"  v-model="newC"></x-input>
    </group>
    <div class="change_btn">
      <x-button 
      style="border-radius:1px; transition: .5s;"
      :class="can ? '': 'blue'"
      :disabled="can"   
      @click.native="changePass">确认并保存</x-button>
    </div>
    <alert 
    v-model="show" 
    :title="'提示'"
    @on-hide="goBack">{{'修改成功!'}}</alert>
  </div>
</template>

<script>
import HeadTop from '../components/index/HeadTop.vue';
import { XButton, XInput, Group, Alert } from 'vux';
import { mapGetters } from 'vuex';
import { changePassword } from '@/apis/users';
export default {
  components: {
    Group,
    XButton,
    XInput,
    HeadTop,
    Alert
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    can(){
      if(!!this.old && !!this.newP && !!this.newC && this.newP === this.newC){
        return false
      } else {
        return true
      }
    }
  },
  data(){
    return {
      head: {
        goBack: true,
        title: '修改密码',
        login: false
      },
      old: '',
      newP: '',
      newC: '',
      show: false
    }
  },
  methods: {
    changePass(){
      console.log(this.userInfo);
      changePassword({
        id: this.userInfo.id,
        newpass: this.newP
      }).then(result => {
        let res = result.data
        if (res.code === 1) {
          this.show = true
        } else {
          this.show = false
        }
      })
    },
    goBack(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang="scss" scoped>
.info-change {
  margin-top: 3rem;
  .change_btn {
    padding: 1rem;
  }
  .blue {
    color: #fff;
    background-color: #41a2fc;
  }
}
</style>

