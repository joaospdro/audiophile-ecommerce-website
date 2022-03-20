<template>
  <div class="summary">
    <div class="summary-content">
      <h6>Summary</h6>
      <div v-for="item in cart.cart" :key="item" class="summary-items">
        <div class="summary-item-img">
          <img :src="getProductImg(item.product.slug)" />
        </div>
        <div class="summary-item-details">
          <p>{{item.product.name}}</p>
          <p>$ {{formatValue(item.product.price)}}</p>
        </div>
        <div class="summary-item-quantity">
          <span>x{{item.quantity}}</span>
        </div>
      </div>
      <div class="summary-details">
        <div class="summary-total-price">
          <span>Total</span>
          <h6>$ {{formatValue(this.cartTotalPrice)}}</h6>
        </div>
        <div class="summary-shipping-price">
          <span>Shipping</span>
          <h6>$ {{this.cartShipping}}</h6>
        </div>
        <div class="summary-vat-price">
          <span>Vat (Included)</span>
          <h6>$ {{formatValue(this.cartVat)}}</h6>
        </div>
        <div class="summary-grand-total">
          <span>Grand Total</span>
          <h6>$ {{formatValue(this.cartGrandTotal)}}</h6>
        </div>
      </div>
      <div class="summary-checkout-btn">
        <button @click="toggleModal" class="btn btn-one">
          Continue & Pay
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'SideBarCheckout',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    showCheckoutModal() {
      return this.$store.state.showCheckoutModal;
    },
    ...mapGetters([
      'cartTotalPrice',
      'cartItemCount',
      'cartShipping',
      'cartVat',
      'cartGrandTotal'
    ]),
  },
  methods: {
    getProductImg(slug) {
      return require('@/assets/media/cart/image-' + slug + '.jpg')
    },
    formatValue(value) {
      return value.toLocaleString(undefined, {maximumFractionDigits: 0})
    },
    toggleModal() {
      this.$store.commit('toggleCheckoutModal');
    }
  },
}
</script>
