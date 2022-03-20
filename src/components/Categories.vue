<template>

  <section class="categories container">
      <div class="category">
        <img :src="headphones" class="category-img" />
        <h6>Headphones</h6>
        <div class="category-shop">
          <router-link to="/headphones">Shop</router-link>
          <img :src="arrow" />
        </div>
      </div>

      <div class="category">
        <img :src="speakers" class="category-img" />
        <h6>Speakers</h6>
        <div class="category-shop">
          <router-link to="/speakers">Shop</router-link>
          <img :src="arrow" />
        </div>
      </div>

      <div class="category">
        <img :src="earphones" class="category-img" />
        <h6>Earphones</h6>
        <div class="category-shop">
          <router-link to="/earphones">Shop</router-link>
          <img :src="arrow" />
        </div>
      </div>
  </section>

</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      headphones: require('@/assets/media/shared/image-category-thumbnail-headphones.png'),
      speakers: require('@/assets/media/shared/image-category-thumbnail-speakers.png'),
      earphones: require('@/assets/media/shared/image-category-thumbnail-earphones.png',),
      arrow: require('@/assets/media/shared/icon-arrow-right.svg')

    }
  }
}
</script>