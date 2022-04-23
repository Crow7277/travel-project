<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList :hot="hotCities" :cities="cities"></CityList>
        <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
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
            if (res.ret && res.data) {
                const data = res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
        },
        handleLetterChange(letter) {},
    },
    mounted() {
        this.getCityInfo();
    },
};
</script>

<style></style>
