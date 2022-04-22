<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <br />
        <br />
        <!-- <home-swiper-cope></home-swiper-cope> -->
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeSwiperCope from './components/SwiperCopy.vue';

export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeSwiperCope },
};
</script>

<style></style>
