<template>
  <div class="order-manage">
    <head-top 
    :goBack="true" 
    @toggleList="toggleList" 
    :orderMenu="orderItem?orderItem:'全部分类'"></head-top>
    <div class="order-list" v-show="showOrderList">
      <ul>
        <li 
        v-for="(item, key, index) in orderList" 
        :key="index"
        @click="changeOrderList(item, key)"
        >{{item}}</li>
      </ul>
    </div>
    
    <transition name="router-fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
    <div
      v-show="showOrderList" 
      class="mask" 
      @click="hideOrderList">
    </div>
  </div>
</template>

<script>
import HeadTop from '../components/index/HeadTop.vue'
// import OrderList from '../components/order/OrderList.vue'
import getSocket from '@/apis/socket'

export default {
  data(){
    return {
      showOrderList: false,
      orderList: {
        allOrders:'全部分类', 
        foodOrders: '美食', 
        hostelOrders: '旅店'
      },
      orderItem: ''
    }
  },
  components: {
    HeadTop
  },
  mounted(){
    let query = this.$route.query
    if(query.hasOwnProperty('forSocket')){
      const socket = getSocket()
      console.log('socket');
      
      socket.emit('getNewOrder', {
        shopId: query.shopId
      })
      console.log(socket);
      setTimeout(() => {
        socket.io.off()
      }, 1000)
    }
  },
  methods: {
    toggleList(){
      this.showOrderList = !this.showOrderList;
    },
    hideOrderList(){
      this.showOrderList = false;
    },
    changeOrderList(item, key){
      this.orderItem = item;
      this.hideOrderList();
      this.$router.push({path: `/orderManage/${key}`})
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
  z-index: 11;
  background: rgba(0,0,0,.6);
  transition: .3s;
}
.order-list {
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 12;
  ul {
    padding: 2.5rem 1rem .5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      list-style: none;
      font-size: .7rem;
      text-align: center;
      border: 1px solid #bfbfbf;
      color: #666;
      padding: 0 .6rem;
      line-height: 1.5rem;
      box-sizing: border-box;
      border-radius: .4rem;
    }
  }
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

