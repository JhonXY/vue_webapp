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
      <section>
        <div>
          <a 
          href="javascript:void(0)" 
          @click="goAnchor('#anchor-'+index)" 
          v-for="(item, index) in letters" 
          :key="index"> {{item}} 
          </a>
        </div>
      </section>
      <ul 
      class="citys" 
      v-for="(letter, key, index) in sortgroupcity"
      :key="index">
      <h3 
      :id="'anchor-'+index">{{key}}</h3>
        <li 
        class="citys-item" 
        v-for="(item, index) in letter"
        :key="index"
        @click="setCity(item.name)">{{item.name}}</li>
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
    ]),
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity(){
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.citys[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.citys[String.fromCharCode(i)];
        }
      }
      return sortobj;
    },
    letters(){
      let letters = {};
      let index = -1;
      for (let i=0; i<26; i++) {
        index ++;
        if (String.fromCharCode(65+i) === 'I') {
          index-=1; 
          continue;
        } 
        if (String.fromCharCode(65+i) === 'O') {
          index-=1; 
          continue;
        }
        if (String.fromCharCode(65+i) === 'U') {
          index-=1; 
          continue;
        }
        if (String.fromCharCode(65+i) === 'V') {
          index-=1;
          continue;
        }
        letters[index] = String.fromCharCode(65+i);
      }
      return letters;
    }
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
      this.$store.dispatch('changeLocation', city)
      this.$router.push({path:'/'})
    },
    goAnchor(selector) {
      var rem = window.innerWidth/16;
      var anchor = this.$el.querySelector(selector)
      window.scrollTo(0, anchor.offsetTop - 2*rem);
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
    border-left: 1px solid #e4e4e4;
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
  section {
    overflow: hidden;
    margin-top: .5rem;
    a {
      text-align: center;
      box-sizing: border-box;
      float: left;
      width: 2rem;
      height: 2rem;
    }
  }
  h3 {
    background: #fff;
    height: 2rem;
    display: block;
    line-height: 2rem;
    text-indent: 1rem;
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
  }
  ul {
    margin-top: .5rem;
    border-top: 1px solid #e4e4e4;
    font-size: .7rem;
    border-left: 1px solid #e4e4e4;
    overflow: hidden;
    li {
      box-sizing: border-box;
      background: #fff;
      text-align: center;
      width: 25%;
      float: left;
      color: #666;
      border-bottom: 1px solid #e4e4e4;
      border-right: 1px solid #e4e4e4;
      height: 1.75rem;
      font: 0.6rem/1.75rem "Microsoft YaHei";
    }
  }
}
</style>
