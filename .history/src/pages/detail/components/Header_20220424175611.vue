<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img
                class="banner-img"
                src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
            />
            <div class="banner-info">
                <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe63e;</span>
                    39
                </div>
            </div>
        </div>
        <CommonGallery
            :imgs="imgs"
            v-show="showGallery"
            @close="handleGalleryClose"
        ></CommonGallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue';
export default {
    name: 'DetailHeader',
};
</script>

<style lang="stylus" scoped></style>
