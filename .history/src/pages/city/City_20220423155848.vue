<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue';
import CitySearch from './components/Search.vue';
import CityList from './components/List.vue';
export default {
    name: 'City',
    components: { CityHeader, CitySearch, CityList },
};
</script>

<style></style>
