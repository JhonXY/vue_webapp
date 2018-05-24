<template>
<div class="all-order">
  <div class="order-bar">
    <div :class="bottomLine"></div>
    <div
    class="order-item" 
    v-for="(item, index) in orderStatus"
    :key="index"
    @click="orderToggle(index - 1)"
    >{{item}}</div>
  </div>
  <div class="order-container">
    <div v-if="orderList.length > 0" v-for="(item, index) in orderList" class="order-item" :key="index">
      <dl @click="testPing(item.amount)">
        <dt class="title">
          <div>{{item.shopName}}</div>
          <div>{{item.status | statusDes}}</div>
        </dt>
        <dt class="item">下单时间 : {{item.createdAt | formatTime}}</dt>
        <dt class="item">总价 : ￥{{item.amount}}</dt>
      </dl>
    </div>
    <div class="noList" v-if="orderList.length <= 0">
      <img v-if="orderList.length <= 0" src="https://fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif" alt="">
      <div>暂无订单</div>
    </div>
  </div>
</div>  
</template>

<script>
import { getOrders, getFoodOrders } from '@/apis/orders.js'
import { alipay } from '@/apis/users.js'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
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
  data(){
    return {
      orderStatus: ['全部', '待付款', '已付款', '待评价'],
      orderToggleStatus: 0,
      // 需要接口
      orderList: []
    }
  },
  computed:{
    bottomLine(){
      switch(true){
        case this.orderToggleStatus === -1:
          return 'bottom-line'
        case this.orderToggleStatus === 0:
          return 'bottom-line index1'
        case this.orderToggleStatus === 1:
          return 'bottom-line index2'
        case this.orderToggleStatus === 2:
          return 'bottom-line index3'
        default:
          return 'bottom-line'
      }
    },
    orStatus(index){
      switch(true){
        case index === 0:
          return '待付款';
        case index === 1:
          return '已付款';
        case index === 2:
          return '已完成';
        case index === 3:
          return '已退款';
      }
    },
    ...mapGetters([
      'userInfo'
    ]),
  },
  methods: {
    orderToggle(index){
      this.orderToggleStatus = index;
      this.getOrderList(index)
    },
    testPing(amount){
      alipay({amount}).then(res =>{
        console.log(res);
      })
    },
    // -1全部，0待付款，1待使用，2待评价
    getOrderList(status){
      getOrders(this.userInfo.id, status).then(res => {
        this.orderList = res.data.data
      })
      getFoodOrders(this.userInfo.id, status).then(res => {
        res.data.data.reduce((pre, cur) => {
          pre.push(cur)
          return pre
        }, this.orderList)
      })
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
    // border-bottom: 1px solid #666;
    text-align: center;
    .bottom-line {
      position: absolute;
    }
    .order-item {
      flex: 1;
    }
    .bottom-line {
      transition: .3s;
      left: 0;
      z-index: 10;
      width: 2rem;
      position: absolute;
      bottom: 0;
      margin: 0 .85rem;
      height: 0;
      font-size: 0;
      border: 2px solid rgba(84, 164, 249, 0.71);
    }
    .index1 {
      left: 4rem;
    }
    .index2 {
      left: 8rem;
    }
    .index3 {
      left: 12rem;
    }
  }
  .order-container {
    padding: .5rem 0 0 0;
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
    .noList {
      padding: 5rem 0 10rem 0;
      background: #f5f5f5;
      img {
        height: 10rem;
        margin: 0 auto;
        display: block;
      }
      div {
        font-size: .8rem;
        color: #a4a4a4;
        text-align: center;
      }
    }
  }
}
</style>
