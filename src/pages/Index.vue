<template>
  <div class="index">
    <welcome></welcome>
    <head-top v-bind="head"></head-top>
    <nav class="nav_container">
      <swiper :list="imgs" auto style="width:100%;margin:0 auto;" height="8rem" dots-class="custom-bottom" dots-position="center"></swiper>
      <icon-bar></icon-bar>
    </nav>
    <shop-list></shop-list>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import Welcome from '../components/index/Welcome.vue'
import HeadTop from '../components/index/HeadTop.vue'
import FootGuide from '../components/index/FootGuide.vue'
import IconBar from '../components/index/IconBar.vue'
import ShopList from '../components/index/ShopList.vue'
import { Swiper } from 'vux'

const imgList = [
  'http://blog.img.chunibyo.org/xiyang.png',
  'http://pic.58pic.com/58pic/15/67/98/93C58PICjeM_1024.jpg',
  'http://file06.16sucai.com/2016/0315/1df566087c24a94cd9534bc9bc1871ff.jpg'
]

const List = imgList.map((item, index) => ({
  url: 'javascript:',
  img: item
}))

export default {
  components: {
    Welcome,
    Swiper,
    HeadTop,
    IconBar,
    FootGuide,
    ShopList
  },
  data() {
    return {
      imgs: List,
      // 每个组件通过为head-top绑定head对象进行head定制
      head: {
        goBack: false
      }
    }
  }
}
</script>

<style>
.nav_container {
  margin-top: 1.95rem;
}
.swiper-demo-img img {
  width: 100%;
}

</style>
