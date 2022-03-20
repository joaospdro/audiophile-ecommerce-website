<template>
  <CategoryHeader title="Headphones"/>
  <section class="category-products container">
    
    <CategoryProduct 
    new_product="true"
    :product_slug="products[3].slug"
    :product_image="marktwo"
    :product_title="products[3].name"
    :product_description="products[3].description"
    />
    
    <CategoryProduct 
    class="category-row-reverse"
    :product_slug="products[2].slug"
    :product_image="markone"
    :product_title="products[2].name"
    :product_description="products[2].description"
    />

    <CategoryProduct
    :product_slug="products[1].slug"
    :product_image="xx59"
    :product_title="products[1].name"
    :product_description="products[1].description"
    />
  </section>

</template>

<script>
import CategoryHeader from '@/components/CategoryHeader.vue'
import CategoryProduct from '@/components/CategoryProduct.vue'

export default {
  name: 'Headphones',
  components: {
    CategoryHeader,
    CategoryProduct
  },
  data() {
    return {
      marktwo: require('@/assets/media/product-xx99-mark-two-headphones/image-category-page-preview.jpg'),
      markone: require('@/assets/media/product-xx99-mark-one-headphones/image-category-page-preview.jpg'),
      xx59: require('@/assets/media/product-xx59-headphones/image-category-page-preview.jpg')
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