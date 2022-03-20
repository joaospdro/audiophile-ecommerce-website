<template>
	<header>
		<nav class="nav-header container">
			
			<router-link to="/">
				<div class="logo">
					<img :src="logo" />
				</div>
			</router-link>

			<div class="links">
				<router-link to="/">Home</router-link>
				<router-link to="/headphones">Headphones</router-link>
				<router-link to="/speakers">Speakers</router-link>
				<router-link to="/earphones">Earphones</router-link>
			</div>

			<div @click="toggleModal()" class="cart">
				<img :src="cart" />
			</div>
		</nav>
	</header>
</template>

<script>
export default {
  name: 'Header',
	data() {
		return {
			logo: require('@/assets/media/shared/logo.svg'),
			cart: require('@/assets/media/shared/icon-cart.svg')
		}
	},
	methods: {
		toggleModal() {
			this.$store.commit('toggleCartModal');
		}
	}
}
</script>