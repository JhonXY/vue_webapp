<template>
<div 
:class="hide ? 'room-details' : 'room-details getout'"
@touchmove="eps"  
onmousewheel="return false;">
  <section class="room-details-header">
    <h2>
      {{title}}
      <i @click.stop="hideRoomDetails">×</i>
    </h2>
  </section>
  <div class="room-details-content">
    <section class="room-details-block">
      <ul>
        <li
        class="f" 
        v-for="(item, key, index) in roomDetails.have"
        :key="index">
          <span>{{key}} </span> {{item}}
        </li>
      </ul>
    </section>
    <section class="room-details-block">
      <h3 class="details-cancle-title">取消规则</h3>
      <div class="details-cancle-content">入住日当天18点前可免费取消，逾期不可取消/变更，如未入住，酒店将扣除全额房费</div>
    </section>
    <section class="room-details-block">
      <h3 class="details-live-title">入住规则</h3>
      <ul>
        <li 
        class="details-live-content"
        v-for="(item, index) in roomDetails.live"
        :key="index">{{item}}</li>
      </ul>
    </section>
  </div>
  <div class="room-details-footer">
    <div class="room-details-price">￥{{roomDetails.price}}</div>
    <router-link 
      :to="{
        path: '/hostelorder', 
        query: { 
          name: this.title
        }
      }" 
      tag="div" 
      v-if="roomDetails.left> 0" class="can-pay">预定</router-link>
    <div v-else class="none">满房</div>    
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      // 获取到的细节,另需接口或提前传入
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
      hide: true
    }
  },
  // 根据传入的title获取详情
  props: ['title'],
  methods: {
    hideRoomDetails(){
      this.$emit('hideRoomDetails')
      // this.toogle()
    },
    toggle(){
      this.hide = !this.hide
    },
    eps(event){
      event.stopPropagation();
    }
  }
}
</script>

<style lang="scss" scoped>
.room-details {
  height: 55%;
  transform: translateY(100%);
  transition: transform .5s;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  // top: 2.4rem;
  z-index: 1002;
  background-color: #fff;
  font-size: .26rem;
  .room-details-header {
    width: 100%;
    h2 {
      line-height: 1.8rem;
      position: relative;
      padding: .2rem 0;
      text-align: center;
      font-size: .8rem;
      color: #333;
      border-bottom: 1px solid #e5e5e5;
      i {
        font-style: normal;
        position: absolute;
        font-size: 1rem;
        right: .4rem;
        line-height: 1.8rem;
      }
    }
  }
  .room-details-content {
    position: absolute;
    top: 0;
    bottom: .94rem;
    margin-top: 2.2rem;
    width: 100%;
    // ?
    overflow-y: scroll;
    .room-details-block {
      border-bottom: 1px solid #e5e5e5;
      margin: .5rem .5rem;
      padding-bottom: .5rem;
      color: #333;
      h3 {
          padding-bottom: .3rem;
          display: block;
        }
      ul {
        font-size: .6rem;
        overflow: hidden;
        li.f {
          width: 50%;
          float: left;
          box-sizing: border-box;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          padding-bottom: .3rem;
          span {
            color: #999;
            padding-right: .2rem;
          }
        }
      }
      .details-live-content {
        padding-bottom: .2rem;
        line-height: 1.5;
        list-style: inside;
      }
    }
  }
  .room-details-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2rem;
    display: -webkit-box;
    display: flex;
    text-align: center;
    .room-details-price {
      color: #569fd2;
      line-height: 2rem;
      font-size: .8rem;
      -webkit-box-flex: 1;
      flex: 1;
      background: #fafafa;
      box-shadow: inset 0 0 0 0 #e5e5e5;
    }
    .none {
      color: #fff;
      background-color: #dedede;
      -webkit-box-flex: 1;
      flex: 1;
      line-height: 2rem;
      font-size: .8rem;
    }
    .can-pay {
      color: #fff;
      background-color: #f90;
      -webkit-box-flex: 1;
      flex: 1;
      line-height: 2rem;
      font-size: .8rem;
    }
  }
}
.getout {
  transform: translateY(0)!important;
}
</style>
