<template>
    <div>
        <HomeHeader :city="city"></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <HomeRecommend></HomeRecommend>
        <HomeWeekend></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeRecommend from './components/Recommend.vue';
import HomeWeekend from './components/Weekend';
import axios from 'axios';

export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    data() {
        return {
            city: '',
        };
    },
    methods: {
        // 获取ajax数据
        getHomeInfo() {
            axios.get('/api/index.json').then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res) {
            console.log(res);
        },
    },
    mounted() {
        this.getHomeInfo();
    },
};
</script>

<style></style>
