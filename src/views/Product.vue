<template>
  <div class="product container">
    <GoBackBtn />
    <div class="product-wrapper">
      <div class="product-img">
        <img :src="getProductImg(product.slug)" />
      </div>
      <div class="product-details">
        <p class="overline product-overline" v-if="product.new">New Product</p>
        <h2>{{product.name}}</h2>
        <p id="description">{{product.description}}</p>
        <h6>$ {{formatValue(product.price)}}</h6>
        <div class="product-add-cart">
          <div class="btn-quantity">
            <button @click="quantityToCart--" class="btn-three btn-decrement" />
              <span>{{quantity}}</span>
            <button @click="quantityToCart++" class="btn-three btn-increment" />
          </div>
          <div class="btn-add-cart">
            <button @click="addToCart()" class="btn btn-one">
            Add to cart
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>

  <div class="product-info container">
    <div class="product-info-features">
      <h3>Features</h3>
      <p>{{product.features}}</p>
    </div>
    <div class="product-info-includes">
      <h3>In the box</h3>
      <ul v-for="item in product.includes" :key="item">
        <li>{{item.quantity}}</li>
        <li>{{item.item}}</li>
      </ul>
    </div>
  </div>

  <ProductGallery
  :image_first="getProductGallery(product.slug, 1)"
  :image_second="getProductGallery(product.slug, 2)"
  :image_third="getProductGallery(product.slug, 3)"
  />

  <div class="others-products container">
    <h3>You may also like</h3>
    <div class="others-products-content">
      <Other v-for="other in product.others" :key="other"
      :other_product_img="getOtherImg(other.slug)"
      :other_product_name="other.name"
      :other_product_slug="other.slug"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ProductGallery from '@/components/ProductGallery.vue'
import Other from '@/components/Other.vue'
import GoBackBtn from '@/components/GoBackBtn.vue'

export default {
  name: 'Product',
  components: {
    ProductGallery,
    Other,
    GoBackBtn
  },
  data() {
    return {
      slug: this.$route.params.slug,

      quantityToCart: 1,
    }
  },
  methods: {
    getProductImg(slug) {
      return require('@/assets/media/product-' + slug + '/image-product.jpg')
    },
    getProductGallery(slug, id) {
      return require('@/assets/media/product-' + slug + '/image-gallery-' + id + '.jpg')
    },
    getOtherImg(slug) {
      return require('@/assets/media/shared/image-' + slug + '.jpg')
    },
    formatValue(value) {
      return value.toLocaleString(undefined, {maximumFractionDigits: 0})
    },
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: this.quantity
      })
    }
  },
  computed: {
    ...mapGetters([
      'getProductBySlug'
    ]),
    product() {
      return this.getProductBySlug(this.slug)[0]
    },
    quantity() {
      return this.quantityToCart;
    }
  },
}
</script>