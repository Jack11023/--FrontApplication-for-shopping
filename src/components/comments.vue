<template>
    <div class="cnt">
        <h3>发表评论</h3>
        <hr>    
        <textarea placeholder="请bb(最多120字)" maxlength="120"></textarea>
        <mt-button size="large" type="primary">发表评论</mt-button>
        <div class="cmt-content">
            <div v-for="(item,i) in comments" :key="i">
                <p class="title"><span>{{i+1}}楼</span>&nbsp;&nbsp;&nbsp;<span>用户:{{item.user}}</span>&nbsp;&nbsp;&nbsp;<span>2012-12-12 12:12:12</span></p>
                <p class="body">{{item.cmtbody}}</p>
            </div>
        </div>
        <mt-button size="large" type="danger" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                comments: [],
                pageIndex : 1
            }
        },
        created() {
            this.getComments(this.id,this.pageIndex)
        },
        methods: {
            getComments(id,pageIndex) {
                this.$http.jsonp(`comments?id=${id}&pageIndex=${pageIndex}`).then(res => {
                    this.comments = this.comments.concat(res.body||[])
                    console.log(this.comments)
                }).catch(err => {
                    console.log(err.message)
                }) 
            },
            getMore() {
                this.pageIndex++;
                this.getComments(this.id,this.pageIndex)
            }
        },
        props: ["id"]
    }
</script>

<style lang="scss" scoped>
.cnt {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-content {
        margin-top: 15px;
        font-size: 13px;
        .title {
            line-height: 30px;
            background-color: #ccc;
        }
        .body {
            line-height: 35px;
            text-indent: 2em;
        }
    }
}
</style>
