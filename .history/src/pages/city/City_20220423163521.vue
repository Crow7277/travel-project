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
    data() {
        return {
            cities: {},
            hotCities: [],
        };
    },
    methods: {
        getCityInfo() {
            axios.get('/api/city.json').then(this.handleGetCityInfo);
        },
        handleGetCityInfo(res) {
            console.log(res);
            res = res.data;
            if (res.ref && res.data) {
                const data = res.data;
            }
        },
    },
    mounted() {
        this.getCityInfo();
    },
};
</script>

<style></style>
