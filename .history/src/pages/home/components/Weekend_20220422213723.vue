<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul v-for="item of recommendList" :key="item.id">
            <li class="item border-bottom">
                <div class="item-img-wrapper"><img class="item-img" :src="item.imgUrl" /></div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
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
                    imgUrl: '	https://imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg',
                    title: '马鞍山 - 重庆',
                    desc: '5天跟团旅游包含飞机票 + 4晚住宿',
                },
                {
                    id: '0002',
                    imgUrl: 'https://imgs.qunarzz.com/vs_ceph_b2c_001/a65af91c-…d9f-80f6-74004c12e203.jpg_180x120x90_953fecd9.jpg',
                    title: '
                        忻州当地游 1天自由行
                ',
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
.item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
        width: 100%
.item-info
    padding: .1rem
    .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
    .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>
