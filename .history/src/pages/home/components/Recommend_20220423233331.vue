<template>
    <div>
        <div class="title">热销推荐</div>
        <ul v-for="item of list" :key="item.id">
            <!-- tag在router4.x已经废弃，可以根据文档进行代码替换 -->
            <router-link tag="li" to="/detail" class="item border-bottom">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
            <!-- </router-link> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array,
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
.item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
        .item-button
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding:0 .2rem
            border-radius: .06rem
            color: #fff
</style>
