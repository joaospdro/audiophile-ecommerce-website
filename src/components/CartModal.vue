<template>
  <div @click="toggleModal()" v-if="showModal" class="cart-modal-overlay" />
  <div v-if="showModal" class="cart-modal container">
    <div class="cart-modal-content">
      <div class="cart-item-header">
        <h6>Cart ({{cartItemCount}})</h6>
        <button @click="emptyCart" class="btn-three"> Remove all </button>
      </div>
      <div v-for="item in cart.cart" :key="item" class="cart-modal-items">
        <div class="cart-item-img">
          <img :src="getProductImg(item.product.slug)" />
        </div>
        <div class="cart-item-details">
          <p>{{item.product.name}}</p>
          <p>$ {{formatValue(item.product.price)}}</p>
        </div>
        <div class="cart-item-quantity">
          <button @click="changeQuantity('decrement', item.product)" class="btn-three btn-decrement" />
          <span>{{item.quantity}}</span>
          <button @click="changeQuantity('increment', item.product)" class="btn-three btn-increment" />
        </div>
      </div>
      <div class="cart-item-footer">
        <span>Total</span>
        <h6>$ {{formatValue(cartTotal)}}</h6>
      </div>
      <div v-if="cartCount >= 1" class="cart-checkout-btn">
        <router-link to="/checkout">
          <button @click="toggleModal()" class="btn btn-one"> Checkout </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'CartModal',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    showModal() {
      return this.$store.state.cart.showCartModal;
    },
    ...mapGetters([
      'cartItemCount',
      'cartTotalPrice'
    ]),
    cartCount() {
      return this.cartItemCount;
    },
    cartTotal() {
      return this.cartTotalPrice;
    }
  },
  methods: {
    getProductImg(slug) {
      return require('@/assets/media/cart/image-' + slug + '.jpg')
    },
    toggleModal() {
      this.$store.commit('toggleCartModal');
    },
    emptyCart() {
      this.$store.dispatch('emptyCart');
    },
    changeQuantity(mode, product) {
      this.$store.dispatch('changeQuantity', { mode, product });
    },
    formatValue(value) {
      return value.toLocaleString(undefined, {maximumFractionDigits: 0})
    },
  }
}
</script>