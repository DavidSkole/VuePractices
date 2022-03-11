<template>
  <div class="checkout-container">
      <div class="left-section">
        <div class="personal-info">
          <h1>Personal Information</h1>
          <input type="text" name="firstName" class="wLeft" placeholder="First name">
          <input type="text" name="lastName" class="wRight" placeholder="Last name">
          <input type="text" name="email" class="w100" placeholder="Email">
          <select name="country" class="wLeft">
            <option value="usa">United States</option>
            <option value="norway">Norway</option>
            <option value="chine">China</option>
          </select>
          <input type="number" name="postal" class="wRight" placeholder="Postal Code">
          <input type="number" name="phone" class="w100" placeholder="Phone Number">
        </div>
        <div class="payment">
          <h1>Payment Details</h1>
          <input type="number" name="creditcard" class="w100" placeholder="Credit Card Number">  
          <input type="number" name="securityCode" class="wLeft" placeholder="Security Code">
          <input type="number" name="expirationDate" class="wRight" placeholder="Expiration Date">
        </div>
        <button class="primaryBtn">Checkout</button>
      </div>
      <div class="right-section">
        <p>Total: 435$</p>
      </div>
  </div>
</template>

<style>
.checkout-container {
  display: flex;
}

.left-section {
  background-color: aquamarine;
  width: 70%;
  padding: 2rem 4rem;
}

.right-section {
  background-color: cadetblue;
  width: 30%;
}

input, select {
  margin: 10px 0;
  padding: 10px;
  border-radius: 2px;
  border: none;
  border-bottom: 2px solid rgb(226, 226, 226);
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
</style>