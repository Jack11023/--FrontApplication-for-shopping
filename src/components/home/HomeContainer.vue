<template>
  <div>
    <lunbo :imgs="imgs" :isfull="true"></lunbo>

    <ul class="mui-table-view mui-grid-view mui-grid-9 my-table">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
              <img src="../../assets/images/nav_1.png" alt="">
              <div class="mui-media-body">Home</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
              <img src="../../assets/images/nav_2.png" alt="">
              <div class="mui-media-body">Photo</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodList">
              <img src="../../assets/images/nav_4.png" alt="">
              <div class="mui-media-body">GoodList</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../assets/images/nav_5.png" alt="">
              <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../assets/images/nav_6.png" alt="">
              <div class="mui-media-body">Phone</div></a></li>
    </ul>
  </div>
</template>

<script>
import lunbo from '@/components/public/lunbo'

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
      this.$http.jsonp("lunbo").then(res => {
        this.imgs = res.body;
      });
    }
  },
  components: {
    lunbo
  }
};
</script>

<style lang="less" scoped>
.my-table.mui-table-view{
  background-color: white;
  border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>


