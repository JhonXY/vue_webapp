<template>
  <div class="map-direction" 
  @touchmove.prevent 
  onmousewheel="return false;">
    <head-top v-bind="head"></head-top>
    <div id="container" style="width:16rem; height:26.4rem;"></div>
  </div>
</template>

<script>
import HeadTop from '@/components/index/HeadTop.vue';

export default {
  data(){
    return {
      head:{
        goBack: true,
        title: '地图定位'
      }
    }
  },
  components: {
    HeadTop
  },
  computed: {
    direction(){    
      return this.$route.query.coordinates
    },
    address(){
      return this.$route.query.fir + ' ' + this.$route.query.sec
    }
  },
  mounted(){
    this.getCenter()
  },
  methods: {
    getCenter(){
      var _this = this;
      var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom:11,
        center: _this.direction
      });
      var marker = new AMap.Marker({
        icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: _this.direction
      });
      marker.setMap(map);
      var length = AMap.Pixel(10,10)
      var infowindow = new AMap.InfoWindow({
          content: createInfoWindow(
            `方恒假日酒店&nbsp;&nbsp;
            <span style="font-size:11px;color:#F00;">
            价格:318
            </span>`
            ,
            `<img 
            src='http://tpc.googlesyndication.com/simgad/5843493769827749134' 
            style='float:left;margin:0 5px 5px 0;'
            >
            地址：北京市朝阳区阜通东大街6号院3号楼 东北 8.3 公里
            <br/>电话：010 64733333<br/>
            <a href='http://baike.baidu.com/view/6748574.htm'>
            详细信息
            </a>`
            ),
          autoMove: true,
          offset: new AMap.Pixel(2, -20)
        });
      infowindow.open(map, _this.direction);
      function createInfoWindow(title,content){  
          var info = document.createElement("div");  
          info.className = "info";  
          // 定义顶部标题  
          var top = document.createElement("div");  
          top.className = "info-top";  
          var titleD = document.createElement("div");  
          titleD.innerHTML = title;  
          var closeX = document.createElement("img");   
          closeX.onclick = closeInfoWindow;  
              
          top.appendChild(titleD);  
          top.appendChild(closeX);  
          info.appendChild(top);  
          // 定义中部内容  
          var middle = document.createElement("div");  
          middle.className = "info-middle";  
          middle.innerHTML = content;  
          info.appendChild(middle);  
            
          // 定义底部内容  
          var bottom = document.createElement("div");  
          bottom.className = "info-bottom";  
          var sharp = document.createElement("img");    
          bottom.appendChild(sharp);    
          info.appendChild(bottom);  
          return info;  
      } 
      function closeInfoWindow(){  
          map.clearInfoWindow();  
      } 

      AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],function(){
        map.addControl(new AMap.ToolBar({
          position: 'LB'
        }));
        map.addControl(new AMap.Scale());
        map.addControl(new AMap.OverView({
          isOpen:true,
        }));
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.map-direction {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1005;
  background: #fff;
}
#container {
  margin-top: 1.95rem;
  height: 100%;
}
</style>

