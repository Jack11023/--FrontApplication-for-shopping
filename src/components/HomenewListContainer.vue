<template>
    <ul>
        <li v-for="item in newlist" :key="item.time" class="list-item">
            <router-link :to="'/home/newsInfo/'+item.id">
                <div class="mui-row">
                    <img :src="item.pic" alt="" class="mui-col-xs-3">
                    <div class="mui-col-xs-9">
                        <h3>{{item.title}}</h3>
                        <p><span class="mui-pull-left">{{item.time | dateFormat}}</span><span class="mui-pull-right">{{item.tick}}次</span></p>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                newlist: null
            }
        },
        created() {
            this.getNewList()
        },
        methods: {
            getNewList() {
                this.$http.jsonp('home/newList').then(res=> this.newlist=res.body);
            }
        }
    }
</script>
<style lang="scss" scoped>
    ul {
        padding: 0;
        margin: 0;
        .list-item {
        list-style: none;
        margin: 20px;
        }
    }
</style>
