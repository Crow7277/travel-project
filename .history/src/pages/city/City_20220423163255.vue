<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList></CityList>
        <CityAlphabet></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header.vue';
import CitySearch from './components/Search.vue';
import CityList from './components/List.vue';
import CityAlphabet from './components/Alphabet.vue';
export default {
    name: 'City',
    components: { CityHeader, CitySearch, CityList, CityAlphabet },
    mounted()
};
</script>

<style></style>
