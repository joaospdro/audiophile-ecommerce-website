<template>
  <section class="products">
    <div class="container">

      <div class="product-one">
        <img :src="circles" class="pattern-circles"/>
        <img :src="one" class="product-one-img"/>
        <div class="product-one-details">
          <h1>Zx9 Speaker</h1>
          <p>Upgrade to premium speakers that are phenomenally built
          to deliver truly remarkable sound.</p>
          <router-link to="/product/zx9-speaker">
            <button class="btn btn-two">
              See product
            </button>
          </router-link>
        </div>
      </div>

      <div class="product-two">
        <div class="product-two-details">
          <h4>Zx7 Speaker</h4>
          <router-link to="/product/zx7-speaker">
            <button class="btn btn-two">
              See product
            </button>
          </router-link>
        </div>
      </div>

      <div class="product-three">
        <div class="product-three-img" />

        <div class="product-three-details">
          <div class="product-three-details-content">
            <h4>Yx1 Earphones</h4>
          <router-link to="/product/yx1-earphones">
            <button class="btn btn-two">
              See product
            </button>
          </router-link>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      one: require('@/assets/media/home/image-speaker-zx9.png'),
      circles: require('@/assets/media/home/pattern-circles.svg')
    }
  }
}
</script>