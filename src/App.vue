<template>
  <Header />
  <AlternativeHeader v-if="$route.meta.alternativeHeader"/>
  <CartModal />
  <router-view />
  <Categories v-if="$route.meta.categoriesVisible" style="margin-top: 250px" />
  <About v-if="$route.name !== 'Checkout'"/>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import CartModal from '@/components/CartModal.vue'
import AlternativeHeader from '@/components/AlternativeHeader.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: 'App',
  components: {
    Header,
    CartModal,
    AlternativeHeader,
    Categories,
    About,
    Footer,
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
}
</script>
<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
