import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        fileName: [],
        name: 'LING'
    },

    mutations: {
        increment (state) {
            // 变更状态
            state.count++
        },
        jian (state) {
            // 变更状态
            state.count--
        }
    }
})