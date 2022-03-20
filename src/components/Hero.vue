<template>
  <section class="hero">
    <div class="hero-content container">
      
      <p class="overline">New Product</p>
      <h1>XX99 Mark II Headphones</h1>

      <div class="description">
        <p>Experience natural, lifelike audio and exceptional 
        build quality made for the passionate music enthusiast.</p>
      </div>

      <router-link to="/product/xx99-mark-two-headphones">
        <button class="btn btn-one">
          See product
        </button>
      </router-link>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>