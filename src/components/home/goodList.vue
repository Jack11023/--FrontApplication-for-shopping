<template>
   <div>
        <div class="img_zone_tip">
        <div @click="goGoodListInfo(1)">
            <img src="../../assets/images/10.jpg" alt="">
            <div class="info">
                <div class="name">小米MIX2</div>
                <div class="brief">5.99''大屏,4轴光学防抖</div>
                <div class="price">
                    <span class="p1">¥</span>
                    <span class="p2">2599</span>
                    <span class="p3">起</span>
                    <span class="p4">¥</span>
                    <s class="p5">3299</s>
                </div>
            </div>
        </div>
        <div @click="goGoodListInfo(2)">
            <img src="../../assets/images/10.jpg" alt="">
            <div class="info">
                <div class="name">黑鲨游戏手机 液冷更快</div>
                <div class="brief">液冷更快,独显芯片</div>
                <div class="price">
                    <span class="p1">¥</span>
                    <span class="p2">2999</span>
                    <span class="p3">起</span>
                </div>
            </div>
        </div>
    </div>
    <div class="img_zone_tip">
        <div @click="goGoodListInfo(3)">
            <img src="../../assets/images/10.jpg" alt="">
            <div class="info">
                <div class="name">小米MIX2</div>
                <div class="brief">5.99''大屏,4轴光学防抖</div>
                <div class="price">
                    <span class="p1">¥</span>
                    <span class="p2">2599</span>
                    <span class="p3">起</span>
                    <span class="p4">¥</span>
                    <s class="p5">3299</s>
                </div>
            </div>
        </div>
        <div @click="goGoodListInfo(4)">
            <img src="../../assets/images/10.jpg" alt="">
            <div class="info">
                <div class="name">黑鲨游戏手机 液冷更快</div>
                <div class="brief">液冷更快,独显芯片</div>
                <div class="price">
                    <span class="p1">¥</span>
                    <span class="p2">2999</span>
                    <span class="p3">起</span>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
    export default {
        methods: {
            goGoodListInfo(id) {
                this.$router.push({ path: `/home/goodListInfo/${id}`})
            }
        }
    }
</script>

<style lang="less" scoped>
    .img_zone_tip {
		width: 100%;
		display: flex;
		height: 2.26rem;
        background-color: #ccc;
        div {
            height: 100%;
            flex: 1;
            display: block;
            background-color: #fff;
            img {
                width: 100%;
                height: 1.6rem;
                display: block;
            }
            .info {
                width: 100%;
                height: 0.66rem;
                padding: .1rem;
                display: flex;
                flex-direction: column;
                .name {
                    flex: 1;
                    align-items: center;
                    font-size: .12rem;
		            line-height: .12rem;
                }
                .brief {
                    font-size: .08rem;
                    flex: 1;
                    align-items: center;
                }
                .price {
                    span,s {
                        text-align: center;
                    }
                    .p1 {
                        font-size: .09rem;
                        color: red;
                    }
                    .p2{
                        font-size: .12rem;
                        color: red;
                    }
                    .p3{
                        font-size: .08rem;
                        color: red;
                    }
                    .p4{
                        color: gray;
                    }
                    .p5{
                        font-size: .1rem;
                        color: gray;
                    }
                }
            }
	    }
	}
</style>