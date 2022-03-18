<template>
  <div class="container">
	<h1>Vue Challenges</h1>
	<nav>
		<router-link to="/checkout"><div class="nav-button">Checkout</div></router-link>
		<router-link to="/calculator"><div class="nav-button">Calculator</div></router-link>
		<router-link to="/countdown"><div class="nav-button">Countdown</div></router-link>
		<router-link to="/todo"><div class="nav-button">To Do</div></router-link>
	</nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  setup() {
    
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

html {
	background-color: rgb(26, 34, 44);
}

.alert {
  position: absolute;
  top:1rem;
  left:0;
  right:0;
  width: 30rem;
  margin: auto;
  background-color: aliceblue;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 5px;
}

.container {
  width: 70rem;
  margin: auto;
}

.nav-button {
	color: aquamarine;
	background-color: #2c3e50;
	display: inline-block;
	padding: 1rem 2rem;
	margin: 1rem 2rem 2rem 0;
	border-radius: 5px;
}

.nav-button:hover{
  background-color: #243647;
}

.primaryBtn {
  background-color: #2c3e50;
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
