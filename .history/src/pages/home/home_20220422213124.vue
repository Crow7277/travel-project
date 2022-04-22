<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <HomeRecommend></HomeRecommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeRecommend from './components/Recommend.vue';
import HomeWeekend from './components/Weekend';

export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend },
};
</script>

<style></style>
