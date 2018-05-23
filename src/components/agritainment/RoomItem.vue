<template>
  <li class="room-item">
    <div class="room-item-l" @click.stop="showDetails">
      <div class="room-img">
        <img :src="imgsrc" alt="">
      </div>
      <div class="room-introduce">
        <h3>{{name}}房</h3>
        <p>{{intro}}</p>
        <p>{{breakfast ? `早餐 ${breakfast} 份` : '无早'}}</p>
        <p v-if="cancel == 1">{{cancelDate}}前可退</p>
        <p v-if="cancel == 0">不可退</p>
      </div>
    </div>
    <div class="room-item-r">
      <p>均￥<span class="room-price">{{price}}</span></p>
      <button 
        class="room-reserve"
        @click.stop="triggerOrder">
        预定
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['imgsrc', 'name', 'intro', 'breakfast', 'cancel', 'price', 'cancelDate', 'index'],
  methods: {
    // 用于弹窗的头部标题显示
    showDetails(){
      this.$emit('show', this.index)
    },
    // 用于触发订单处理
    // 传递数组index确认具体床型信息位置
    triggerOrder(){
      this.$emit('order', this.index)
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

