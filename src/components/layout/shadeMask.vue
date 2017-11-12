<template>
  <div>
    <!-- @touchmove.prevent弹出遮罩后不可滑动滚屏 -->
    <div :class="on ? 'mask' : 'mask-close'" @click.stop="close" @touchmove.prevent></div>
  </div>
</template>

<script>
export default {
  props: [],
  data(){
    return {
      on: false
    }
  },
  methods: {
    close(){
      this.on = false
      this.$emit('closeMask')
    },
    toggle(){
      this.on = !this.on
    }
  }
}
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  width: 100%;
  margin: 0 auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  background: rgba(0,0,0,.6);
  transition: .3s;
}
.mask-close {
  display: none;
  transition: .3s;
}
</style>

