import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let defaultCity = '上海';
try {
    if (localStorage.city) {
        defaultCity = localStorage.ci;
    }
} catch (error) {}
export default new Vuex.Store({
    // 用于存储数据
    state: {
        city: defaultCity,
    },
    // 用于将state中的数据进行加工
    getters: {},
    // 用于操作数据(state)
    mutations: {
        changeCity(state, city) {
            state.city = city;
            try {
                localStorage.city = city;
            } catch (error) {
                
            }
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
