<template>
  <div>
    <h1 class="is-size-2 has-text-centered">Available Stocks</h1>
    <StockCard></StockCard>
  </div>
</template>

<script>
// @ is an alias to /src
import StockCard from '@/components/StockCard.vue';

export default {
  components: {
    StockCard
  }
}
</script>

<style>

</style>