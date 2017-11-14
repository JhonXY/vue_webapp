<template>
  <div class="order">
    <order-card v-bind="order"></order-card>
    <div class="order-footer">
      <div 
      class="order-footer-price">
         总价：￥{{this.$route.query.order.price}}
      </div>
      <router-link 
      :to="'/order'" 
      tag="div" 
      class="order-footer-confirm">
        提交订单
      </router-link>
    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/order/OrderCard.vue' 
export default {
  components: {
    OrderCard
  },
  computed: {
    order(){
      return this.$route.query.order
    }
  }
}
</script>

<style lang="scss" scoped>
.order-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  text-align: center;
  .order-footer-price {
    color: #569fd2;
    line-height: 2rem;
    font-size: .8rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    background: #fafafa;
    box-shadow: inset 0 0 0 0 #e5e5e5;
  }
  .order-footer-confirm {
    color: #fff;
    background-color: #f90;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    line-height: 2rem;
    font-size: .8rem;
  }
}
</style>
