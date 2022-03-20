<template>
  <div class="checkout-form">
    <h3>Checkout</h3>
    <div class="checkout-form-billing">
      <h4>Billing details</h4>
      <div class="checkout-form-input">
        <label for="name">Name</label>
        <input type="text" placeholder="Alexei Ward">
      </div>
      <div class="checkout-form-input">
        <label for="email">Email address</label>
        <input type="email" placeholder="alexei@mail.com">
      </div>
      <div class="checkout-form-input">
        <label for="phone">Phone number</label>
        <input type="tel" placeholder="+1 202-555-0136">
      </div>
    </div>
    <div class="checkout-form-shipping">
      <h4>Shipping Info</h4>
      <div class="checkout-form-input">
        <label for="address">Address</label>
        <input id="address" type="text" placeholder="1137 Williams Avenue">
      </div>
      <div class="checkout-form-input">
        <label for="zipcode">Zip Code</label>
        <input type="text" placeholder="10001">
      </div>
      <div class="checkout-form-input">
        <label for="city">City</label>
        <input type="text" placeholder="New York">
      </div>
      <div class="checkout-form-input">
        <label for="country">Country</label>
        <input type="text" placeholder="United States">
      </div>
    </div>
    <div class="checkout-form-payment">
      <h4>Payment Details</h4>
      <label for="method">Payment Method</label>
      <div @click="select('e-money')" class="checkout-form-payment-method">
        <span class="checkout-form-payment-method-radio" />
        <span 
        v-if="payment.method === 'e-money'" 
        class="checkout-form-payment-method-radio-checked" 
        />
        <p>E-money</p>
      </div>
      <div @click="select('cash')" class="checkout-form-payment-method">
        <span class="checkout-form-payment-method-radio" />
        <span 
        v-if="payment.method === 'cash'" 
        class="checkout-form-payment-method-radio-checked" 
        />
        <p>Cash on Delivery</p>
      </div>
    </div>
    <div v-if="payment.method === 'cash'" class="checkout-form-cash">
      <img :src="payment.images.cash" />
      <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier 
      arrives at your residence. Just make sure your address is correct so that your order 
      will not be cancelled.</p>
    </div>
    <div v-if="payment.method === 'e-money'" class="checkout-form-e-money">
      <div class="checkout-form-input">
        <label for="e-money-number">e-Money Number</label>
        <input type="text" placeholder="238521993">
      </div>
      <div class="checkout-form-input">
        <label for="e-money-pin">e-Money PIN</label>
        <input type="tel" placeholder="6891">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  data() {
    return {
      payment: {
        images: {
          cash: require('@/assets/media/cart/cash.svg')
        },
        method: 'e-money'
      }
    }
  },
  methods: {
    select(method) {
      this.payment.method = method;
    }
  }
}
</script>