<template>
  <div class="rating">
    <span 
    class="rating-star rating-star-solid" 
    v-for="index in a" :key="index"></span><span 
    class="rating-star rating-star-half" 
    v-for="index in b" :key="index"></span><span 
    class="rating-star rating-star-empty" 
    v-for="index in c" :key="index"></span>
    <span ref="rate" class="subject-rate">{{rate}}</span>
  </div>
</template>

<script>
export default {
  props:['rate'],
  data(){
    return {
      a: 0, b: 0, c: 0
    }
  },
  created(){
    this.rating()
  },
  methods: {
    rating(){
      var subjects = this.rate
      var re = (subjects%1);
      this.a = Math.floor(subjects)
      // 一定要记住switch(true)
      switch(true) {
        case re >= 0.5: 
          this.a+=1;
          break;
        case 0 < re && re < 0.5: 
          this.b+=1;
          console.log('b:'+this.b)
          break;
        case re <= 0: 
          console.log('tiaoguo') 
          break;
      };
      this.c =5 - this.a - this.b;
    }
  }
}
</script>

<style lang="scss" scoped>
.rating {
  width: 80%;
}
.rating-star {
  vertical-align: middle;
  display: inline-block;
  width: .7rem;
  height: .7rem;
  background-size: 100% 100%;
  margin-right: .1rem;
}
.rating-star-solid {
  background-image: url(../../assets/images/solid.png)
}
.rating-star-half {
  background-image: url(../../assets/images/half.png)
}
.rating-star-empty {
  background-image: url(../../assets/images/empty.png)
}
.subject-rate {
  display: inline-block;
  vertical-align: middle;
  color: #e09015;
  font-size: .5rem;
  padding-left: .3rem;
}
</style>

