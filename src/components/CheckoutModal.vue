<template>
  <div v-if="showModal" class="checkout-modal">
    <div class="checkout-modal-overlay">
      <div class="checkout-modal-content">
        <div class="checkout-modal-header">
          <img src="@/assets/media/cart/icon-check-mark.svg" />
          <h3>Thank you<br> for you order</h3>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div class="checkout-modal-details">
          <div class="checkout-modal-purchased">
            <div class="checkout-modal-purchased-items">
              <div class="purchased-item-img">
                <img :src="getProductImg(item.product.slug)" />
              </div>
              <div class="purchased-item-details">
                <p>{{item.product.name}}</p>
                <p>$ {{formatValue(item.product.price)}}</p>
              </div>
              <div class="purchased-item-quantity">
                <span>x{{item.quantity}}</span>
              </div>
            </div>
            <div v-if="otherItems.length >= 1" class="purchased-item-others">
              <hr>
              <p>and {{otherItems.length}} other item(s)</p>
            </div>
          </div>
          <div class="checkout-modal-total">
            <div class="checkout-modal-total-info">
              <p>Grand total</p>
              <h6>$ {{formatValue(this.cartGrandTotal)}}</h6>
            </div>
          </div>
        </div>
        <div class="checkout-modal-btn">
          <button @click="toggleModal(); emptyCart(); $router.push('/')" class="btn btn-one">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'CheckoutModal',
  computed: {
    item() {
      return this.$store.state.cart.cart[0];
    },
    otherItems() {
      return this.$store.state.cart.cart.slice(1);
    },
    showModal() {
      return this.$store.state.cart.showCheckoutModal;
    },
    ...mapGetters([
      'cartGrandTotal',
      'cartItemCount'
    ]),
  },
  methods: {
    getProductImg(slug) {
      return require('@/assets/media/cart/image-' + slug + '.jpg')
    },
    formatValue(value) {
      return value.toLocaleString(undefined, {maximumFractionDigits: 0})
    },
    emptyCart() {
      this.$store.dispatch('emptyCart');
    },
    toggleModal() {
      this.$store.commit('toggleCheckoutModal')
    }
  },
  mounted() {
    console.log(this.otherItems)
  }
}
</script>t