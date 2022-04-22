<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';

export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper ,HomeIcons},
};
</script>

<style></style>
