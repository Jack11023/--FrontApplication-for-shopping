<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="count" @change="handleChange" ref="shoppingNumbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '@/lib/mui/js/mui.min.js'

    export default {
        mounted() {
            mui('.mui-numbox').numbox()
        },
        methods: {
            handleChange() {
                this.$store.commit('updateCar',{
                    id : this.id,
                    count : parseInt(this.$refs.shoppingNumbox.value)
                })
            }
        },
        props: ['count','id']
    }
</script>

<style lang="less" scoped>

</style>