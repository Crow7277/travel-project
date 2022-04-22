<template>
   <div class="app-container">
    <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          v-for="item in 5"
          :key="item"
          :style="{background'}">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Swiper',
    data() {
        return {
            swiperOption: {},
        };
    },
};
</script>

<style lang="stylus" scoped></style>
>
