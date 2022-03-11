<template>
  <div class="checkout-container">
      <div class="left-section">
        <div class="personal-info">
          <h1>Personal Information</h1>
          <input type="text" name="firstName" placeholder="First name">
          <input type="text" name="lastName" placeholder="Last name">
          <input type="text" name="email" placeholder="Email">
          <select name="country">
            <option value="usa">United States</option>
            <option value="norway">Norway</option>
            <option value="chine">China</option>
          </select>
          <input type="number" name="postal" placeholder="Postal Code">
          <input type="number" name="phone" placeholder="Phone Number">
        </div>
        <div class="payment">
          <h1>Payment Details</h1>
          <input type="number" name="creditcard" placeholder="Credit Card Number">  
          <input type="number" name="securityCode" placeholder="Security Code">
          <input type="number" name="expirationDate" placeholder="Expiration Date">
        </div>
      </div>
      <div class="right-section">
        <p>Total: 435$</p>
      </div>
  </div>
</template>

<style>

</style>