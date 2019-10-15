import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: {
      BMW: {
        name: 'BMW',
        price: 110
      },
      Google: {
        name: 'Google',
        price: 200
      },
      Apple: {
        name: 'Apple',
        price: 250
      },
      Twitter: {
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
    buyStock: (state, payload) => {
      if (payload.quantity > 0) {
        if (state.portfolio[payload.name]) {
          state.portfolio[payload.name].quantity += payload.quantity;
        } else {
          state.portfolio[payload.name] = {
            ...payload
          }
        }
        state.funds -= state.stocks[payload.name].price * payload.quantity;
        // state.portfolio[payload.name].name = payload.name;
        // state.portfolio[payload.name].quantity = payload.quantity;
      }
    },
    sellStock: (state, payload) => {

    }
  },
  actions: {
    buyStock: ({ commit }, payload) => {
      commit('buyStock', payload);
    },
    sellStock: ({ commit }, payload) => {
      commit('sellStock', payload);
    }
  }
})
