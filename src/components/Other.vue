<template>
    <div class="other-product">
      <div class="other-product-img">
        <img :src="other_product_img" />
      </div>
      <h5>{{other_product_name}}</h5>
      <button @click="$router.go({ path: `/product/${other_product_slug}`})" class="btn btn-one">
        See product
      </button>
    </div>
</template>

<script>
export default {
  name: 'Other',
  props: ['other_product_img', 'other_product_name', 'other_product_slug'],
}
</script>