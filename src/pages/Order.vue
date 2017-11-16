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
            :value="userInfo.nickname" 
            class="line-value" 
            type="input" 
            placeholder="每间需要填写1人姓名">
        </label>
      </div>
      <div class="cell">
        <label class="line">
          <span class="line-key">联系手机</span>
          <input 
            :value="userInfo.phone" 
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
  data(){
    return {
      // 根据query中的name获取详细信息
      roomDetails:{
        have:{
          '上网': 'WIFI',
          '卫浴': '独立',
          '窗户': '无',
          '可住': '2人',
          '床型': '大床1.5×2.0米1张',
          '早餐': '无早餐'
        },
        live: [
          '直接消费，无需美团券，请携带入住人身份证，凭姓名和预订手机号直接办理入住',
          '请在14:00-18:00之后入住并于次日12:00之前退房；如需提前入住或延时退房，请咨询商家',
          '入住需要押金，金额以前台为准'
        ],
        left: 1,
        price: '125'
      },
      userInfo: {
        nickname: 'lalala',
        sex: '1', // 男性为1
        phone: '13333333333'
      },
      order: {
        
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
