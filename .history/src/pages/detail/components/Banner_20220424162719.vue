<template>
    <div class="banner">
        <img
            class="banner=img"
            src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        />
        <div class="banner-info">
            <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
            <div class="banner-number">
                <span class="iconfont">&#xe632;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBanner',
};
</script>

<style lang="stylus" scoped>
.banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        .banner-title
            flex: 1
        .ba
</style>
