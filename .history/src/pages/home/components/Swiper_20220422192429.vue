<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
            <img
                src="https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/24490c207f818119f3541b7bc48d9da9.jpg"
                alt=""
            />
        </swiper-slide>
        <swiper-slide></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption: {},
        };
    },
};
</script>
