import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";//持久化插件

export default createStore({
  state: {
    isGetterRouter:false,
    isCollapse:false,
    userInfo:{}
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
    },
    changeUserInfo(state,value){
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    clearUserInfo(state,value){
      state.userInfo = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths:["isCollapse","userInfo"] //控制是否持久化
  })],
})
