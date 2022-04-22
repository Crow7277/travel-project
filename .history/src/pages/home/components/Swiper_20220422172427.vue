<!-- The ref attr used to find the swiper instance -->
<template>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
    name: 'Swiper',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
            },
        };
    },
};
</script>
