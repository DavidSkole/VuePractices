<template>
  <div class="checkout-container">
    <div class="alert" v-if="data.AlertVisible == true">{{ data.AlertMessage }}</div>
      <div class="left-section">
        <div class="personal-info">
          <h1><span class="numberOrder">1</span> Personal Information</h1>
          <input type="text" name="firstName" class="wLeft" placeholder="First name" v-model="data.FirstName[0]" :class="{ MissingFieldClass : data.FirstName[1] }">
          <input type="text" name="lastName" class="wRight" placeholder="Last name" v-model="data.LastName[0]">
          <input type="text" name="email" class="w100" placeholder="Email" v-model="data.EMail[0]">
          <select name="country" class="wLeft">
            <option value="usa">United States</option>
            <option value="norway">Norway</option>
            <option value="chine">China</option>
          </select>
          <input type="number" name="postal" class="wRight" placeholder="Postal Code" v-model="data.PostalCode[0]">
          <input type="number" name="phone" class="w100" placeholder="Phone Number" v-model="data.PhoneNumber[0]">
        </div>
        <div class="payment">
          <h1><span class="numberOrder">2</span> Payment Details</h1>
          <input type="number" name="creditcard" class="w100" placeholder="Credit Card Number" v-model="data.CreditCardNumber[0]">   
          <input type="number" name="securityCode" class="wLeft" placeholder="Security Code" v-model="data.CreditCardNumber[0]">
          <input type="number" name="expirationDate" class="wRight" placeholder="Expiration Date" v-model="data.CreditCardNumber[0]">
        </div>
        <button class="primaryBtn" @click="buttonClick">Checkout</button>
      </div>
      <div class="right-section">
		<div class="checkout-info">
			<h1 class="checkoutHeader">Checkout info</h1>
			<p class="checkout-item">Sweater <span class="right light">39.99$</span></p>
			<p class="checkout-item">Pants <span class="right light">29.99$</span></p>
			<p class="checkout-item">Socks <span class="right light">9.99$</span></p>
			<hr>
			<p class="checkout-sum">Total <span class="right">79.97$</span></p>
		</div>
      </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
	setup() {
		let data = reactive({
      FirstName: ["", false],
      LastName: ["", false],
      EMail: ["", false],
      Country: ["", false],
      PostalCode: ["", false],
      PhoneNumber: ["", false],
      CreditCardNumber: ["", false],
      SecurityCode: ["", false],
      ExpirationDate: ["", false],
      AlertMessage: ["", false],
      AlertVisible: false,
    });

    function buttonClick() {
      this.showAlert();
    }

    function showAlert() {
      data.FirstName[1] = true;
      data.AlertMessage = "Wait! You need to fill out the fields in red"
      console.log(data.FirstName[1])
    }

    return { data, buttonClick, showAlert }
	}
}
</script>


<style>
.checkout-container {
  display: flex;
}

.left-section {
  background-color: aquamarine;
  width: 70%;
  padding: 2rem 4rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 5px solid #2c3e50;
}

.right-section {
  background-color: #2c3e50;
  width: 30%;
  padding: 2rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.checkoutHeader{
	margin-bottom: 1.5rem;
}

.checkout-info{
	background: rgb(241, 244, 245);
	padding: 1rem 2rem;
	border-radius: 10px;
}

.checkout-item{
	font-weight: 600;
}

.checkout-sum{
	font-size: 20px;
	font-weight: 600;
}

.right {
	float: right;
}

.light{
	font-weight: 500;
}

.numberOrder {
	font-size: 20px;
	padding: 0.5rem 0.9rem;
	border-radius: 100%;
	background-color: rgb(33, 90, 92);
	color: rgb(230, 240, 241);
}

input, select {
  margin: 10px 0;
  padding: 10px;
  border-radius: 2px;
  border: none;
  border-bottom: 3px solid rgb(177, 204, 211);
  -webkit-appearance: none;
}

select:hover {
	cursor: pointer;
}

select {
	background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(101% - 20px) calc(1em + 3px),
    calc(101% - 16px) calc(1em + 3px),
    calc(101% - 2.9em);
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
	-webkit-appearance: none;
}			

.payment {
	margin-top: 2rem;
}

.w100 {
  width: 100%;
}

.wRight {
  margin-left: 1rem;
  width: 48%;
  overflow: hidden;
}

.wLeft {
  width: 49%;
  float: left;
}

.MissingFieldClass {
  background-color: rgb(245, 236, 236);
  border-bottom: 3px solid rgb(173, 97, 97);
}
</style>