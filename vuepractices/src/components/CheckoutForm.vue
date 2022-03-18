<template>
  <div class="checkout-container">
    <div class="alert" v-if="data.AlertVisible == true">
		<h1>{{ data.AlertHeader }}</h1>
		<p>{{ data.AlertMessage }}</p>
	</div>
      <div class="left-section">
        <div class="personal-info">
			<h1><span class="numberOrder">1</span> Personal Information</h1>
			<input 
				type="text" 
				name="firstName" 
				class="wLeft" 
				placeholder="First name"
				v-model="data.FirstName[0]"
				:class="{ MissingFieldClass : data.FirstName[1] }">
			<input
				type="text" 
				name="lastName" 
				class="wRight" 
				placeholder="Last name" 
				v-model="data.LastName[0]"
				:class="{ MissingFieldClass : data.LastName[1] }">
			<input
				type="text"
				name="email"
				class="w100"
				placeholder="Email"
				v-model="data.EMail[0]"
				:class="{ MissingFieldClass : data.EMail[1] }">
			<select name="country" class="wLeft">
				<option value="usa">United States</option>
				<option value="norway">Norway</option>
				<option value="chine">China</option>
			</select>
			<input
				type="number"
				name="postal"
				class="wRight"
				placeholder="Postal Code"
				v-model="data.PostalCode[0]"
				:class="{ MissingFieldClass : data.PostalCode[1] }">
			<input
				type="number"
				name="phone"
				class="w100"
				placeholder="Phone Number"
				v-model="data.PhoneNumber[0]"
				:class="{ MissingFieldClass : data.PhoneNumber[1] }">
        </div>
        <div class="payment">
			<h1><span class="numberOrder">2</span> Payment Details</h1>
			<input
				type="number"
				name="creditcard"
				class="w100"
				placeholder="Credit Card Number"
				v-model="data.CreditCardNumber[0]"
				:class="{ MissingFieldClass : data.CreditCardNumber[1] }">
			<input
				type="number"
				name="securityCode"
				class="wLeft"
				placeholder="Security Code"
				v-model="data.SecurityCode[0]"
				:class="{ MissingFieldClass : data.SecurityCode[1] }">
			<input
				type="number"
				name="expirationDate"
				class="wRight"
				placeholder="Expiration Date"
				v-model="data.ExpirationDate[0]"
				:class="{ MissingFieldClass : data.ExpirationDate[1] }">
        </div>
        <button class="primaryBtn" @click="buttonClick">Checkout</button>
      </div>
      <div class="right-section">
		<div class="checkout-info">
			<h1 class="checkoutHeader">Order Summary</h1>
			<p class="checkout-item">
				Sweater 
				<span class="right light">39.99$</span>
			</p>
			<p class="checkout-item">
				Pants 
				<span class="right light">29.99$</span>
			</p>
			<p class="checkout-item">
				Socks 
				<span class="right light">9.99$</span>
			</p>
			<hr>
			<p class="checkout-sum">
				Total 
				<span class="right">79.97$</span>
			</p>
		</div>
      </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
	setup() {
		const values = ["FirstName", "LastName", "Email", "Country", "PostalCode", "PhoneNumber", "CreditCardNumber", "SecurityCode", "ExpirationDate"];
		
		let data = reactive({
		FirstName: ["", false],
		LastName: ["",  false],
		EMail: ["",  false],
		Country: ["",  false],
		PostalCode: ["",  false],
		PhoneNumber: ["",  false],
		CreditCardNumber: ["",  false],
		SecurityCode: ["",  false],
		ExpirationDate: ["",  false],
		AlertHeader: "",
		AlertMessage: "",
		AlertVisible: false,
    });

    function buttonClick() {
		this.checkInput();
    }
	
	function checkInput() {
		if(data.FirstName[0] == "") {
			data.FirstName[1] = true;
			showMissingAlert();
		} else {
			data.FirstName[1] = false;
		}
		
		if(data.LastName[0] == "") {
			data.LastName[1] = true;
			showMissingAlert();
		} else {
			data.LastName[1] = false;
		}
		
		if(data.EMail[0] == "") {
			data.EMail[1] = true;
			showMissingAlert();
		} else {
			data.EMail[1] = false;
		}
		
		if(data.PostalCode[0] == "") {
			data.PostalCode[1] = true;
			showMissingAlert();
		} else {
			data.PostalCode[1] = false;
		}
		
		if(data.PhoneNumber[0] == "") {
			data.PhoneNumber[1] = true;
			showMissingAlert();
		} else {
			data.PhoneNumber[1] = false;
		}
		
		if(data.CreditCardNumber[0] == "") {
			data.CreditCardNumber[1] = true;
			showMissingAlert();
		} else {
			data.CreditCardNumber[1] = false;
		}
		
		if(data.SecurityCode[0] == "") {
			data.SecurityCode[1] = true;
			showMissingAlert();
		} else {
			data.SecurityCode[1] = false;
		}
		
		if(data.ExpirationDate[0] == "") {
			data.ExpirationDate[1] = true;
			showMissingAlert();
		} else {
			data.ExpirationDate[1] = false;
		}
		
		if(data.FirstName[0] != "" && data.LastName[0] != "" && data.EMail[0] != "" && data.PostalCode[0] != "" && data.PhoneNumber[0] != "" && data.CreditCardNumber[0] != "" && data.SecurityCode[0] != "" && data.ExpirationDate[0] != "" ) {
			showSuccessAlert();
		}
	}

    function showMissingAlert() {
		data.AlertHeader = "Wait!"
		data.AlertMessage = "You need to fill out the fields in red";
		data.AlertVisible = true;
		setTimeout(function notVisible(){data.AlertVisible = false}, 3000);
    }
	
	function showSuccessAlert() {
		data.AlertHeader = "Success!"
		data.AlertMessage = "You have successfully purchased your chosen products!";
		data.AlertVisible = true;
		setTimeout(function notVisible(){data.AlertVisible = false}, 3000)
	}
	
    return { values, data, buttonClick, showMissingAlert, showSuccessAlert, checkInput }
	}
}
</script>


<style>
.checkout-container {
  display: flex;
  background-color: #2c3e50;
  padding: 1rem;
  border-radius: 5px;
}

.left-section {
  background-color: aquamarine;
  width: 70%;
  padding: 2rem 4rem;
  border-radius: 5px;
}

.right-section {
  background-color: #2c3e50;
  width: 30%;
  padding: 0 0 0 1rem;
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