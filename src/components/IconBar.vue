<template>
  <div class="sort_container">
    <a 
    class="sort_item" 
    v-for="(item, index) in foodTypes" 
    :key="index">
      <div>
        <img 
        :src="imgBaseUrl + item.image_url" alt="">
        <span>{{item.title}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodTypes: [
        {
          image_url: "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
          title: "甜品饮品"
        },
        {
          image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
          title: "美食"
        },
        {
          image_url: "/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
          title: "准时达"
        },
        {
          image_url: "/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg",
          title: "新店特惠"
        },
        {
          image_url: "/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg",
          title: "鲜花蛋糕"
        },
        {
          image_url: "/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg",
          title: "包子粥店"
        },
        {
          image_url: "/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
          title: "商超便利"
        },
        {
          image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
          title: "预订早餐"
        }
      ],
      imgBaseUrl: 'https://fuss10.elemecdn.com',
    }
  }
}
</script>

<style lang="scss">
.sort_container {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  background-color: #fff;
  border-bottom: 0.025rem solid #e4e4e4;
}
.sort_item {
  width: 25%;
  display: flex;
  flex-wrap: wrap;  
  padding: 0.3rem 0rem;
  // flex-grow: 1;
  flex-flow: column;
  align-items: center;
  img {
    margin-bottom: 0.3rem;
    width: 1.8rem;
    height: 1.8rem;
  }
  span {
    font-size: 0.55rem;
    color: #666;
    text-align: center;
    box-sizing: border-box;
    display: block;
  }
}
</style>