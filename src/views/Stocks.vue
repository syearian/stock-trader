<template>
  <div>
    <h1 class="is-size-2 has-text-centered">Available Stocks</h1>
    <div class="stock-list">
      <StockCard  v-for="(value, key) in stocks"
                  :key="key"
                  :stockName="value.name"
                  :stockPrice="value.price"></StockCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StockCard from '@/components/StockCard.vue';

export default {
  components: {
    StockCard
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    }
  }
}
</script>

<style lang="scss">
.stock-list {
  display: flex;
  flex-wrap: wrap;
}
</style>