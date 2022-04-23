import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    // 用于存储数据
    state: state,
    // 用于操作数据(state)
    mutations: {
        
    },
});
