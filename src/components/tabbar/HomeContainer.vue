<template>
  <div>
    <mt-swipe :auto="2000" class="home-swiper">
        <mt-swipe-item class="swipe-item"  v-for="item in imgs" :key="item.img" >
          <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9 my-table">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
              <img src="../assets/images/nav_1.png" alt="">
              <div class="mui-media-body">Home</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../assets/images/nav_2.png" alt="">
              <div class="mui-media-body">Email</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../assets/images/nav_4.png" alt="">
              <div class="mui-media-body">location</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../assets/images/nav_5.png" alt="">
              <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../assets/images/nav_6.png" alt="">
              <div class="mui-media-body">Phone</div></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: null
    };
  },
  created() {
    this.getLunbos();
  },
  methods: {
    getLunbos() {
      this.$http.jsonp("http://localhost:9090/lunbo").then(res => {
        this.imgs = res.body;
      });
    }
  }
};
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
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.my-table.mui-table-view{
  background-color: white;
  border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>


