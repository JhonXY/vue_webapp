<template>
  <header class="head_container">
    <div class="head_left">
      <!-- 这里用router-link不行 -->
      <!-- 返回 -->
      <section v-if="goBack" @click="back">
        <svg class="goback" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2;">
          </polyline>
        </svg>
      </section>
      <!-- 地区 -->
      <section v-else-if="this.$route.path == '/'" @click="region">
        <router-link class="city" :to="'/'">
        {{region}}
        </router-link>
      </section>
      <!-- 搜索 -->
      <router-link :to="'/'" v-else>
        <svg class="search" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none" />
          <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2" />
        </svg>
      </router-link>
    </div >
    <a href="#" class="head_center">
      <!-- 搜索框 -->
      <div class="searchInput" v-if="this.$route.path == '/'">
        请输入
      </div>
      <!-- 标题 -->
      <span class="title_text ellipsis" v-else>{{title}}</span>
    </a>
    <div class="head_right">
      <!-- <router-link :to="userInfo? '/profile' : '/login' "> -->
      <!-- $route.path	当前路由对象的路径，如'/vi
      $route.query	请求参数，如/foo?user=1获取到query.user = 1
      $route.router	所属路由器以及所属组件信息
      $route.matched	数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
      $route.name	当前路径名字 -->
      <router-link :to="'/login'" v-if="login" style="touch-action: none;">
        <svg class="user_avator" viewBox="0 0 28 33" id="user" width="100%" height="100%">
          <path fill-rule="evenodd" d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z" class="path1">
          </path>
        </svg>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {

    } 
  },
  props: {
    title: {
      type: String,
      default: '缺少一个标题',
    },
    goBack: {
      type: Boolean,
      default: false
    },
    login: {
      type: Boolean,
      default: true
    },
    region: {
      type: String,
      default: '北京',
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
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
  display: block;
}
a.head_center {
  width: 60%;
  margin-left: 1rem;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #fff;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .searchInput {
    display: block;
    height: 100%;
    background: rgba(33, 126, 212, 0.75);
    padding: 0 0 0 1.17rem;
    border-radius: .2rem;
    color: rgb(174, 206, 235);
    font-size: 0.5rem;
    text-align: left;
    &::after {
      width: .3rem;
      content: "";
      display: block;
      border-top: 1px solid #fff;
      border-radius: .35rem;
      position: absolute;
      left: 4.36rem;
      bottom: 0.82rem;
      width: .23rem;
      height: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    &::before {
      width: .3rem;
      content: "";
      display: block;
      height: .31rem;
      border: 1px solid #fff;
      border-radius: .43rem;
      position: absolute;
      left: 4.1rem;
      bottom: .85rem;
    }
  }
}
.head_left { 
  width: 0.9rem;
  height: 0.9rem;
  margin-left: .8rem;
  .search {
    width: 0.8rem;
    height: 0.8rem;
  }
  .goback {
    left: 0.4rem;
    width: 0.6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: .4rem;
  }
  .city {
    width: 2rem;
    height: 1rem;
    font-size: 0.6rem;
    line-height: .8rem;
    color: #fff;
  }
  .city::after {
      width: 0.3rem;
      content: "";
      border: 1px solid #fff;
      position: absolute;
      left: 2.3rem;
      top: 36%;
      display: block;
      height: 0.3rem;
      border-top: none;
      border-right: none;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
}
.head_right {  
  width: 0.9rem;
  height: 0.9rem;
  margin-right: .8rem;
  .user_avator {
    fill: #fff;
    width: 0.8rem;
    height: 0.8rem;
  }
}
</style>
