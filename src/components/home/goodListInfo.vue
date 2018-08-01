<template>
    <div class="card-container">
        <transition @beforeEnter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter">
            <div class="ball" v-show="isShow" ref="ball"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <lunbo :imgs="lunbo" :isfull="false"></lunbo>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        <span>市场价 ： <del>¥{{goodsInfo.market_price}}</del></span>
                        <span>销售价 ： <strong style="color:red;">¥{{goodsInfo.sell_price}}</strong></span>
                    </p>
                    <p>购买数量: <numbox @getCount="getSelectedCount" :max="goodsInfo.stock_quantity"></numbox></p>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="isShow=!isShow">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号 : {{goodsInfo.goods_no}}</p>
                    <p>库存情况 : {{goodsInfo.stock_quantity}}</p>
                    <p>上架时间 : {{goodsInfo.time | dateFormat('YYYY-MM-DD hh:mm:ss')}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <br>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import lunbo from '@/components/public/lunbo'
import numbox from '@/components/public/goodList_numbox'

    export default {
        data() {
            return {
                id : this.$route.params.id,
                lunbo : [],
                goodsInfo : {},
                isShow : false,
                selectedCount : 1
            }
        },
        methods: {
            getlunbo() {
                this.$http.jsonp(`reqlunbo?id=${this.id}`).then(res => {
                    this.lunbo = res.body
                })
            },
            getGoodInfo() {
                this.$http.jsonp(`goodListInfo?id=${this.id}`).then(res => {
                    this.goodsInfo = res.body[0]
                    console.log(this.goodsInfo)
                })
            },
            beforeEnter(el) {
                el.style.transform = 'translate(0,0)'
            },
            enter(el,done) {
                el.offsetWidth
                const startPosition = this.$refs.ball.getBoundingClientRect()
                const endPosition = document.getElementById('ball').getBoundingClientRect()
                el.style.transform = `translate(${endPosition.left-startPosition.left}px,${endPosition.top-startPosition.top}px)`
                el.style.transition = 'all 2s cubic-bezier(1,.01,.33,.97)'
                done()
            },
            afterEnter(el) {
                this.isShow =!this.isShow
            },
            getSelectedCount(count) {
                this.selectedCount = count
                console.log(this.selectedCount)
            }
        },
        created() {
            this.getlunbo()
            this.getGoodInfo()
        },
        components: {
            lunbo,
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .card-container {
        background-color: #eee;
        overflow: hidden;
        .mui-card-footer {
            display:block;
            button {
                margin: 10px 0;
            }
        }
        .ball {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            top:386px;
            left:140px;
            z-index: 99;
        }
    }
</style>