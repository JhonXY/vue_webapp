<template>
  <div class="usermore">
    <head-top v-bind="head"></head-top>
    <group>
      <x-input title="昵称" text-align="right" :value="userInfo.nickname"></x-input>
      <x-input title="手机号" text-align="right" :value="userInfo.phone"></x-input>
    </group>
    <div class="title">安全设置</div>
    <div class="content">
      <span>登录密码</span>
      <span class="span2"> 
        <span @click="changePass" style="color: #41a2fc;">修改</span>
        <svg style="position: relative; top: 2px;">
          <svg viewBox="0 0 547 987" id="arrow" width="100%" height="100%"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import HeadTop from '../components/index/HeadTop.vue';
import { XButton, XInput, Group } from 'vux';
import { mapGetters } from 'vuex';
import { changePassword } from '@/apis/users';
export default {
  components: {
    Group,
    XButton,
    XInput,
    HeadTop
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  data(){
    return {
      head: {
        goBack: true,
        title: '帐户信息',
        login: false
      }
    }
  },
  methods: {
    changePass(){
      console.log(this.userInfo);
      this.$router.push({path: '/infoChange'})
    }
  }
}
</script>

<style lang="scss" scoped>
.usermore {
  margin-top: 3rem;
  .title {
    font-size: 15px;
    padding: 10px 15px;
    color: #999;
  }
  .content {
    position: relative;   
    padding: 10px 15px;
    font-size: 17px;
    background-color: #FFFFFF;
    line-height: 1.41176471;
    // 前后超细线设置
    // 所有属性缺一 不可
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      content: "";
      height: 1px;
      // color: #D9D9D9;
      border-top: 1px solid #D9D9D9;
      transform: scaleY(0.5);
      transform-origin: 0 0;
    }
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      content: "";
      height: 1px;
      // color: #D9D9D9;
      border-top: 1px solid #D9D9D9;
      transform: scaleY(0.5);
      transform-origin: 0 100%;
    }
    .span2 {
      float: right;
      svg {
        height: 15px;
        width: 15px;
      }
    }
  }
}
</style>
