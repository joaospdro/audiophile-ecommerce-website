export default {
  namespaced: false,
  state: {
    cart: [],
    showCartModal: false,
    showCheckoutModal: false,
  },
  mutations: {
    addToCart(state, { product, quantity }) {
      
      let productInCart = state.cart.find(item => {
        return item.product.slug === product.slug;
      })

      if(productInCart) {
        productInCart.quantity += quantity;
        return;
      }
      
      state.cart.push({
        product,
        quantity
      });
    },
    changeQuantity(state, {mode, product}) {

      let indexOfItem = state.cart.findIndex(item => {
        return item.product.slug === product.slug;
      })

      if(mode === 'increment') {
        state.cart[indexOfItem].quantity++;
      } 
      else if (mode === 'decrement') {
        if (state.cart[indexOfItem].quantity > 1) {
          state.cart[indexOfItem].quantity--;
        } else {
          state.cart.splice(indexOfItem, 1);
        }
      }
    },
    emptyCart(state) {
      state.cart = [];
    },
    toggleCartModal(state) {
      
      state.showCartModal = !state.showCartModal;
      
      let overflow = document.body.classList.toggle('cart-modal-open');

      (state.showCartModal === true) ? overflow : overflow
    },
    toggleCheckoutModal(state) {

      state.showCheckoutModal = !state.showCheckoutModal;

      let overflow = document.body.classList.toggle('checkout-modal-open');

      (state.showCheckoutModal === true) ? overflow : overflow
      
    }
  },
  actions: {
    addProductToCart({ commit }, { product, quantity }) {
      commit('addToCart', { product, quantity });
    },
    changeQuantity({ commit }, { mode, product } ) {
      commit('changeQuantity', { mode, product } );
    },
    emptyCart({ commit }) {
      commit('emptyCart')
    }
  },
  getters: {
    cartItemCount(state) {
      
      let total = 0;

      state.cart.forEach(item => {
        total += item.quantity;
      })

      return total;
    },
    cartTotalPrice(state) {

      let total = 0;

      state.cart.forEach(item => {
        total += item.product.price * item.quantity;
      })

      return total;
    },
    cartShipping(state, getters) {

      let shipping;

      getters.cartItemCount < 1 ? shipping = 0 : shipping = 50

      return shipping;
    },
    cartVat(state, getters) {

      return getters.cartTotalPrice * 0.3;
    },
    cartGrandTotal(state, getters) {

      return getters.cartTotalPrice + getters.cartVat + getters.cartShipping;
    }
  }
}