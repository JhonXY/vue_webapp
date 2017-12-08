<template>
<div class="all-order">
  <div class="order-bar">
    <div class="bottom-line"></div>
    <div
    class="order-item" 
    v-for="(item, index) in orderStatus"
    :key="index"
    >{{item}}</div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      orderStatus: ['全部', '待付款', '待使用', '待评价']
    }
  }
}
</script>

<style lang="scss" scoped>
.all-order {
  padding: 2rem 0;
  .order-bar {
    position: relative;
    font-size: .7rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #666;
    text-align: center;
    .bottom-line {
      position: absolute;
    }
    .order-item {
      flex: 1;
    }
  }
}
</style>
