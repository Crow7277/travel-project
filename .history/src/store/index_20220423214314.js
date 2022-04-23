import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let defalutCity = '上海';
try {
    if (localStorage.city) {
        defalutCity = localStorage.ci;
    }
} catch (error) {}
export default new Vuex.Store({
    // 用于存储数据
    state: {
        city: localStorage.city || '北京',
    },
    // 用于将state中的数据进行加工
    getters: {},
    // 用于操作数据(state)
    mutations: {
        changeCity(state, city) {
            state.city = city;
            localStorage.city = city;
        },
    },
    // 用于响应组件中的动作
    actions: {
        // changeCity(ctx, city) {
        //     ctx.commit('changeCity', city);
        // },
    },
    modules: {},
});
