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
    // 经纬度
    direction(){    
      return this.$route.query.coordinates
    },
    name(){    
      return this.$route.query.name
    },
    tele(){    
      return this.$route.query.tele
    },
    // 具体地址加商圈
    address(){
      return this.$route.query.fir + ' ' + this.$route.query.sec
      return 'lalalalal'
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
        zoom: 11,
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
            `<div style="height: 1rem; font-size: .7rem;">店铺：${_this.name}&nbsp;&nbsp;
            <span style="font-size:.5rem;color:#F00;">
            人均: 约 100
            </span><div/>`
            ,
            `<div style="height: 1rem; font-size: .7rem;">联系电话：${_this.tele}<div/>`
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
.info {
  .info-top {
 
  }
  .info-middle {
    height: 1rem;
    font-size: .7rem;
  }
}

</style>

