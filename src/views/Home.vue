<template>
  <Hero />
  <Categories />
  <Products />
</template>

<script>
import Hero from '@/components/Hero.vue'
import Categories from '@/components/Categories.vue'
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Categories,
    Products
  }
}
</script>
