<template>
  <li class="room-item">
    <div class="room-item-l" @click.stop="showDetails">
      <div class="room-img">
        <img :src="imgsrc" alt="">
      </div>
      <div class="room-introduce">
        <h3>{{name}}</h3>
        <p>{{introduce}}</p>
        <p>{{breakfirst}}</p>
        <p>{{cancel}}</p>
      </div>
    </div>
    <div class="room-item-r">
      <p>均￥<span class="room-price">{{price}}</span></p>
      <router-link
      tag="button"
      :to="{
        path: '/hostelorder', 
        query: { 
          name: this.forOrder.name
        }
      }"
      class="room-reserve"
      >预定
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  data(){
    return {
      forOrder: {
        name: this.$props.name,
      }
    }
  },
  props: ['imgsrc', 'name', 'introduce', 'breakfirst', 'price', 'cancel'],
  methods: {
    showDetails(){
      this.$emit('show', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.room-item {
  position: relative;
  overflow: hidden;
  display: flex;
  .room-item-l {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .room-img {
      display: inline-block;
      width: 30%;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    .room-introduce {
      font-size: .4rem;
      display: inline-block;
      width: 60%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h3 {
        font-size: .7rem;
      }
      & p:nth-child(2) {
        color: #4abb10;
        overflow : hidden;
        // 溢出隐藏，省略
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical; 
      }
      & p:nth-child(3) {
        color: #ffad05;
      }
      & p:last-child {
        color: #8e8e8e;
      }
    }
  }
  .room-item-r {
    color: rgba(20, 166, 255, 0.83);
    display: flex;
    font-size: .4rem;
    flex-direction: column;
    align-items: center;
    .room-price {
      font-size: 1rem;
    }
    .room-reserve {
      margin-top: .5rem;
      width: 3rem;
      display: block;
      color: #fff;
      line-height: 1.5;
      border-radius: .2rem;
      text-decoration: none;
      background-color: rgba(20, 166, 255, 0.83);
      outline: none;
      border: 0;
      font-size: .65rem;
      padding: .1rem 0 1px;
    }
  }
}
</style>

