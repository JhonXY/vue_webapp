<template>
  <div class="city">
    <head-top v-bind="head"></head-top>
    <div class="city-location">
      <div>定位城市 : <i>{{location}}</i></div>
    </div>
    <div class="hot-city">
      <div class="city-title">
        热门城市
      </div>
      <ul class="hot-citys">
        <li
        class="hot-city-item"
        @click="setCity(item.name)"
        v-for="(item, index) in hotcitys" 
        :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="citys">
      <div class="city-title">
        全部城市
      </div>
      <ul class="citys">
        <li class="citys-item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeadTop from '@/components/index/HeadTop.vue';
import { mapGetters } from 'vuex';
import { getCitys } from '@/apis/citys.js'
export default {
  data(){
    return {
      head:{
        goBack: true,
        title: '选择城市'
      },
      citys: {},
      hotcitys:  []
    }
  },
  created(){
    this.fetchData()
  },
  computed: {
    ...mapGetters([
      'location'
    ])
  },
  components: {
    HeadTop
  },
  methods: {
    fetchData(){
      getCitys({ type: 'hot' }).then(res =>{
        this.hotcitys = res.data
      })
      getCitys({ type: 'group' }).then(res =>{
        this.citys = res.data
      })
    },
    setCity(city){
      console.log('====================================');
      console.log(city);
      console.log('====================================');
      this.$store.dispatch('changeLocation', city)
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang="scss" scoped>
.city-location {
  margin: 2.5rem .5rem .5rem .5rem;
  background: #fff;
  height: 2rem;
  padding-left: 1rem;
  overflow: hidden;
  div {
    font-size: .6rem;
    line-height: 2rem;
  }
  i {
    color: #666;
    font-style: normal;
  }
}
.city-title {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  font-size: .7rem;
}
.hot-city {
  margin: .5rem .5rem .5rem .5rem;
  ul {
    margin-top: .5rem;
    border-top: 1px solid #e4e4e4;
    font-size: .7rem;
    border-left: 0.025rem solid #e4e4e4;
    overflow: hidden;
    li {
      box-sizing: border-box;
      background: #fff;
      text-align: center;
      width: 25%;
      float: left;
      color: #3190e8;
      border-bottom: 0.025rem solid #e4e4e4;
      border-right: 0.025rem solid #e4e4e4;
      height: 1.75rem;
      font: 0.6rem/1.75rem "Microsoft YaHei";
    }
  }
}
.citys {
  margin: .5rem .5rem .5rem .5rem;
  ul {
    margin-top: .5rem;
    border-top: 1px solid #e4e4e4;
    font-size: .7rem;
    border-left: 0.025rem solid #e4e4e4;
    overflow: hidden;
  }
}
</style>
