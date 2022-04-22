<!-- The ref attr used to find the swiper instance -->
<template>
    
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name: 'Swiper',
    components: {
    Swiper,
    SwiperSlide
  },
    data() {
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
            },
        };
    },
};
</script>
