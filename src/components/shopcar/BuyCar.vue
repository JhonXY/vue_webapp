<template>
  <div class="food-num">
    <div 
      href="javascript:;" 
      aria-label="删减商品" 
      v-if="this.foodNum > 0"
      @click="remove">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add">
          <svg viewBox="0 0 44 44" id="cart-add" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
        </use>
      </svg>
    </div>
    <span v-if="this.foodNum > 0">{{foodNum}}</span>
    <div 
      href="javascript:;" 
      aria-label="添加商品" 
      @click="add">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus">
          <svg viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
        </use>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'cartList'
    ]),
    // 根据店铺id获得相应购物车
    shopCart(){
      return Object.assign({},this.cartList[this.shopId]);
    },
    // 获取每种食物的数量
    foodNum(){
      let category_id = this.food.category_id;
      let id = this.food._id;
      if (this.shopCart&&this.shopCart[category_id]&&this.shopCart[category_id][id]) {
          let num = 0;
          // num += this.shopCart[category_id][id].num
          Object.values(this.shopCart[category_id][id]).forEach((item,index) => {
              num += item.num;
          })
          return num;
      }else {
          return 0;
      }
    }
  },
  props:['food', 'shopId'],
  methods: {
    add(){
      let options = {
        "shopId": this.shopId,
        "category_id": this.food.category_id,
        "_id": this.food._id,
        "price": this.food.price,
        "name": this.food.name
      }
      this.$store.dispatch('addCart', options)
    },
    remove(){
      if(this.foodNum>0) {
        let options = {
          "shopId": this.shopId,
          "category_id": this.food.category_id,
          "_id": this.food._id,
        }
        this.$store.dispatch('removeCart',options)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.food-num {
  font-size: .7rem;
  line-height: 1.1rem;
  margin-right: .3rem;
  span {
    display: inline-block;
    text-align: center;
    color: #666;
    vertical-align: middle;
    font-size: .6rem;
    min-width: .4rem;
    max-width: 2em;
    overflow: hidden;
  }
  div {
    display: inline-block;
    padding: .1rem;
    vertical-align: middle;
    text-decoration: none;
    svg {
      width: 1rem;
      height: 1rem;
      vertical-align: middle;
      fill: #2395ff;
    }
  }
  span {
    width: 1rem;
    height: 1rem;
  }
}
</style>

