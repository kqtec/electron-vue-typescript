import Demo from "../Contracts/Object/Demo";

const state = {
  main: 'this is demo.main state'
}

const getters={
  main(state:any,args:any){
    return new Demo('技术支持：长沙科启网络科技网络考科技').name
  }
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main = 'DECREMENT_MAIN_COUNTER'
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main='INCREMENT_MAIN_COUNTER'
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
