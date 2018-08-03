<template>
    <div class="mui-container">
        <div class="mui-card" v-for="(item,i) in shoppingInfo" :key="item.img">
            <div class="mui-card-content">
                <div class="mui-card-content-inner shoppingInfo">
                    <div :class="{'mui-switch' :true, 'mui-switch-mini' :true, 'mui-active':selected[item.id]}" @tap="updateSelected(item.id)">
                        <div class="mui-switch-handle"></div>
                    </div>
                    <img :src="item.img" alt="">
                    <div class="info">
                        <h3>{{item.title}}</h3>
                        <p>
                            <span>¥{{item.price}}</span>
                            <numbox :count="shoppingCount[item.id]" :id="item.id"></numbox>
                            <a href="javascript:void(0)" @tap="remove(item.id,i)" >删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card" >
            <div class="mui-card-content">
                <div class="mui-card-content-inner accounts">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>
                            已勾选商品<span class="num-one">{{selectedGoods.count}}</span>件,总价<span class="num-one">¥{{selectedGoods.sum}}</span>
                        </p>
                    </div>
                    <button type="button" class="mui-btn mui-btn-danger">去结算</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.min.js'
import numbox from '@/components/public/shoppingCar_numbox'

    export default {
        data() {
            return {
                shoppingInfo : [],
                shoppingCount : {},
                selected : {},
                selectedGoods : {}
            }
        },
        mounted() {
            mui('.mui-switch')['switch']()
        },
        created() {
            this.getshoppingInfo()
            var shopping = {}
            this.$store.state.goodsInfo.forEach(function(item) {
                shopping[item.id] = item.count
            })
            this.shoppingCount = shopping
            this.selected = this.$store.getters.getSelected
            this.selectedGoods = this.getAllSelected()
        },
        methods: {
            getshoppingInfo() {
                var ids = []
                this.$store.state.goodsInfo.forEach(function(item) {
                    ids.push(item.id)
                })
                if(ids.length === 0) 
                return
                this.$http.jsonp(`goods/shoppingCar/${ids.join(',')}`).then(res => {
                    this.shoppingInfo = res.body
                })
            },
            remove(id,index) {
                this.shoppingInfo.splice(index,1)
                this.$store.commit('deleteFromCar',id)
                 this.selectedGoods = this.getAllSelected()
            },
            updateSelected(id) {
                this.selected[id] = !this.selected[id]
                this.$store.commit('updateSelected',{
                    id,
                    selected : this.selected[id]
                })
                 this.selectedGoods = this.getAllSelected()
            },
            getAllSelected() {
                return this.$store.getters.getAllSelected
            }
        },
        components: {
            numbox
        }
    }
</script>

<style lang="less" scoped>
   .mui-container {
        background-color: #ccc;
        overflow: hidden;
        .shoppingInfo {
            display: flex;
            align-items: center;
            img {
                width: 100px;
                height: 100px;   
                margin: 0 10px;
                }
                .info {
                    flex-grow :1;
                    p{
                        display: flex;
                        justify-content: space-between;
                        padding: 0 20px;
                        align-items: center;
                        span {
                            text-align: center;
                            color:red;
                            font-size: 14px;
                            }
                            .mui-numbox {
                                width: 150px;
                            }
                    }
            }
        }
        .accounts {
            display: flex;
            justify-content:space-between;
            align-items: center;
            .left {
                font-size: 14px;
                letter-spacing: 5px;
                .num-one {
                    color:red;
                    font-weight: bold;
                }
            }
            button {
                height: 50px;
            }
        }
    }
</style>
