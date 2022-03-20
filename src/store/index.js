import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import cart from './modules/cart'

export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts( {commit} ) {
      await axios
      .get('https://api.jsonbin.io/b/620da0eeca70c44b6e9b5e03/')
      .then((res) => {
        commit('setProducts', res.data)
      })
    }
  },
  getters: {
    getProductBySlug: (state) => (slug) => {
      return state.products.filter(product => product.slug == slug)
    }
  },
  modules: {
    cart
  },
  plugins: [createPersistedState({
    paths: ['products', 'cart.cart']
  })]
})
