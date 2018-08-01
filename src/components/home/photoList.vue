<template>
   <div class="mui-content">
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id != 0?'':'mui-active']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in photoList" :key="item.id">
						{{item.mes}}
					</a>
				</div>
			</div>
		</div>
		<ul>
			<li v-for="item in picsList" :key="item.img">
				<img v-lazy="item.img">
				<p>{{item.description}}</p>
			</li>
		</ul>
		<img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">   
	</div>
</template>

<script>
import '@/lib/mui/css/mui.css'
import mui from '@/lib/mui/js/mui.min.js'

    export default {
		data() {
			return {
				photoList:null,
				picsList:null,
				list: [
					{
						src: "http://localhost:9090/images/bj01.jpg",
						alt: 'picture1',
						title: 'Image Caption 1',
						w: 600,
						h: 400
					},
					{
						src: "http://localhost:9090/images/bj02.jpg",
						alt: 'picture2',
						title: 'Image Caption 2',
						w: 1200,
						h: 900
					}
				]
			}
		},
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		created() {
			this.getphotoList()
			this.getPics(1)
		},
		methods: {
			getphotoList() {
				this.$http.jsonp('photoList').then(res => {
					this.photoList = res.body
					this.photoList.unshift({
						id : 0,
						mes : '全部'
					})
				}).catch(err => {
					if(err)
					console.log(err.message)
				})
			},
			getPics(id) {
				this.$http.jsonp(`pictureList?id=${id}`).then(res => {
					this.picsList = res.body
				})
			},
		}
    }
</script>

<style lang="less" scoped>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			padding: 10px;
			margin-bottom: 10px;
			background-color: #fff;
			box-shadow: 0 0 9px #999;
			img {
				width: 100%;
				height: 100%;
			}
			img[lazy=loading] {
				width: 100%;
				height: 150px;
				margin: auto;
				background-color: #999;
			}
		}
	}
</style>