<template>
  <div class="need-login">
    <head-top :title="'需要登录'" :goBack="true"></head-top>
    <section>
      <img src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="">
      <h3>登录后查看订单</h3>
      <button @click="goLogin">立即登录</button>
    </section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import HeadTop from '../components/index/HeadTop.vue'
import FootGuide from '../components/index/FootGuide.vue'

export default {
  components: {
    HeadTop,
    FootGuide
  },
  methods: {
    goLogin(){
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.need-login {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;
  section {
    padding: 8.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 8rem;
      height: 8rem;
    }
    h3 {
      margin: .3rem;
      color: #6a6a6a;
      font-size: .7rem;
      font-weight: 400;
    }
    button {
      color: #fff;
      border: none;
      border-radius: 3px;
      background: #56d176;
      padding: 0 1rem;
      line-height: 1.5rem;
      font-size: .6rem;
    }
  }
}

</style>
