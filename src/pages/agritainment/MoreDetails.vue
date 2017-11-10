<template>
  <div class="more-information">
    <head-top v-bind="head"></head-top>
    <ul>
      <li v-for="(item, index) in allServices" :key="index">
        <div class="service-title">{{item.title}}</div>
        <div 
        class="service-more" 
        v-for="(i, index) in item.more"
        :key="index">{{i}}</div>
      </li>
      <div class="service-shop">
        <h3 class="service-title">店家简介</h3>
        <span class="service-more">{{details}}</span>
      </div>
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
        title: this.$route.query.title
      },
      // 需要接口
      allServices: [
        {
          title: '网络服务',
          more: [
            '房间wifi',
            '公共wifi',
            '宽带上网'
          ]
        },
        {
          title: '房间设施',
          more: [
            '全天热水',
            '吹风机',
            '空调',
            '暖气'
          ]
        },
        {
          title: '通用设施',
          more: [
            '电梯'
          ]
        },
        {
          title: '服务项目',
          more: [
            '接机服务',
            '接站服务',
            '行李寄存',
          ]
        }
      ],
      details: '公寓客房干净卫生，简单大气，全天24小时监控，可接送。'
    }
  },
  components: {
    HeadTop
  }
}
</script>

<style lang="scss" scoped>
.more-information {
  margin-top: 1.95rem;
  height: 100%;
}
ul {
  li {
    background: #f0f3f5;
    margin-bottom: .5rem;
    overflow: hidden;
    .service-title {
      font-size: .8rem;
      text-indent: .4rem;
      overflow: hidden;
      margin-bottom: .4rem;
    }
    .service-more {
      margin-bottom: .4rem;
      text-indent: 1rem;
      color: #666;
      font-size: .5rem;
      width: 50%;
      float: left;
      box-sizing: border-box;
    }
  }
  .service-shop {
    .service-title {
      font-size: .8rem;
      text-indent: .4rem;
      overflow: hidden;
      margin-bottom: .4rem;
    }
    .service-more {
      margin-bottom: .4rem;
      text-indent: 1rem;
      color: #666;
      font-size: .5rem;
      width: 100%;
      float: left;
      box-sizing: border-box;
    }
  }
}
</style>

