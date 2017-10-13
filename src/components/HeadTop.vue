<template>
  <header class="head_container">
    <a href="" class="head_search">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none" />
        <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2" />
      </svg>
    </a>
    <a href="" class="head_center">
      <span class="title_text ellipsis">{{title}}</span>
    </a>
    <a href="" class="head_avator">
      <svg class="user_avatar">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
    </a>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: '这里是一个标题lalalallalalalalal'
    }
  },

}
</script>
<style lang="scss">
.head_container {
  height: 1.95rem;
  display: flex;
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #41a2fc;
  justify-content: space-between;
  align-items: center;
}
header a {
  font-size: 0.65rem;
  height: 1rem;
  width: 20%;
  display: block;
}
a.head_center {
  width: 50%;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #fff;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.head_search { 
  width: 0.9rem;
  height: 0.9rem;
  margin-left: .8rem; 
}
.head_avator {  
  width: 0.9rem;
  height: 0.9rem;
  margin-right: .8rem;
}
</style>
