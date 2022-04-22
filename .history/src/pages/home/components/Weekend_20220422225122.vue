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
    props:{
        list:
    }
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
                    imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg',
                    title: '厦门',
                    desc: '厦门，带娃出行与幸福同行',
                },
                {
                    id: '0003',
                    imgUrl: 'https://imgs.qunarzz.com/vs_ceph_b2c_001/20a40b53-74ad-4c6d-8107-a00931203bc6.jpg_180x120x90_659d317b.jpg',
                    title: '马鞍山 - 大理',
                    desc: '滇西秘境·昆大丽+香/泸自选8天〽赠古城专业旅拍+超五酒店+地热温泉+雪山之巅+洱海游艇+民族演出+藏式风情/探秘女儿国',
                },
            ],
        };
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
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
