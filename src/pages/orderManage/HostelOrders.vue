<template>
  <div class="hostel-order">
    <div class="order-container">
    <div v-for="(item, index) in orderList" class="order-item" :key="index">
      <!-- <dl>
        <dt class="title">
          <div>{{item.name}}</div>
          <div>{{item.statusDes}}</div>
        </dt>
        <dt class="item">下单时间 : {{item.time}}</dt>
        <dt class="item">房价 : ￥{{item.price}}</dt>
      </dl> -->
      <dl>
        <dt class="title">
          <div>{{item.shopName}}</div>
          <div>{{item.status | statusDes}}</div>
        </dt>
        <dt class="item">下单时间 : {{item.createdAt | formatTime}}</dt>
        <dt class="item">总价 : ￥{{item.amount}}</dt>
      </dl>
    </div>
  </div>
  </div>  
</template>

<script>
import { getOrders } from '@/apis/orders.js'
import { mapGetters } from 'vuex';
import moment from 'moment'

export default {
  data(){
    return {
      orderList: []
    }
  },
  mounted(){
    this.getOrderList(-1)
  },
  filters: {
    statusDes(value){
      // if (!value) return ''
      value = value.toString()
      switch(true){
        case value === '0': return '待付款'
        case value === '1': return '已付款'
        case value === '2': return '已完成'
        case value === '3': return '已退款'
      }
    },
    formatTime(time){
      let src = new Date(time)
      return moment(time).format("YYYY-MM-DD HH:mm:ss")
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
  },
  methods: {
    // -1全部，0待付款，1待使用，2待评价
    getOrderList(status){
      getOrders(this.userInfo.id, status).then(res => {
        this.orderList = res.data.data     
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hostel-order {
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

