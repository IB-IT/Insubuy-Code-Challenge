import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      startDate: null,
      endDate: null,
      age: '',
      policy: 0,
      country: '',
      state: ''
    }
  },
  mutations: {
    validate (state, form) {

    }
  },
  actions: {
    validate (context, form) {
      context.commit('validate', form)
    }
  },
  getters: {

  }
})
