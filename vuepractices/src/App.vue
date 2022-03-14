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
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 2rem;
}

.primaryBtn:hover{
	cursor: pointer;
	background-color: rgb(73, 139, 141);
}

h1{
	font-size: 25px;
	color: rgb(33, 90, 92);
}
</style>
