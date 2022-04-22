<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-img-content" src="" alt="" />
                    </div>
                    <p class="icon-desc">热门景点</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img
                            class="icon-img-content"
                            src="https://s.qunarzz.com/homenode/images/touchheader/package.png"
                            alt=""
                        />
                    </div>
                    <p class="icon-desc">热门景点</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data() {
        return {
            iconList: [
                {
                    id: '0001',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '景点门票',
                },
                {
                    id: '0002',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                    desc: '滑雪季节',
                },
            ],
        };
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icon
    position relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
            display: block
            margin: 0 auto
            height: 100%
    .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        text-align: center
        color: $darkTextColor
</style>
