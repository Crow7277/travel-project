<template>
    <div>
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue';
export default {
    name: 'Detail',
    components: { DetailBanner, DetailHeader },
};
</script>

<style>
</style>
