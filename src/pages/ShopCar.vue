<template>
<div class="shopcar">
  <head-top v-bind="head"></head-top>
  <section class="shopcar-food-container">
    <!-- 购物车左右分栏菜单 -->
    <section class="menu-container">
      <section id="wrapper" class="menu-l" ref="wrapperMenu">
        <ul>
          <li 
            :class="(index === active)?'active':''" 
            v-for="(item, index) in menuList"
            @click="changeActive(index)"
            :key="index">
            {{item.name}}
          </li>
        </ul>
      </section>
      <section class="menu-r" ref="menuFoodList">
        <ul>
          <li 
            v-for="(item, index) in menuList"
            :key="index">
            <header>
              <div style="flex:1;">
                <strong>{{item.name}}</strong>
                <span class="des">{{item.description}}</span>
              </div>
            </header>
            <section 
              class="details-item"
              v-for="(food, index) in item.foods"
              :key="index">
              <div class="details-content">
                <div class="details-img">
                  <img :src="food.imgsrc" alt="">
                </div>
                <div class="details-main">
                  <h3>{{food.name}}</h3>
                  <p class="intro">{{food.introduction}}</p>
                  <p class="tips">{{food.tips}}</p>
                </div>
              </div>
              <footer>
                <div class="food-price">
                  <span>￥</span>
                  <span>{{food.price}}</span>
                </div>
                <buy-car 
                  :shopId='shopId' 
                  :food='food'> 
                </buy-car>
              </footer>
              <!-- 更多小标 -->
              <div class="more-icon">
                <div 
                  v-if="item.specialty" 
                  class="specialty">
                  招牌
                </div>
              </div>
            </section>
          </li>
        </ul>
      </section>
    </section>
    <!-- 购物车底端条 -->
    <section class="buycar-container">
      <span 
        :class="(totalNum>0)?'buy-car have':'buy-car'"
        @click="toggleCartList">
      </span>
      <div class="buycar-all">
        <span>¥{{totalPrice}}</span>
      </div>
      <!-- 传递订单信息 -->
      <router-link 
        href="#" 
        :class="(totalNum>0)?'buycar-confirm buycar-confirm-can':'buycar-confirm'" 
        :to="{
          name: 'shopOrder', 
          params: {
            name: head.title,
            shopId: shopId,
            order: presentCartList,
            total: totalPrice
            }
        }">
        <span>结算</span>
      </router-link>
      <span class="buy-car-num" v-if="totalNum>0">{{totalNum}}</span>
    </section>
    <!-- 购物车浮出遮罩 -->
    <div
      v-show="showCartList" 
      class="mask" 
      @click="hideBuyCar">
    </div>
    <!-- 购物车浮出列表 -->
    <transition name="toggle-cart">
      <section class="cart-list" v-show="showCartList&&presentCartList.length">
        <header>
            <h4>购物车</h4>
            <div @click="clear">
              <span class="clear-cart">清空</span>
            </div>
        </header>
        <section class="cart-food-items">
          <ul>
            <div
            v-for="(item, index) in presentCartList" 
            :key="index">
              <li  
                class="cart-food-li">
                <div class="cart-item-name">
                  <p>{{item.name}}</p>
                </div>
                <div class="cart-item-price">
                  <span>¥</span>
                  <span>{{item.price}}</span>
                </div>
                <section class="cart-list-control">
                  <buy-car 
                    :shopId='shopId' 
                    :food='item'> 
                  </buy-car>
                </section>
              </li>
            </div>
          </ul>
        </section>
      </section>
    </transition>
  </section>
</div>
</template>

