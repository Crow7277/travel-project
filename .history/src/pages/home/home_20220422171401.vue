<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper。vue';

export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper },
};
</script>

<style></style>
