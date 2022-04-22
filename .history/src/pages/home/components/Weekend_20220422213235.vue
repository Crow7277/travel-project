<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul v-for="item of recommendList" :key="item.id">
            <li class="item border-bottom">
                <div><img class="item-img" :src="item.imgUrl" /></div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data() {
        return {
            recommendList: [
                {
                    id: '0001',
                    imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
                    title: '马鞍山 - 三亚',
                    desc: '5天跟团旅游包含飞机票 + 4晚住宿',
                },
                {
                    id: '0002',
                    imgUrl: 'https://imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg',
                    title: '马鞍山 - 桂林',
                    desc: '10天跟团旅游包含飞机票 + 9晚住宿',
                },
                {
                    id: '0003',
                    imgUrl: 'https://imgs.qunarzz.com/p/p97/1512/73/97da2a9e39df59f7.jpg_256x160_acb41adf.jpg',
                    title: '马鞍山 - 成都',
                    desc: '7天自由行包含飞机票 + 6晚住宿',
                },
            ],
        };
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
