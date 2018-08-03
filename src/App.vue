<template>
  <div id="app">
    <mt-header fixed title="极速购" class="header">
		<span  slot="left" @click="goback" v-show="isShow">
			<mt-button icon="back">返回</mt-button>
		</span>
	</mt-header>
    <nav class="mui-bar mui-bar-tab footer">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/concat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item shopping-car" to="/shoppingCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
				<div id="ball">{{ $store.getters.getAllCounts}}</div>
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
	created() {
		this.isShow = this.$route.path == '/home' ? false : true
	},
	data() {
		return {
		isShow :false
		}
	},
	methods:{
		goback() {
			this.$router.go(-1)
		}
	},
	watch: {
		'$route.path' : function(newVal) {
			if(newVal == '/home') {
				this.isShow = false
			}else {
				this.isShow = true
			}
		}
	}
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
.shopping-car {
	position: relative;
}
#ball {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: red;
	position: absolute;
	top: 0;
	left : 70px;
	color:white;
	z-index: 999;
}
header {
	font-size: 25px;
}
</style>
