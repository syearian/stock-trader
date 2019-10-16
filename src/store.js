import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
      if (payload.quantity > 0) {
        if (payload.quantity > state.portfolio[payload.name].quantity) {
          state.funds += state.stocks[payload.name].price * state.portfolio[payload.name].quantity;
          
          state.portfolio[payload.name].quantity = 0;
        } else {
          state.portfolio[payload.name].quantity -= payload.quantity;

          state.funds += state.stocks[payload.name].price * payload.quantity;
        }
      }
    },
    endDay: (state) => {
      for (const key in state.stocks) {
        let randomNum = Math.floor(Math.random() * 60) - 30;
        state.stocks[key].price += randomNum;
        if (state.stocks[key].price < 1) {
          state.stocks[key].price = 1;
        }
      }
    },
    loadData: (state, payload) => {
      state.stocks = payload.stocks;
      state.funds = payload.funds;
      state.portfolio = payload.portfolio;
    }
  },
  actions: {
    buyStock: ({ commit }, payload) => {
      commit('buyStock', payload);
    },
    sellStock: ({ commit }, payload) => {
      commit('sellStock', payload);
    },
    endDay: ({ commit }) => {
      commit('endDay');
    },
    loadData: ({ commit }) => {
      axios.get('/saved.json')
        .then(res => {
          const data = res.data;
          console.log(data);
          commit('loadData', data);
        })
        .catch(error => console.log(error));
    }
  }
})
