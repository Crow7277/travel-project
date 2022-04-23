import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // 用于存储数据
    state: {
        city: '北京',
    },
    // 用于将state中的数据进行加工
    getters: {},
    // 用于操作数据(state)
    mutations: { changeCity(ctx, city) {} },
    // 用于响应组件中的动作
    actions: {
        changeCity(ctx, city) {
            ctx.commit('changeCity', city);
        },
    },
    modules: {},
});
