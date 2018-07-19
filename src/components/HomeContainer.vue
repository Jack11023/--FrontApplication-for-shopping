<template>
  <mt-swipe :auto="0" class="home-swiper">
    <mt-swipe-item class="swipe-item">1</mt-swipe-item>
    <mt-swipe-item class="swipe-item">2</mt-swipe-item>
    <mt-swipe-item class="swipe-item">3</mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
 data() {

 },
 created() {
   this.getLunbos()
 },
 methods: {
   getLunbos() {
     this.$http.get('localhost:9090/lunbo').then(function(res) {
       console.log(res.body)
     })
   }
 }
}
</script>

<style lang="scss" scoped>
  .home-swiper {
    height: 200px;
    .swipe-item {
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: blue;
      }
      &:nth-child(3) {
        background-color: orange;
      }
    }
  }
</style>


