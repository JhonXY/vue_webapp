<template>
  <div class="region">
    <head-top v-bind="head"></head-top>
    <div class="region-input">
      <input type="text" ref="searchText" id="searchText" @keyup="keyUpSearch" placeholder="请输入地址"/>
    </div>
    <div id="temp" style="display:none"></div>
    <div class="location-container">
      <div class="location" @click="showCityInfo">{{locationMessage}}</div>
    </div>
    <div class="address_items" id="address_result" v-if="searchData.length > 0">  
      <div class="address_item" v-for="(item,index) in searchData" :key="index">  
        <span class="title">{{ item.name }} </span>  
        <span class="description">{{ item.pname }}{{ item.cityname }}{{ item.address }}</span>  
      </div>  
    </div>    
  </div>
</template>

<script>
import HeadTop from '@/components/index/HeadTop.vue';
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      head: {
        goBack: true,
      },
      searchData: [],
    }
  },
  components: {
    HeadTop
  },
  computed: {
    ...mapGetters([
      'location'
    ]),
    locationMessage(){
      return '当前定位：'+ this.location
    }
  },
  created(){
    this.head['title'] = this.location
    console.log('====================================');
    console.log(this.head);
    console.log('====================================');
  },
  methods: {
    keyUpSearch () { 
      var _this = this 
      var txt = this.$refs.searchText.value; 
      AMap.service(["AMap.PlaceSearch"], ()=>{ 
        var placeSearch = new AMap.PlaceSearch({ 
            pageSize: 12, 
            pageIndex: 1, 
            city: _this.location, 
            cityLimit: 'true', 
            panel: 'temp'
        });
        placeSearch.search(txt, function(status, result) {
          if (status == 'complete' && result.info == 'OK') {
            console.log(result)
            _this.searchData = result.poiList.pois
          }
        })
      })
    },
    showCityInfo() {
        //实例化城市查询类
        var _this = this
        AMap.service(['AMap.CitySearch'], ()=>{
          var citysearch = new AMap.CitySearch();
          //自动获取用户IP，返回当前城市
          citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    _this.$store.dispatch('changeLocation', cityinfo)
                }
            } else {
                _this.$store.dispatch('changeLocation', result.info)
            }
        });
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.region-input {
  margin-top: 1.95rem;
  padding: .3rem;
  font-size: .8rem;
  input {
    width: 100%;
    height: 1.17rem;
    font-size: .1rem;
    line-height: 1.17rem;
    box-sizing: border-box;
    padding: 0 .58rem 0 1.17rem;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: .58rem;
    margin-right: .4rem;
    transition: border-color 0.2s ease;
    background: #fff url(../assets/images/search.png) .31rem .2rem no-repeat;
    background-size: .78rem;
    vertical-align: middle !important;
    &::focus {
      border-color: #2c3e50;
    }
  }
}
.location-container {
  margin-top: .3rem;
  background: #fff;
  width: 100%;
  height: 2rem;
  .location {
    text-align: center;
    font-size: .5rem;
    line-height: 2rem;
  }
}
.address_items {
  .address_item {
    .title {
      float: left;
      display: block;
      width: 30%;
      text-overflow: ellipsis;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .description {
      display: block;
      max-width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    line-height: 1.5rem;
    font-size: .6rem;
    padding: 0 0.28rem;
    background-color: #FDFDFC;
    border-bottom: 1px solid #ccc;
    color: #999999;
  }
}
</style>

