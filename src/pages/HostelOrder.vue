<template>
  <div class="order">
    <order-card v-bind="roomDetails"></order-card>
    <section class="order-more">
      <div class="cell">
        <div class="line room">
          <span class="line-key">房间数</span>
          <span class="line-value">1间</span>
        </div>
      </div>
      <div class="cell">
        <label class="line">
          <span class="line-key">入住人</span>
          <input 
            v-model="userName" 
            class="line-value" 
            type="input" 
            placeholder="每间需要填写1人姓名">
        </label>
      </div>
      <div class="cell">
        <label class="line">
          <span class="line-key">联系手机</span>
          <input 
            v-model="userPhone" 
            class="line-value" 
            type="input" 
            placeholder="请填写您的手机号">
        </label>
      </div>
    </section>
    <div class="order-footer">
      <div 
      class="order-footer-price">
         总价：￥{{this.roomDetails.price}}
      </div>
      <div 
      class="order-footer-confirm"
      @click="orderSub">
        提交订单
      </div>
    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/order/OrderCard.vue';
import { mapGetters } from 'vuex';
import { getStore } from '@/utils/storage.js'
import { generateUUID } from '@/utils/uuid.js'
import { hotelOrderSub } from '@/apis/users.js'

export default {
  components: {
    OrderCard
  },
  data() {
    return {
      userName: '',
      userPhone: '',
      userId: ''
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'isLogined',
      'shopId',
      'checkIn',
      'checkOut',
      'howLong',
      'shopName',
    ]),
  },
  mounted(){
    let user = getStore('userInfo');
    if(user){
      if(user.user) {
      this.userName = user.user.nickname;
      this.userPhone = user.user.phone;
      this.userId = user.user.id;
      }
    }
    this.roomDetails = this.$route.query
  },
  data(){
    return {
      // 根据query中的name获取详细信息
      roomDetails:{},
      userName: '',
      userPhone: ''
    }
  },
  methods: {
    orderSub(){
      // 防止stringfy循环引用报错  
      let { checkIn,checkOut,howLong,shopName } = this
      let amount = howLong*this.roomDetails.price
      let obj = {
        roomNum: 1,
        checkMan: this.userName,
        phone: this.userPhone,
        // 这里有所改变
        hotelId: this.$route.query.hotelId,
        status: 0,
        shopId: this.shopId, checkIn, checkOut, howLong, shopName, amount
      }  
      
      // 未登录先登录
      // 已登录直接提交订单
      // socket.emit('getNewOrder', {
      //   shopId: this.shopId
      // })
      if(this.isLogined) {
        obj.userId = this.userInfo.id
        console.log('logined', obj);
        this.$store.dispatch('saveOrder', obj)
        hotelOrderSub(obj)
          .then((res)=>{
            this.$router.push({
              path: '/orderManage/allOrders',
              query: { forSocket: true, shopId: this.shopId }
            })
          })
      } else {
        this.$store.dispatch('saveOrder', obj)
        this.$router.push({
          name: 'login',
          // 有需要转送的order
          params: {
            hasOrder: true
          }
        })
      }
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
.order-more {
  padding: 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin: 1rem 0;
}
.cell {
  background: #fff;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-left: .3rem;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
  }
}
// 利用该特性去除使用after添加的下斜线
.cell:last-child::after {
    display: none;
}
.line {
  padding-left: .4rem;
  height: 2.3rem;
  line-height: 2.3rem;
  font-size: .7rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  // &::after {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   right: .28rem;
  //   top: 50%;
  //   transform: translateY(-50%) rotate(45deg);
  //   width: .2rem;
  //   height: .2rem;
  //   border: none;
  //   border-top: .1rem solid #ccc;
  //   border-right: .1rem solid #ccc;
  // }
}
.line-key {
  width: 4rem;
  color: #999;
  display: block;
}
.line-value {
  color: #333;
  display: block;
  flex: 1;
  padding-right: .5rem;
}
input {
    height: 100%;
}
input, textarea {
    -webkit-appearance: none;
    outline: none;
    border-style: solid;
    pointer-events: initial!important;
    line-height: 100%;
}
</style>
