<template>
<div class="shop_li">
  <section>
    <img src="http://blog.img.chunibyo.org/card.jpg" alt="" class="shop_img">
  </section>
  <div class="shop_li_right">
     <header>
      <h4>
        {{name}}
      </h4>
      <!-- <ul>
        <li>略</li>
        <li>略</li>
        <li>略</li>
      </ul> -->
      </header>
      <h5 class="one">
        <section class="one_left">
          <section></section>
           <p>月售{{monthlySales}}单</p>
        </section>
        <!-- <section class="one_right">
          <p class="one_right_l">蜂鸟转送</p>
          <p class="one_right_r">准时达到</p>
        </section>    -->
      </h5>
      <h5 class="two">
         <p class="fei">
            人均消费 ¥{{perFee}}
         </p>
        <p class="distance">
          <span>{{distance}}公里</span>
          <!-- <span>/</span> -->
          <!-- <span style="color: #3190e8">分钟</span> -->
        </p>
      </h5>     
  </div>
</div>
</template>

<script>
export default {
  props: ['name',
          'monthlySales',
          'perFee',
          'distance'],
}
</script>