<template>
  <div class="shop-order">
    <section class="shop-order-head">
      <header>
        <h1>{{this.$route.params.name}}</h1>
        <a 
          href="javascript:history.back()" 
          class="order-card-head-arrow">
        </a>
      </header>
    </section>
    <section class="shop-order-content">
      <div class="shop-order-title">订单详情</div>
      <ul>
        <li 
          v-for="(item, index) in this.$route.params.order"
          :key="index">
          <span class="item-name">{{item.name}}</span> 
          <span class="item-num">×{{item.num}}</span>
          <span class="item-price">￥{{item.num*item.price}}</span>
          <div class="divide">
            <div class="divide-line"></div>
          </div>
        </li>
      </ul>
      <div class="shop-order-user">
        <div class="info">
          <i></i>
          <p class="info-location">{{this.location}}</p>
          <p class="info-user">
            <span>{{userInfo.user?userInfo.user.nickname:'暂无'}} {{sex}}</span>
            <span>联系电话：{{(userInfo.user?userInfo.user.phone:'暂无') }}</span>
          </p>
        </div>
      </div>
    </section>
    <section class="shop-order-footer">
      <div class="order-footer-price">
        总价：￥{{this.$route.params.total}}
      </div>
      <div class="order-footer-confirm router-link-active">
        提交订单
      </div>
    </section>
  </div>
</template>

<script> 
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      // userInfo: {
      //   nickname: 'lalala',
      //   sex: '1', // 男性为1
      //   phone: '13333333333'
      // }
    }
  },
  computed: {
    // 需要获取用户的个人Info,应预先存入vuex
    ...mapGetters([
      'location',
      'userInfo'
    ]),
    sex(){
      if (this.userInfo.nickname){
        return ''
      } else {
        return this.userInfo.user.sex ? '先生' : '女士';
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.shop-order-head {
  header {
    background: #42abe1;
    line-height: 2rem;
    border-bottom: 1px solid #42abe1;
    padding: 0 .24rem;
    position: relative;
    h1 {
      font-size: .75rem;
      color: #fff;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
.order-card-head-arrow {
    position: absolute;
    top: 0;
    left: .5rem;
    display: block;
    width: .88rem;
    height: 100%;
    font-size: 0.65rem;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: .28rem;
      height: .28rem;
      border-bottom: .1rem solid #fff;
      border-left: .1rem solid #fff;
    }
}
.shop-order-content {
  color: #333;
  line-height: .5rem;
  font-size: .6rem;
  padding: .6rem .55rem 3rem;
  background: #42abe1;
  .shop-order-title {
    background-color: #fff;
    line-height: 2rem;
    text-indent: 1rem;
    font-size: .7rem;
    border-bottom: 1px solid #dcdcdc;
  }
  li {

    background: #fff;
    font-size: .7rem;
    line-height: 2rem;
    .item-name {
      margin-left: 1rem;
    }
    .item-num {
      width: 50%;
      color: #c3c2c2
    }
    .item-price {
      float: right;
      width: 20%;
    }
  }
  .shop-order-user {
    padding: .1rem 2rem 1rem 1.5rem;
    line-height: 2rem;
    display: block;
    background-color: #fff;
    position: relative;
    i {
      position: absolute;
      left: 10px;
      top: 15px;
      width: 20px;
      height: 20px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA99JREFUWAntmEtIVFEYx50ZJyEhmoLIR5tehC5KSIuIFHpQ1CrwwcCEVhgIbQzKWrlv0aJFZBCk4CMpiygqyVxm9kDxBa0iDUttLDIwG6ffJ164OHfOOfeOQosOXM453/f//uc/33fvuedOWtr/lloGfKmFp6VVVFTsm5+fPwpPcTwe30G/nmvc5/MNM+8OBAJPWltb33tdx5NAFvYhLEJfy7VTtzhiX4G5dpemwy71uxaIsOxYLNYI0cGlZAbzx+np6WdaWlq+GGAXIK4ElpeXF1LOp0SuM13AATfh9/sPt7W19Tn4EkzGAiVziOulpNkJLC4NlPwTPEXt7e3julC/DiD+0tLSVYh7sBzihA+eTXQPhVfmqmYkkJKcg7RQReTBV0RMtS5OK7C+vt5P9i7piBb9cfoxrpghvk74VVilUwJHRkYO0OWoSLinomT5NJgQ91VuKBRaw/gk16gqDl/O4OBgiQqTrnKKj+wdU2FEHFtHQXNz80cL19DQ8ItxRzgc7p6bm3vDeLPlc+hlk+9ysC+YtBnk3itIFix2BF6wi7NjsUfxn7Xblo7xK/m1AiHcvpTUNo+T4fu2ecKQl8dLjN8SHIsGErAtmU/sJgLXKgjGuOe+K/yWa8gaOPQqfiOBmQ6klimrurp6tTVR9FuT+SixMt4kg5PJyLEHpqenjyj8ssnvwr8xGYYSq/j1GeQXKt+ZLHC9srLSsUxkN4iw28nEiR1+5VHMJIOdqgXw5c7MzLzlXV1ix0nmotFoDzblU4pAJb/2sBCJRDbMzs6OkinJhq5NARjm2sKVpQPj/80emsPxK2mZtRlsamr6ClGHwWICkdP0fi4TcVLeeypxQqgVuADy+xukX+5GVW7qOLUlFgKIfGVlZa8Z7tYRuvD3sIfu1eGNMkgp5JRyRUfmxg/nZRO8kUAh4td2QiqvrZQbPM8WX4FaLmOBwsSRyuhXa1aNI9C4Gq4E8n3bA/kdjQCd+xYfTO90IMvvSqAEZWRkXERk1CJw2U8Eg8E6NzEBN2DB9vf3z+Tl5f1geNxtLLdIjVTBTZzrDAp5fn6+7F+y7bhpXZS20U2AYD0J5ENnntgqrlkhMWg/+Y/mjAEuAeK6xBbD0NDQBJn8w/yQZVP059lWXij8SV2eMmhju8oD02ubOw2fs4d6flWmJJCFY5TuFKrkK86pTeGXW8Fz81xia8WBgYFJSi3bTsJTzVMb5sGQz07PzeiwYMLOAfURuBM27A0yXGObexqmVGL7ihw8q7gfP4uNvi8zM7PW7vc6XrYMigCyWIy4DsTu4aP9g1dRKxon/yOu6AL/GvlfVRsi8lGKlLsAAAAASUVORK5CYII=) no-repeat;
      background-size: 20px 20px;
    }
    .info-location {
      color: #333;
      font-size: .7rem;
      font-weight: bold;
    }
    .info-user {
      line-height: 1rem;
      display: flex;
      justify-content: space-between;
    }
  }
}
.shop-order-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2rem;
  display: flex;
  text-align: center;
  .order-footer-price {
    color: #569fd2;
    line-height: 2rem;
    font-size: .8rem;
    flex: 1;
    background: #fafafa;
    box-shadow: inset 0 0 0 0 #e5e5e5;
  }
  .order-footer-confirm {
    color: #fff;
    background-color: #f90;
    flex: 1;
    line-height: 2rem;
    font-size: .8rem;
  }
}
.divide {
  position: relative;
  height: 6px;
  padding-top: 6px;
  &::before {
    left: -6px;
  }
  &::after {
    right: -6px;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #42abe1;
  }
  .divide-line {
    margin: 0 10px;
    height: 0;
    font-size: 0;
    border-top: 1px dotted #ddd;
  }
}
</style>

