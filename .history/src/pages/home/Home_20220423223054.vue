<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <HomeRecommend :list="recommendList"></HomeRecommend>
        <HomeWeekend :list="weekendList"></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeRecommend from './components/Recommend.vue';
import HomeWeekend from './components/Weekend';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    data() {
        return {
            // city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
        };
    },
    computed: {
        ...mapState(['city']),
    },
    methods: {
        // 获取ajax数据
        getHomeInfo() {
            axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res) {
            res = res.data;
            // 此处模拟的ret为是否成功返回结果
            // 因此当其为true时表示正确返回了结果
            if (res.ret && res.data) {
                const data = res.data;
                // this.city = data.city;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
            console.log(res);
        },
    },
    mounted() {
        this.getHomeInfo();
    },
};
</script>

<style></style>
