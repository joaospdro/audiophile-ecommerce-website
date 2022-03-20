<template>
  <footer>
    <nav class="nav-footer container">

      <div class="nav-footer-logo">
        <img :src="logo" alt="logo" />
      </div>

      <div class="nav-footer-description">
        <p>Audiophile is an all in one stop to fulfill your audio needs. 
        We're a small team of music lovers and sound specialists who are devoted 
        to helping you get the most out of personal audio. Come and visit our demo 
        facility - we’re open 7 days a week.</p>
      </div>

      <div class="nav-footer-copy">
        <p>Copyright 2021. All Rights Reserved</p>
      </div>

      <div class="nav-footer-links links">
				<router-link to="/">Home</router-link>
				<router-link to="/headphones">Headphones</router-link>
				<router-link to="/speakers">Speakers</router-link>
				<router-link to="/earphones">Earphones</router-link>
      </div>

      <div class="nav-footer-social links">
          <a href="#">
            <img :src="facebook" />
          </a>
          <a href="#">
            <img :src="twitter" />
          </a>
          <a href="#">
            <img :src="insta" />
          </a>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      logo: require('@/assets/media/shared/logo.svg'),
      facebook: require('@/assets/media/shared/icon-facebook.svg'),
      twitter: require('@/assets/media/shared/icon-twitter.svg'),
      insta: require('@/assets/media/shared/icon-instagram.svg')
    }
  }
}
</script>