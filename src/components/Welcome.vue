<template>
  <div class="welcome" :class="{ hide: isHide}">
    <div class="img-wrap">
      <img src="../assets/images/welcome.jpg" alt="" width="100%" height="100%">
    </div>
    <div class="text-wrap">
      <div class="logo"></div>
      <div class="text">
        <span class="title">遮罩</span>
        <span class="bio">遮罩测试</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isHide: false
    }
  },
  computed: {
    ...mapGetters([
      'isFirstLoad'
    ])
  },
  created() {
    if (this.isFirstLoad) {
      setTimeout(() => {
        this.isHide = true
        this.$store.dispatch('changeLoadState')
      }, 3000)
    } else {
      this.isHide = true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.welcome {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  color: #fff;
  .img-wrap {
    position: relative;
    flex: 0 1 auto;
  }
  .text-wrap {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    background: #17181a;
    
    .logo {
      width: 2rem;
      height: 2rem;
      border: 1px solid #fff;
      border-radius: 10px;
      // margin: 0 2.25rem 0 2.25rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      .title {
        margin-bottom: .4rem;
        font-size: 1rem;
      }
      .bio {
        font-size: .5rem;
        color: #75757b;
      }
    }
  }
}
// .welcome::before {
//   display: block;
//   content: '';
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: #000;
//   opacity: .25;
//   z-index: 10;
// }
.hide {
  display: none;
}
</style>
