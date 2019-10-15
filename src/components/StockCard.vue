<template>
  <div class="card stockCard">
    <div class="card-header stockCard--header">
      <h3 class="is-size-4">{{ stockName }} <span class="is-size-7">(Price: {{ stockPrice }})</span></h3>
    </div>
    <div class="card-content stockCard--content">
      <input  class="input"
              placeholder="Quantity"
              type="number"
              v-model="stockQuantity">
      <button class="button"
              @click="buyStock(payload)">Buy</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['stockName'],
    data() {
      return {
        stockQuantity: 0
      }
    },
    computed: {
      stockPrice() {
        return this.$store.state.stocks[this.stockName].price;
      },
      payload() {
        return {
          name: this.stockName,
          quantity: parseInt(this.stockQuantity)
        }
      }
    },
    methods: {
      ...mapActions([
        'buyStock'
      ])
    }
  }
</script>

<style lang="scss">
.stockCard {
  flex: 50%;
}
.stockCard--header {
  padding: .25rem 1rem;
}

.stockCard--content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: inherit;
  }
}
</style>