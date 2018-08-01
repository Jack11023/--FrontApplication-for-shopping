<template>

  <div id="app">
    <mt-header fixed title="Vue项目" class="header"></mt-header>
    <nav class="mui-bar mui-bar-tab footer">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/concat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shoppingCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <div class="container">
			<transition>
				<router-view></router-view>
			</transition>
		</div>
  </div>

</template>

<script>
import mui from '@/lib/mui/js/mui.min.js'
export default {
	name: 'App',
	mounted() {
		mui('body').on('tap','a',function(){document.location.href=this.href;});
	},
  data() {
    return {
      
    }
  },
  methods:{
    
  },
}
</script>

<style scoped>
* {
		touch-action: pan-y;
	}
body,
html {
	position: relative;
	width: 100%;
	overflow-x: hidden;
	font-size: 100px;
}
#app {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
}
.container {
  padding-top: 40px;
	padding-bottom: 50px;
}
.v-enter {
	opacity: 0;
	transform: translateX(100%);	
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
	transition: all .5s ease;
	position: absolute;
}
</style>
