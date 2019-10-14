<template>
  <div class="card stockCard">
    <div class="card-header stockCard--header">
      <h3 class="is-size-4">{{ stockName }} <span class="is-size-7">(Price: {{ stockPrice }})</span></h3>
    </div>
    <div class="card-content stockCard--content">
      <input class="input" type="text">
      <button class="button">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stockName', 'stockPrice']
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