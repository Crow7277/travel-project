<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="data.swiperList"></HomeSwiper>
        <HomeIcons :list="data.iconList"></HomeIcons>
        <HomeRecommend :list="data.recommendList"></HomeRecommend>
        <HomeWeekend :list="data.weekendList"></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeRecommend from './components/Recommend.vue';
import HomeWeekend from './components/Weekend';
import axios from 'axios';
import { useStore } from 'vuex';
import { reactive, onMounted } from 'vue';
export default {
    name: 'Home',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    setup() {
        const data = reactive({
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
        });

        const store = useStore();
        const city = store.state.city;

        // 获取ajax数据
        async function getHomeInfo() {
            let res = await axios.get('/api/index.json?city=' + city);
            res = res.data;
            // 此处模拟的ret为是否成功返回结果
            // 因此当其为true时表示正确返回了结果
            if (res.ret && res.data) {
                const result = res.data;
                // this.city = data.city;
                data.swiperList = result.swiperList;
                data.iconList = result.iconList;
                data.recommendList = result.recommendList;
                data.weekendList = result.weekendList;
            }
            console.log(res);
        }

        onMounted(() => {
            getHomeInfo();
        });

        return { data, city };
    },
};
</script>

<style></style>
