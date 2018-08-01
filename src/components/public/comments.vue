<template>
    <div class="cnt">
        <h3>发表评论</h3>
        <hr>    
         <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="user">
        </div>
        <textarea placeholder="请bb(最多120字)" maxlength="120" v-model="user_comment"></textarea>
        <mt-button size="large" type="primary" @click="post">发表评论</mt-button>
        <div class="cmt-content">
            <div v-for="(item,i) in comments" :key="i">
                <p class="title"><span>{{i+1}}楼</span>&nbsp;&nbsp;&nbsp;<span>用户:{{item.user}}</span>&nbsp;&nbsp;&nbsp;<span>2012-12-12 12:12:12</span></p>
                <p class="body">{{item.cmtbody}}</p>
            </div>
        </div>
        <mt-button size="large" type="danger" plain @click="getMore(user,user_comment)">加载更多</mt-button>
    </div>
</template>

<script>
    import moment from 'moment'
    import { Toast } from 'mint-ui'
    import '@/lib/mui/css/mui.min.css'

    export default {
        data() {
            return {
                comments: [],
                pageIndex : 1,
                user : null,
                user_comment : null
            }
        },
        created() {
            this.getComments(this.id,this.pageIndex)
        },
        methods: {
            getComments(id,pageIndex) {
                this.$http.jsonp(`comments?id=${id}&pageIndex=${pageIndex}`).then(res => {
                    this.comments = this.comments.concat(res.body||[])
                }).catch(err => {
                    console.log(err.message)
                }) 
            },
            getMore() {
                this.pageIndex++;
                this.getComments(this.id,this.pageIndex)
            },
            post() {
                var user = this.user
                var comment = this.user_comment
                this.$http.jsonp(`posts?user=${user}&comment=${comment}&id=${this.id}&pageIndex=${this.pageIndex}`).then(res => {
                    if(res.body == 0) {
                        this.comments.unshift({
                            user,
                            cmtbody : comment
                        })
                        this.user=''
                        this.user_comment=''
                        Toast('提交成功!')
                    } else {
                        Toast('写入失败!')
                    }
                }).catch(err => Toast('提交失败'))
            }
        },
        props: ["id"]
    }
</script>

<style lang="less" scoped>
.cnt {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 20px;
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
