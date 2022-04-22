<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeIcons from './components/Recommend.vue';

export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons },
};
</script>

<style></style>
