import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: {
      bmw: {
        name: 'BMW',
        price: 110
      },
      google: {
        name: 'Google',
        price: 200
      },
      apple: {
        name: 'Apple',
        price: 250
      },
      twitter: {
        name: 'Twitter',
        price: 30
      }
    },
    funds: 10000,
    portfolio: {}
  },
  getters: {
    formattedFunds: (state) => {
      return state.funds.format();
      // return state.funds.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  },
  mutations: {

  },
  actions: {

  }
})
