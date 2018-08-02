<template>
    <mt-swipe :auto="2000" class="home-swiper">
        <mt-swipe-item class="swipe-item"  v-for="item in imgs" :key="item.img" >
          <img :src="item.img" alt="" :class="{full : isfull}">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        props:['imgs','isfull']
    }
</script>

<style lang="less" scoped>
    .home-swiper {
  height: 200px;
  .swipe-item {
    text-align: center;
    .full {
      width: 100%;
      height: 100%;
    }
  }
}
</style>