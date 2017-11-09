<template>
  <div class="more-information">
    <head-top v-bind="head"></head-top>
    <ul>
      <li v-for="(item, index) in allServices" :key="index"></li>
    </ul>
  </div>
</template>

<script>
import HeadTop from '@/components/index/HeadTop.vue';
export default {
  data(){
    return {
      head:{
        goBack: true,
        title: '店铺详情'
      },
      allServices: []
    }
  },
}
</script>
