<template>
<div class="food-order">
  <div class="order-container">
    <div v-for="(item, index) in orderList" class="order-item" :key="index">
      <dl>
        <dt class="title">
          <div>{{item.name}}</div>
          <div>{{item.statusDes}}</div>
        </dt>
        <dt class="item">下单时间 : {{item.time}}</dt>
        <dt class="item">总价 : ￥{{item.price}}</dt>
      </dl>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  data: {
    // 从vuex中调用
    orderList: []
  }
}
</script>

<style lang="scss" scoped>
.food-order {
  padding: 2rem 0;
  .order-container {
    background: #f1f1f1;
    .order-item {
      background: #fff;
      box-sizing: border-box;
      padding: .5rem .5rem;
      border-bottom: 1px solid #ccc;
      position: relative;
      overflow: visible;
      dt.title {
        color: #333;
        height: 1rem;
        line-height: 1rem;
        font-size: .8rem;
        padding-bottom: .3rem;
        position: relative;
        display: flex;
        & div:first-child {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: .5rem;
        }
        & div:last-child {
          color: #06C1AE;
          font-size: .6rem;
        }
      }
      dt.item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 0.8rem;
        line-height: .7rem;
        color: #999;
        font-size: .5rem;
      }
    }
  }
}
</style>

