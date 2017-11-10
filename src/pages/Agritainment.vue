<template>
  <div class="Agritain">
    <head-top v-bind="head"></head-top>
    <div class="shop-swipe">
      <div class="shop-title">
        <div class="shop-title-l">{{moreDetails.name}}</div>
        <span class="shop-imgs">1/1</span>
      </div>
      <button class="vr">全景预览</button>
      <button class="hb">手气红包</button>
    </div>
    <ul class="shop-introduce">
      <li>
        <rating :rate="details.rate"></rating>
        <div class="right-con">
          <span class="right-content">评价</span>
        </div>
      </li>
      <li>
        <div class="shop-address">
          <div class="shop-address-fir">
            {{moreDetails.address.fir}}
          </div>
          <div class="shop-address-sec">
            <span>{{moreDetails.address.sec}}</span>
            <span> 距您999米</span>
          </div>
        </div>
        <div class="right-con">
          <router-link 
          :to="{path: '/mapDirection', query: moreDetails.address}" 
          tag="span"
          class="right-content">地图</router-link>
        </div>
      </li>
      <li>
        <div class="more">
          电话: {{moreDetails.tele}}
        </div>
        <div class="right-con">
          <router-link 
          :to="{path: '/more', query: details}" 
          tag="span" 
          class="right-content">详情</router-link>
        </div>
      </li>
    </ul>
    <div class="main-check" style="margin-top: .5rem;">
      <div @click="showDatePicker" class="check-bar">
        <div class="live-in">
          <p>入住</p>
          <input v-model="beginTime" type="text" placeholder="入店日期" readonly>
        </div>
        <div class="how-long">共{{howLong}}晚</div>
        <div class="live-out">
          <p>离店</p>
          <input type="text" v-model="endTime" placeholder="离店日期" readonly>
        </div>
        <date-picker v-show="showPicker" @confirm="confirm" @hide-time-picker="hideDatePicker" @initDay="initDay"></date-picker>
      </div>
      <ul class="room-list">
          <room-item 
          v-bind="item" 
          v-for="(item, index) in roomList" 
          :key="index">
          </room-item>
      </ul>
    </div>
  </div>
</template>

