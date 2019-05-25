import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import survey from './survey'

Vue.use(Vuex)

const store = {
  modules: {
    survey
  },
  plugins: [createPersistedState()],
}
export default new Vuex.Store(store)
