<template>
    <div>
        <CityHeader></CityHeader>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue';
import CitySearch from './components/Search.vue';
export default {
    name: 'City',
    components: { CityHeader, CitySearch },
};
</script>

<style></style>
