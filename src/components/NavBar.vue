<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-left">
        <router-link to="/" class="navbar-item">Stock Trader</router-link>
        <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
        <router-link to="/stocks" class="navbar-item">Stocks</router-link>
      </div>
      <div class="navbar-right">
        <a href="" class="navbar-item">End Day</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a href="" class="navbar-item">Save & Load</a>
          <div class="navbar-dropdown">
            <a href="" class="navbar-item">Save Data</a>
            <a href="" class="navbar-item">Load Data</a>
          </div>
        </div>
        <div class="navbar-item">Funds: ${{ funds }}</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.formattedFunds;
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