<script>
import HeadTop from '@/components/index/HeadTop.vue';
import Rating from '@/components/agritainment/Rating.vue';
import DatePicker from '@/components/agritainment/DatePicker.vue';
import RoomItem from '@/components/agritainment/RoomItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'agritainment',
  data(){
    return {
      head:{
        goBack: true,
        title: '店铺详情'
      },
      // 需要接口
      moreDetails:{
        name: '农家乐农家乐',
        address:{
          fir: '荆州沙市区太岳路18号',
          sec: '万达商圈',
          coordinates: [116.397428, 39.90923]
        },
        tele: '18052664969'
      },
      // 需要接口
      roomList:[
        {
          imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
          name: '标准大床房',
          introduce: '18㎡ 1张1.8m双人床 有wifi 2132312312fdsfdsfsdffddfdfdfdfdfdfsdfdsffdsfdfdfdsfdfdsfsdfsdfdfsfsdfsdfsd',
          breakfirst: '单份早餐',
          price: '125',
          cancel: '当日19点前可取消'
        },
        {
          imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
          name: '标准大床房',
          introduce: '18㎡ 1张1.8m双人床 有wifi',
          breakfirst: '单份早餐',
          price: '125',
          cancel: '当日19点前可取消'
        },
        {
          imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
          name: '标准大床房',
          introduce: '18㎡ 1张1.8m双人床 有wifi',
          breakfirst: '单份早餐',
          price: '125',
          cancel: '当日19点前可取消'
        }
      ],
      showPicker: false,
      beginTime: '',
      endTime: '',
      howLong: ''
    }
  },
  computed: {
    details(){
      return this.$route.params
    },
  },
  components: {
    HeadTop,
    Rating,
    DatePicker,
    RoomItem
  },
  methods: {
    showDatePicker(){
      this.showPicker = true;
    },
    hideDatePicker(){
      this.showPicker = false;
    },
    confirm(startDate, endDate, howLong){
      this.beginTime = startDate;
      this.endTime = endDate;
      this.howLong = howLong;
      this.showPicker = false;
    },
    initDay(startDate, endDate, howLong){
      this.beginTime = startDate;
      this.endTime = endDate;
      this.howLong = howLong
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-swipe {
  margin-top: 1.95rem;
  width: 100%;
  height: 10rem;
  background: #666;
  position: relative;
  .vr {
    position: absolute;
    top: .5rem;
    right: .5rem;
    color: #fff;
    padding: 0 10px;
    border-radius: 15px;
    background: rgba(0,0,0,.4);
    line-height: 1rem;
    font-size: .5rem;
    border: 0 none;
    z-index: 100;
  }
  .hb {
    position: absolute;
    top: 2rem;
    right: .5rem;
    color: #fff;
    padding: 0 10px;
    border-radius: 15px;
    background: rgba(0,0,0,.4);
    line-height: 1rem;
    font-size: .5rem;
    border: 0 none;
    z-index: 100;
  }
  .shop-title {
    width: 100%;
    line-height: 1.25;
    color: #fff;
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1.5rem 3rem .55rem .75rem;
    box-sizing: border-box;
    background: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.5));
    .shop-title-l {
      font-size: .8rem;
    }
    .shop-imgs {
      position: absolute;
      bottom: .5rem;
      right: 1rem;
      color: #fff;
      padding: 0 10px;
      border-radius: 15px;
      background-color: rgba(0,0,0,.3);
      line-height: 1rem;
      font-size: .3rem;
      border: 0 none;
      z-index: 100;
    }
  }
}
.shop-introduce {
  list-style: none;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #e2e2e2;
  li {
    border-top: 1px solid #e2e2e2;
    padding: .5rem;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    &::after{
      content: ' ';
      position: absolute;
      top: 50%;
      right: .5rem;
      width: .25rem;
      height: .25rem;
      border: 1px solid;
      border-bottom: 0;
      border-right: 0;
      margin-top: -.1rem;
      color: #ccc;
      -webkit-transform: rotateZ(-45deg);
      transform: rotateZ(135deg);
    }
    // &::before{
    //   content: "";
    //   position: absolute;
    //   font-size: 0;
    //   line-height: 0;
    //   top: 0;
    //   width: 150%;
    //   left: 0;
    //   height: 0;
    //   background: none;
    //   -webkit-transform-origin: 0 0;
    //   -ms-transform-origin: 0 0;
    //   transform-origin: 0 0;
    //   border-bottom: 1px solid #e2e2e2;
    //   pointer-events: none;
    // }
  }
  .right-content {
    font-size: .3rem;
    vertical-align: middle;
    color: #41a2fc;
  }
  .right-con {
    width: 15%;
    text-align: right;
    line-height: 100%;
  }
  .shop-address {
    color: #666;
    width: 80%;
  }
  .shop-address-fir {
    line-height: 1.5;
    font-size: .6rem;
  }
  .shop-address-sec {
    font-size: .3rem;
  }
  .more {
    width: 80%;
    font-size: .3rem;
    color: #666;
  }
}
.check-bar {
  border-top: 1px solid #e2e2e2;
  text-align: center;
  line-height: 1.2;
  height: 2.3rem;
  padding: 0 .5rem 0 .75rem;
  color: #b2b2b2;
  font-size: .6rem;
  background-color: #fff;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .live-in {
    width: 30%;
    input {
      margin-top: .3rem;
      width: 100%;
      text-align: center;
    }
  }
  .live-out {
    width: 30%;
    input {
      margin-top: .3rem;
      width: 100%;
      text-align: center;
    }
  }
  .how-long {
    display:inline;
    color: #2b2b2b;
    font-size: .3rem;
    border: 1px solid #e6e9eb;
    padding: .2rem .5rem .15rem;
    border-radius: 2rem;
    font-weight: 300;
  }
}
.room-list {
  list-style: none;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #e2e2e2;
  li {
    border-top: 1px solid #e2e2e2;
    padding: .5rem;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
}
</style>

