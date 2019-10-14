<template>
  <div class="box content">
    <h1>Trade or View your portfolio</h1>
    <p>You may save and load your data.</p>
    <p>Click on "End Day" to begin a new day!</p>
    <hr>
    <p>Your Funds: ${{ funds }}</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      funds: 10000
    }
  }
}
</script>
