<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img
                    class="swiper-img"
                    src="https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/24490c207f818119f3541b7bc48d9da9.jpg"
                    alt=""
                />
            </swiper-slide>
            <swiper-slide>
                <img
                    class="swiper-img"
                    src="https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/9bc953039cf4a3e6af7adbdbb3aa6dc6.jpg"
                    alt=""
                />
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
        };
    },
};
</script>

<style lang="stylus" scoped>
.wrapper
    overflow: hidden
    width: 100%
    height: 31.25vw
    background-color #ccc
    .swiper-pagination-bullet-active
    .swiper-img
        width: 100%
        height: 31.25vw
</style>
