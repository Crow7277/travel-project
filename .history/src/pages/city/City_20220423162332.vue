<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList></CityList>
        <CityAlphabet》
    </div>
</template>

<script>
import CityHeader from './components/Header.vue';
import CitySearch from './components/Search.vue';
import CityList from './components/List.vue';
import CityAlphabet from './components/Alphabet.vue';
export default {
    name: 'City',
    components: { CityHeader, CitySearch, CityList, CityAlphabet },
};
</script>

<style></style>