<script>
import BScroll from 'better-scroll';
import BuyCar from '@/components/shopcar/BuyCar.vue';
import HeadTop from '@/components/index/HeadTop.vue';
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      //根据shopId来获取menuList
      shopId: this.$route.query.shopId,
      menuList: [
        {
          // 分类
          name: '农家特色菜',
          description: '本店特色菜',
          id: 1,
          foods: [
            {
              _id: 11,
              category_id: 1,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: true,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            },
            { 
              _id: 22,
              category_id: 1,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: true,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            },
            {
              _id: 33,
              category_id: 1,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: false,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            },
            {
              _id: 44,
              category_id: 1,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: true,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            },
          ],
        },
        {
          name: '农家特色菜',
          description: '本店特色菜',
          id: 2,
          foods: [
            {
              _id: 55,
              category_id: 2,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: false,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            },
            {
              _id: 66,
              category_id: 2,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: false,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            },
            {
              _id: 77,
              category_id: 2,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: true,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            },
          ]
        },
        {
          name: '农家特色菜',
          description: '本店特色菜',
          id: 3,
          foods: [
            {
              _id: 88,
              category_id: 3,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: false,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: [

              ]
            },
            {
              _id: 99,
              category_id: 3,
              name: '黄瓜',
              price: 100,
              introduction: '那你怕不是很棒棒',
              tips: '100评价 月售1000',
              specialty: false,
              imgsrc: 'http://dimg04.c-ctrip.com/images/220f0j000000b1bar536E_C_130_130_Q50.jpg?v=1',
              more: []
            }
          ]
        }
      ],
      active: 0, // 已经激活的菜单项
      menuIndexChange: true,//解决选中index时，scroll监听事件重复判断设置index的bug
      shopListTop: [], //商品列表的高度集合
      foodScroll: null,  //食品列表scroll
      windowHeight: null, //屏幕的高度
      presentCartList: [], // 当前shop的购物车(保存为数组),每个商品一个item,并保存店铺Id与名称
      totalPrice: 0, // 当前shop的购物车总价
      categoryNum: [], // 当前shop各个分类内添加的商品数(保存为数组),每个分类一个item,记录每个分类商品数
      showCartList: false,
      head:{
        goBack: true,
        title: this.$route.query.name
      },
    }
  },
  mounted(){
    this.windowHeight = window.innerHeight;
    this.$nextTick(() => {
      this.getFoodListHeight()
      this.initPresentCartList()
    })
  },
  // 从本地读取购物车信息
  beforeCreate(){
    this.$store.commit('INIT_CART')
  },
  components: {
    BuyCar,
    HeadTop
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]),
    // 读取该该商店的购物车信息
    shopCart(){
      return Object.assign({},this.cartList[this.shopId]);
    },
    // 购物车总值
    totalNum(){
      let total = 0;
      this.presentCartList.forEach(item => {
          total+=item.num
      })
      return total
    },
  },
  methods: {
    // 切换左菜单栏
    changeActive(index){
      this.active = index
      //menuIndexChange解决运动时listenScroll依然监听的bug
      this.menuIndexChange = false;
      this.foodScroll.scrollTo(0, -this.shopListTop[index], 400);
      this.foodScroll.on('scrollEnd', () => {
          this.menuIndexChange = true;
      })
    },
    //获取食品列表的高度，存入shopListTop
    getFoodListHeight(){
      const listContainer = this.$refs.menuFoodList;
      const listArr = Array.from(listContainer.children[0].children);
      listArr.forEach((item, index) => {
          this.shopListTop[index] = item.offsetTop;
      });
      this.listenScroll(listContainer)
    },
    //当滑动食品列表时，监听其scrollTop值来设置对应的食品列表标题的样式
    listenScroll(element){
      this.foodScroll = new BScroll(element, {
          probeType: 3,
          bounce: true,
          click: true,
      });

      const wrapperMenu = new BScroll('#wrapper', {
          click: true,
      });

      const wrapMenuHeight = this.$refs.wrapperMenu.clientHeight;
      this.foodScroll.on('scroll', (pos) => {
        if (!this.$refs.wrapperMenu) {
          return 
        }
        this.shopListTop.forEach((item, index) => {
          if (this.menuIndexChange && Math.abs(Math.round(pos.y)) >= item) {
            this.active = index;
            const menuList=this.$refs.wrapperMenu.querySelectorAll('.active');
            const el = menuList[0];
            wrapperMenu.scrollToElement(el, 800, 0, -(wrapMenuHeight/2 - 50));
          }
        })
      })
    },
    // 初始化以及更新商品数，商品总价
    initPresentCartList(){
      // presentCartList: null, // 当前shop的购物车
      // totalPrice: 0, 
      let newArr = []; // 分类数量数组新建
      let cartFoodNum = 0;
      this.presentCartList = []; // 当前商店购物车
      this.totalPrice = 0; // 当前商店总值
      this.menuList.forEach((item, index) => {
        if(this.shopCart&&this.shopCart[item.foods[0].category_id]){ // 通过分类来做循环
          let num = 0;
          Object.keys(this.shopCart[item.foods[0].category_id]).forEach(itemid => {  // 通过Objects.keys取到遍历数组
            Object.keys(this.shopCart[item.foods[0].category_id][itemid]).forEach(foodid => {
              let foodItem = this.shopCart[item.foods[0].category_id][itemid][foodid]; // _id与foodid与itemid是相同的
              num += foodItem.num;
              this.totalPrice += foodItem.num*foodItem.price;
              if (foodItem.num > 0) {
                this.presentCartList[cartFoodNum] = {};
                this.presentCartList[cartFoodNum].category_id = item.foods[0].category_id;
                this.presentCartList[cartFoodNum].item_id = itemid;
                this.presentCartList[cartFoodNum]._id = foodid;
                this.presentCartList[cartFoodNum].num = foodItem.num;
                this.presentCartList[cartFoodNum].price = foodItem.price;
                this.presentCartList[cartFoodNum].name = foodItem.name;
                cartFoodNum ++;
              }
            })
          })
          newArr[index] = num;
        } else{
          newArr[index] = 0;
        }
      })
      this.totalPrice = this.totalPrice.toFixed(2); // 返回一个两个小数的返回值
      this.categoryNum = [...newArr]; // 分类数量数组
    },
    // 清空购物车
    clear(){
      this.$store.dispatch('clearCart', this.shopId)
    },
    // 绑定在购物车标志上的事件
    toggleCartList(){
      this.presentCartList.length ? this.showCartList = !this.showCartList : false;
    },
    // 绑定在遮罩上的事件
    hideBuyCar(){
      // this.$refs.mask.toggle();
      this.showCartList = false;
    }
  },
  watch: {
    // 监听商店的购物车变化，每次变化后更新
    shopCart: function(value){
      this.initPresentCartList();
    },
    // 购物车清空的话执行一次隐藏列表
    totalNum: function(value){
      if(value<=0) {
        this.hideBuyCar();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 0px;
    height: 1px;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
} 
.shopcar {
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
}
.shopcar-food-container {
  margin-top: 1.95rem;
  display: flex;
  padding-bottom: 2rem;
  flex: 1;
}
.menu-container {
  flex: 1;
  overflow-y: hidden;
  position: relative;
  display: flex;
  background-color: #F5F5F5;
  .menu-l {
    width: 4rem;
    li {
      line-height: 2.5;
      font-size: 0.6rem;
      color: #666;
      padding: .7rem .3rem;
      border-bottom: 0.025rem solid #ededed;
      box-sizing: border-box;
      position: relative;
    }
    li.active {
      // border-left: 0.15rem solid #3190e8;
      background-color: #fff;
    }
  }
  .menu-r {
    flex: 4;
    overflow-y: auto;
    overflow-x: hidden;
    ul {
      width: 100%;
    }
    flex: 4;
    li {
      header {
        width: 100%;
        padding: .4rem;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        strong {
          font-size: 0.7rem;
          color: #666;
          font-weight: bold;
        }
        .des {
          font-size: 0.5rem;
          color: #999;
          width: 30%;
          overflow: hidden;
        }
      }
      .details-item {
        background-color: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
        position: relative;
        overflow: hidden;
        .details-content {
          display: flex;
          .details-img {
            margin-right: .4rem;
            img {
              width: 2rem;
              height: 2rem;
              display: block;
            }
          }
          .details-main {
            width: 100%;
            h3 {
              margin-bottom: .2rem;
              font-size: 0.7rem;
              color: #333;
            }
            .intro {
              font-size: 0.5rem;
              color: #999;
              line-height: .6rem;
            }
            .tips {
              font-size: 0.5rem;
              color: #333;
              line-height: .8rem;
            }
          }
        }
        footer {
          margin-left: 2.4rem;
          font-size: 0;
          margin-top: .3rem;
          display: flex;
          justify-content: space-between;
          .food-price {
            & span:nth-of-type(1) {
              font-size: 0.5rem;
              color: #f60;
              margin-right: .05rem;
            }
            & span:nth-of-type(2) {
              font-size: 0.7rem;
              color: #f60;
              font-weight: bold;
              margin-right: .3rem;
            }
          }
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
            a {
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
        }
      }
    }
  }
}
.buycar-container {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(61,61,63,.9);
  height: 2rem;
  display: flex;
  padding-left: 3.5rem;
  align-items: center;
  color: #fff;
  z-index: 1005;
  .buy-car {
    position: absolute;
    left: .5rem;
    bottom: .3rem;
    width: 2.3rem;
    height: 2.3rem;
    box-sizing: border-box;
    border-radius: 100%;
    border: .133333rem solid #444;
    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    will-change: transform;
    background-image: radial-gradient(circle,#363636 .9rem,#444 0);
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjNUY1RjYzIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiNFQkVFRjMiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4wNSIvPjwvZz48cGF0aCBzdHJva2U9IiM1RjVGNjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNOS4zNzQgMTguNzIyUzcuODY4IDExLjI4MyA3LjMyMyA4LjcxQzYuNzc4IDYuMTM2IDUuODYgNS4zMyAzLjk3OCA0LjUyIDIuMDk2IDMuNzEzLjM2NyAyLjI4Ni4zNjcgMi4yODYiLz48Y2lyY2xlIGN4PSI0NiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjNUY1RjYzIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI1MSIgcj0iNCIgZmlsbD0iIzVGNUY2MyIvPjwvZz48L3N2Zz4=) 50% no-repeat;
      background-size: 1rem;
      content: "";
    }
  }
  .buy-car.have {
    position: absolute;
    left: .5rem;
    bottom: .5rem;
    width: 2.3rem;
    height: 2.3rem;
    box-sizing: border-box;
    border-radius: 100%;
    border: .2rem solid #444;
    background-color: #3190e8;
    background-image: none;
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-size: 1rem;
      content: "";
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50%/ 1rem no-repeat;
    }
  }
  .buycar-all {
    flex: 1;
    font-size: .8rem;
  }
  .buycar-confirm {
    width: 4.5rem;
    height: 100%;
    background-color: #707070;
    color:#F5F5F5;
    text-align: center;
    font-size: .7rem;
    font-weight: 700;
    line-height: 2rem;
  }
  .buycar-confirm.buycar-confirm-can {
     background-color: #ff7416;
  }
  .buy-car-num {
    position: absolute;
    left: 2rem;
    top: -.8rem;
    background: #ff7416;
    line-height: 1;
    color: #fff;
    border-radius: .32rem;
    padding: .05rem .2rem;
    font-size: .5rem;
    min-width: .3rem;
    text-align: center;
  }
}
.toggle-cart-enter-active, .toggle-cart-leave-active {
    transition: all .3s ease-out;
}
.toggle-cart-enter, .toggle-cart-leave-active {
    transform: translateY(100%);
}
.cart-list {
  position: fixed;
  width: 100%;
  margin-bottom: -1px;
  background-color: #fff;
  bottom: 2rem;
  left: 0;
  z-index: 1002;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ebebeb;
    background: #F4F4F4;
    font-size: .7rem;
    line-height: 2rem;
    height: 2rem;
    h4 {
      color: #666;
      margin-left: 1rem;
    }
    span {
      color: #666;
      margin-right: 1rem;
    }
  }
  li {
    font-size: .7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: .6rem;
    padding-top: .4rem;
    margin: 0 .5rem;
    border-bottom: 1px solid #ddd;
    p {
      width: 5rem;
      text-indent: .5rem;
    }
  }
}
.mask {
  position: fixed;
  width: 100%;
  margin: 0 auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  background: rgba(0,0,0,.6);
  transition: .3s;
}
</style>
