<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
        <router-view>
        </router-view>
    </transition>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.app.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
