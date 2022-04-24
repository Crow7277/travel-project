<template>
    <div>
        <DetailBanner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :galleryImgs="galleryImgs"
        ></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailList :list="list"></DetailList>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue';
import DetailList from './components/List.vue';
import axios from 'axios';
export default {
    name: 'Detail',
    components: { DetailBanner, DetailHeader, DetailList },
    data() {
        return {
            sightName: '',
            bannerImg: '',
            galleryImgs: [],
            list: [],
        };
    },
    methods: {
        getDetailInfo() {
            axios
                .get('/api/detail.json', {
                    // 将动态路由的参数一起发给后端
                    params: {
                        id: this.$route.params.id,
                    },
                })
                .then(this.handleGetDataSucc);
        },
        handleGetDataSucc(res) {
            res = res.data;

            if (res.ret && res.data) {
                const data = res.data;
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.galleryImgs = data.galleryImgs;
                this.list = data.categoryList;
            }
        },
    },
    mounted() {
        this.getDetailInfo();
    },
};
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>
