import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

export default Vuex.createStore({
  // 用于存储数据
  state,
  // 用于操作数据(state)
  mutations
})
