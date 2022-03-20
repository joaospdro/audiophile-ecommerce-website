<template>
  <div class="category-product">
    <div class="category-product-img">
      <img :src="product_image" />
    </div>

    <div class="category-product-details">
      <p class="overline category-overline" v-if="new_product">New Product</p>
      <h2>{{product_title}}</h2>
      <p>{{product_description}}</p>
      <router-link :to="`/product/${product_slug}`">
        <button class="btn btn-one">
          See product
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryProduct',
  props: ['product_image', 'product_title', 'product_description', 'product_slug', 'new_product']
}
</script>