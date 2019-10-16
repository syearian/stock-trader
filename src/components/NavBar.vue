<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-left">
        <router-link to="/" class="navbar-item">Stock Trader</router-link>
        <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
        <router-link to="/stocks" class="navbar-item">Stocks</router-link>
      </div>
      <div class="navbar-right">
        <a  href=""
            class="navbar-item"
            @click.prevent="endDay">End Day</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-item">Save & Load</a>
          <div class="navbar-dropdown has-background-primary">
            <a  class="navbar-item"
                @click.prevent="saveData">Save Data</a>
            <a  class="navbar-item"
                @click.prevent="loadData">Load Data</a>
          </div>
        </div>
        <div class="navbar-item">Funds: ${{ funds }}</div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';
  import axios from 'axios';

  export default {
    computed: {
      funds() {
        return this.$store.getters.formattedFunds;
      }
    },
    methods: {
      ...mapActions([
        'endDay',
        'loadData'
      ]),
      saveData() {
        const stockData = this.$store.state;
        axios.put('/saved.json', stockData)
          .then(res => console.log(res))
          .catch(error => console.log(error));
      }
    }
  }
</script>

<style lang="scss">
.navbar .container {
  display: flex;
  justify-content: space-between;
}

.navbar-left,
.navbar-right {
  display: flex;
}

.navbar-dropdown {
  display: none;
  position: absolute;
  z-index: 10;
}

.has-dropdown:hover {
  .navbar-dropdown {
    display: block;
  }
}
</style>