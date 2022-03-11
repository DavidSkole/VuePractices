<template>
  <div class="container">
    <checkout-form></checkout-form>
  </div>
</template>

<script>
import CheckoutForm from './components/CheckoutForm.vue'

export default {
  name: 'App',
  components: {
    CheckoutForm
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 70rem;
  margin: auto;
}

.primaryBtn {
  background-color: cadetblue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
}
</style>
