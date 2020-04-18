import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsByCategory: [],
    messageError: '',
    messageSuccess: '',
    error: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_PRODUCTS_BY_CATEGORY (state, payload) {
      state.productsByCategory = payload
    },
    SET_ERROR (state, payload) {
      state.error = payload
    },
    SET_MESSAGE_SUCCESS (state, payload) {
      state.messageSuccess = payload
    },
    SET_MESSAGE_ERROR (state, payload) {
      state.messageError = payload
    }
  },
  actions: {
    login ({ commit, dispatch }, payload) {
      console.log('masuk login')
      console.log(payload)
      return axios({
        method: 'post',
        url: 'https://arcane-depths-40011.herokuapp.com/users/login',
        data: payload
      })
    },
    getProducts ({ commit }, category) {
      console.log('masook fetching products')
      const loader = Vue.prototype.$loading.show({
        container: null,
        canCancel: true,
        onCancel: this.onCancel
      })
      console.log(category)
      if (category) {
        axios({
          method: 'get',
          url: `https://arcane-depths-40011.herokuapp.com/products?category=${category}`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(({ data }) => {
            loader.hide()
            console.log('berhasil fetching: ', data.Products)
            commit('SET_PRODUCTS', data.Products)
          })
          .catch(err => {
            console.log('err fetching: ', err.response.data.errors)
          })
      } else {
        axios({
          method: 'get',
          url: 'https://arcane-depths-40011.herokuapp.com/products',
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(({ data }) => {
            loader.hide()
            console.log('berhasil fetching: ', data.Products)
            commit('SET_PRODUCTS', data.Products)
          })
          .catch(err => {
            console.log('err fetching: ', err.response.data.errors)
          })
      }
    },
    addProduct ({ commit }, payload) {
      return axios({
        method: 'post',
        url: 'https://arcane-depths-40011.herokuapp.com/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
    },
    editProduct ({ commit }, payload) {
      console.log('edit product')
      console.log('ini payload.id', payload.id)
      return axios({
        method: 'put',
        url: `https://arcane-depths-40011.herokuapp.com/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
    },
    delete ({ dispatch }, payload) {
      console.log('delete product')
      console.log(payload)
      axios({
        method: 'delete',
        url: `https://arcane-depths-40011.herokuapp.com/products/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log('berhasil delete product: ', data)
          dispatch('getProducts')
        })
        .catch(err => {
          console.log('delete err: ', err.response.data.errors)
        })
    }
  },
  modules: {
  }
})
