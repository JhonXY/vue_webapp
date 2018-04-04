<template>
  <section class="order-card">
    <header class="order-card-head">
      <h1>{{shopName}}</h1>
      <a class="order-card-head-arrow" href="javascript:history.back()"></a>
    </header>
    <div class="order-card-content">
      <div class="card-inner">
        <div class="card-name">{{this.$route.query.name}}</div>
        <div class="card-check">
          <span>
            入住：{{checkIn}} 
            离店：{{checkOut}} 
            {{howLong}}晚
          </span>
        </div>
        <div class="card-more">
          <div v-if="have">
            <span
            class="item" 
            v-for="(item,index) in have"
            :key="index">
              {{item}} 
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'checkIn',
      'checkOut',
      'howLong',
      'shopName'
    ]),
  },
  props: ['price', 'live'],
  created(){
    let have = []
    if(this.$route.query.cancel) {
      have.push(`${this.$route.query.cancelDate} 前可退`)
    } else {
      have.push(`不可退`)
    }
    if(this.$route.query.breakfast > 0) {
      have.push(`${this.$route.query.breakfast}份早餐`)
    } else {
      have.push(`无早`)
    }
    have.push(`${this.$route.query.intro}`)
    this.have = have
  }
}
</script>

<style lang="scss" scoped>
.order-card-head {
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
.order-card-head-arrow {
  position: absolute;
  top: 0;
  left: .5rem;
  display: block;
  width: .88rem;
  height: 100%;
  &::after {
    // border-color: #fff;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    width: .28rem;
    height: .28rem;
    border-bottom: .1rem solid #fff;
    border-left: .1rem solid #fff;
  }
}
.order-card-content {
  color: #333;
  line-height: .5rem;
  font-size: .6rem;
  background: #42abe1;
  padding: 0 .55rem .5rem;
  .card-inner {
    background: #fff;
    padding: .8rem;
    border-radius: .1rem;
    .card-name {
      font-size: .8rem;
      line-height: .8rem;
    }
    .card-check {
      margin: .7rem 0;
    }
    .card-more {
      line-height: 1.1;
      .item {
        &::after {
        content: '|'
        }
      }
      .item:last-child::after {
        display: none;
      }
    }
  }
}
</style>

