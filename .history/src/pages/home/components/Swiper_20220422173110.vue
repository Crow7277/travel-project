<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="recommendPage">
        
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
    name: 'Swiper',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOption: {},
        };
    },
};
</script>
