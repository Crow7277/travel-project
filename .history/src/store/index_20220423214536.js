import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '上海';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (error) {}
export default new Vuex.Store({
    // 用于存储数据
    state: {
        city: defaultCity,
    },
    // 用于操作数据(state)
    mutations: {
        changeCity(state, city) {
            state.city = city;
            try {
                localStorage.city = city;
            } catch (error) {}
        },
    },
});
