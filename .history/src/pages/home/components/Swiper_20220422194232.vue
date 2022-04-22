<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for>
                <img class="swiper-img" src="" alt="" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/24490c207f818119f3541b7bc48d9da9.jpg',
                },
                {
                    id: '0002',
                    imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/9bc953039cf4a3e6af7adbdbb3aa6dc6.jpg',
                },
            ],
        };
    },
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    overflow: hidden
    width: 100%
    height: 31.25vw
    background-color #ccc
    .swiper-img
        width: 100%
        height: 31.25vw
</style>
