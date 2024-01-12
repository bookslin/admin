import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";//持久化插件

export default createStore({
  state: {
    isGetterRouter:false,
    isCollapse:false,
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state,value) {
      state.isGetterRouter = value
    },
    //控制侧边栏展开
    changeCollapsed(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths:["isCollapse"] //控制是否持久化
  })],
})
