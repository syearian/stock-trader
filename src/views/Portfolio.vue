<template>
  <div>
    <h1 class="is-size-2 has-text-centered">Your Portfolio</h1>    
    <div class="stock-list">
      <PortfolioCard  v-for="(value, key) in portfolio"
                  :key="key"
                  :stockName="value.name"></PortfolioCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioCard from '@/components/PortfolioCard.vue';

export default {
  components: {
    PortfolioCard
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio;
    }
  }
}
</script>

<style>
.stock-list {
  display: flex;
  flex-wrap: wrap;
}
</style>