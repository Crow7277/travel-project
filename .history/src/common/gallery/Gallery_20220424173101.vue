<template>
    <div class="container">
        <div class="wrapper">
            <swiper>
                <swiper-slide :options="swiperOptions">
                    <img
                        class="gallery-img"
                        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        class="gallery-img"
                        src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
                    />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
            },
        };
    },
};
</script>

<style lang="stylus" scoped>
.container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 9
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
        overflow: hidden
        height: 0
        width: 100%
        padding-bottom: 100%
        .gallery-img
            width: 100%
            height: 100%
        .swiper-pagination
            color: #fff
</style>
