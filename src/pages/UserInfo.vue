<template>
  <div class="user-info">
    <section class="user-info-head">
      <header>
        <h1>我的信息</h1>
        <a 
          href="javascript:history.back()" 
          class="head-arrow">
        </a>
      </header>
    </section>
    <section>
      <router-link tag="div" :to="{
        path: isLogined ? '/userInfoMore' : '/login',
      }" class="info-intro">
        <span class="user-avator"></span>
        <div class="user-intro">
          <h1>{{userInfo.user?userInfo.user.nickname:userInfo.nickname}}</h1>
          <p>
            <svg viewBox="0 0 655 1024" id="mobile"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path></svg>
            <span>{{userInfo.user?userInfo.user.phone:userInfo.phone}}</span>
          </p>
        </div>
        <span class="user-info-tail">
          <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path></svg>
        </span>
      </router-link>
    </section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import FootGuide from '../components/index/FootGuide.vue';
import { mapGetters } from 'vuex';
export default {
  created(){

  },
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters([
      'userInfo', 'isLogined'
    ]),
  },
  components: {
    FootGuide
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.user-info-head {
  header {
    background: #42abe1;
    line-height: 2rem;
    border-bottom: 1px solid #42abe1;
    padding: 0 .24rem;
    position: relative;
    h1 {
      font-size: .75rem;
      color: #fff;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
.head-arrow {
    position: absolute;
    top: 0;
    left: .5rem;
    display: block;
    width: .88rem;
    height: 100%;
    font-size: 0.65rem;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: .28rem;
      height: .28rem;
      border-bottom: .1rem solid #fff;
      border-left: .1rem solid #fff;
    }
}
.info-intro {
  padding: 1rem 1rem;
  background: #42abe1;
  display: flex;
  color: #fff;
  align-items: center;
  .user-avator {
    width: 3rem;
    height: 3rem;
    background: #fff;
    border-radius: 50%;
  }
  .user-intro {
    margin-left: 1rem;
    flex: 1;
    h1 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 0.2rem;
      font-size: .8rem;
      font-weight: 700;
    }
    p {
      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .4rem;
      }
      svg {
        display: inline;
        margin-right: .2rem;
        height: .4rem;
        fill: #fff;
      }
    }
  }
  .user-info-tail {
    svg {
      height: 1rem;
      width: .5rem;
      fill: #fff;
    }
  }
}
</style>

