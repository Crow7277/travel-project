<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
};
</script>

<style lang="stylus" scoped>
.container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
        background: #fff
</style>
