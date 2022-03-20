<template>
  <div class="product-gallery container">
    <div class="product-gallery-first">
      <img :src="image_first" />
    </div>
    <div class="product-gallery-second">
      <img :src="image_second" />
    </div>
    <div class="product-gallery-third">
      <img :src="image_third" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGallery',
  props: ['image_first', 'image_second', 'image_third']
}
</script>