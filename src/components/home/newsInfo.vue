<template>
   <div>
        <div v-for="item in listInfo" :key="item.id">
            <h3>{{item.title}}</h3>
            <p>{{item.time | dateFormat}}</p>
            <p>{{item.content}}</p>
        </div>
        <comments :id="id"></comments>
   </div>
</template>
<script>
    import comments from '@/components/public/comments'
    export default {
        data() {
            return {
                id : this.$route.params.id,
                listInfo: null
            }
        },
        created() {
            this.getInfo(this.id)
        },
        methods: {
            getInfo(id) {
                this.$http.jsonp(`home/newsInfo?id=${id}`).then(data => {this.listInfo = data.body} )
            }
        },
        components: {
            comments
        }
    }
</script>