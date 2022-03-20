<template>
  <div class="checkout container">
    <GoBackBtn />
    <div class="checkout-wrapper">
      <CheckoutForm />
      <Summary />
    </div>
    <CheckoutModal />
  </div>
</template>

<script>
import GoBackBtn from "@/components/GoBackBtn.vue"
import CheckoutForm from '@/components/CheckoutForm.vue'
import Summary from "@/components/Summary.vue"
import CheckoutModal from '@/components/CheckoutModal.vue'

export default {
  name: 'Checkout',
  components: {
    GoBackBtn,
    CheckoutForm,
    Summary,
    CheckoutModal
  },
  beforeMount() {
    document.querySelector('body').setAttribute('style', 'background: #f1f1f1')
  },
  unmounted() {
    document.querySelector('body').setAttribute('style', 'background: #ffffff')
  }
}
</script>