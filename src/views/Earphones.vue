<template>
  <CategoryHeader title="Earphones"/>

  <section class="category-products container">
    <CategoryProduct 
    new_product="true"
    :product_slug="products[0].slug"
    :product_image="yx1"
    :product_title="products[0].name"
    :product_description="products[0].description"
    />
  </section>

</template>

<script>
import CategoryHeader from '@/components/CategoryHeader.vue'
import CategoryProduct from '@/components/CategoryProduct.vue'

export default {
  name: 'Earphones',
  components: {
    CategoryHeader,
    CategoryProduct,
  },
  data() {
    return {
      yx1: require('@/assets/media/product-yx1-earphones/image-category-page-preview.jpg')
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
}
</script>