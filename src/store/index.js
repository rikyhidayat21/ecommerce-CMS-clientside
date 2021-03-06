import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setAddProduct (state, payload) {
      state.product = payload
    },
    selectedProduct (state, payload) {
      state.product = payload
    },
    deleteProduct (state, payload) {
      state.products = state.products.filter(product => product.id !== payload)
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: payload
      })
    },
    fetchProducts (context) {
      console.log('sudah terpanggil nih dari Home di store fetchProducts')
      axios({
        url: 'http://localhost:3000/products',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, '<==== data products')
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addNewProduct (context, payload) {
      const newProduct = {
        name: payload.name,
        image_url: payload.image_url,
        price: payload.price,
        stock: payload.stock
      }
      axios({
        url: 'http://localhost:3000/products',
        method: 'post',
        data: newProduct,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, '<==== data new product')
          context.commit('setAddProduct', data)
          router.push({ name: 'Home' }).catch(() => {})
          Swal.fire({
            title: 'Success add product',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          // .catch(()=>{})
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            // text: err.ResponseText,
            // footer: '<a href>Why do I have this issue?</a>'
          })
          console.log(err, '<==== error add product di store')
        })
    },
    fetchProductById (context, productId) {
      axios({
        url: `http://localhost:3000/products/${productId}`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // disini dirubah untuk manggil mutation
          console.log(data, '<===== product')
          context.commit('selectedProduct', data)
        })
        .catch(err => {
          console.log(err, '<===== error ')
        })
    },
    editProduct (context, payload) {
      console.log(payload, '<<< payload di edit product')
      return axios({ // ditambah return 
        url: 'http://localhost:3000/products/' + payload.productId,
        method: 'put',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        url: `http://localhost:3000/products/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  }
})
