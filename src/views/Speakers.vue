<template>
  <CategoryHeader title="Speakers"/>

  <section class="category-products container">
    
    <CategoryProduct 
    new_product="true"
    :product_slug="products[5].slug"
    :product_image="zx9"
    :product_title="products[5].name"
    :product_description="products[5].description"
    />

    <CategoryProduct
    class="category-row-reverse"
    :product_slug="products[4].slug"
    :product_image="zx7"
    :product_title="products[4].name"
    :product_description="products[4].description"
    />

  </section>

</template>

<script>
import CategoryHeader from '@/components/CategoryHeader.vue'
import CategoryProduct from '@/components/CategoryProduct.vue'

export default {
  name: 'Speakers',
  components: {
    CategoryHeader,
    CategoryProduct,
  },
  data() {
    return {
      zx9: require('@/assets/media/product-zx9-speaker/image-category-page-preview.jpg'),
      zx7: require('@/assets/media/product-zx7-speaker/image-category-page-preview.jpg')
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