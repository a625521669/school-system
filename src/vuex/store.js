import Vue from 'vue'
import Vuex from 'vuex'
import * as common from "../common.js"

Vue.use(Vuex)

const state = {
    apiBase: common.apiBase,
    openUserOptions: false,
}

const getters = {

}

const mutations = {
    toggleUserOption(state) {
        state.openUserOptions = !state.openUserOptions;
    }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    getters,
    mutations
});