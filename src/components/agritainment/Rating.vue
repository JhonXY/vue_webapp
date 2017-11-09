<template>
  <div class="rating">
    <span class="rating-star"></span>
    <span class="subject-rate">{{rate}}</span>
  </div>
</template>

<script>
export default {
  props:['rate'],
  methods: {
    rating(){
      var subjects = document.getElementsByClassName('subject-rate')
      Array.from(subjects).forEach((item, index) => {
      var grade = parseFloat(item.innerHTML)
        switch (true) {
          case grade === 0:
            item.previousElementSibling.style['background-position'] = '0 -4.3rem';
            break;
          case 0 < grade && grade <= 1:
            item.previousElementSibling.style['background-position'] = '0 -3.86rem';
            break;
          case 1 < grade && grade <= 2:
            item.previousElementSibling.style['background-position'] = '0 -3.44rem';
            break;
          case 2 < grade && grade <= 3:
            item.previousElementSibling.style['background-position'] = '0 -3rem';
            break;
          case 3 < grade && grade <= 4:
            item.previousElementSibling.style['background-position'] = '0 -2.58rem';
            break;
          case 4 < grade && grade <= 5:
            item.previousElementSibling.style['background-position'] = '0 -2.15rem';
            break;
          case 5 < grade && grade <= 6:
            item.previousElementSibling.style['background-position'] = '0 -1.72rem';
            break;
          case 6 < grade && grade <= 7:
            item.previousElementSibling.style['background-position'] = '0 -1.29rem';
            break;
          case 7 < grade && grade <= 8:
            item.previousElementSibling.style['background-position'] = '0 -.86rem';
            break;
          case 8 < grade && grade <= 9:
            item.previousElementSibling.style['background-position'] = '0 -.43rem';
            break;
          case 9 < grade && grade <= 10:
            item.previousElementSibling.style['background-position'] = '0 0px';
            break;
        }
      })
    }
  },
  mounted(){
    this.rating()
  }
}
</script>

<style lang="scss" scoped>
.rating {
  width: 80%;
  line-height: 100%;
}
.rating-star {
  vertical-align: middle;
  display: inline-block;
  width: 2.4rem;
  height: .45rem;
  background: url(../../assets/images/stars.png)
  // height: 100%;
}
.subject-rate {
  display: inline-block;
  vertical-align: middle;
  color: #e09015;
  font-size: .5rem;
  padding-left: .3rem;
}
</style>

