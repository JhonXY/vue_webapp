<template>
  <div class="Agritain">
    <head-top v-bind="head"></head-top>
    <div class="shop-swipe">
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
          :to="'/more'" 
          tag="span" 
          class="right-content">详情</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import HeadTop from '@/components/index/HeadTop.vue';
import Rating from '@/components/agritainment/Rating.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'agritainment',
  data(){
    return {
      head:{
        goBack: true,
        title: '店铺详情'
      },
      moreDetails:{
        address:{
          fir: '荆州沙市区太岳路18号',
          sec: '万达商圈',
          coordinates: [116.397428, 39.90923]
        },
        tele: '18052664969'
      }
    }
  },
  computed: {
    details(){
      return this.$route.params
    }
  },
  components: {
    HeadTop,
    Rating
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
</style>

