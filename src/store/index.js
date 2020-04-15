import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login({dispatch, commit}, payload) {
      console.log(`masuk login`)
      console.log(payload)
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/login',
        data: payload
      })
      .then(({data})=> {
        console.log(`success login`)
        const token = data.token
        localStorage.setItem('token', token)
        router.push('/dashboard')
        dispatch('getProducts')
      })
      .catch(err => {
        console.log('ini error', err)
      })
    },
    getProducts({commit}, payload) {
      console.log(`fetching products`)
      axios({
        method: 'get',
        url:  'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        console.log(`berhasil fetching`)
        console.log(data.Products)
        commit('SET_PRODUCTS', data.Products)
      })
      .catch(err => {
        console.log(`err fetching: `, err.response.data.errors)
      })
    },
    addProduct({commit, dispatch}, payload) {
      console.log(`add product`)
      console.log(payload)
      axios({
        method: 'post',
        url:  'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
      .then(({data}) => {
        console.log(`berhasil add product`)
        console.log(data)
        // commit('SET_PRODUCTS', data)
      })
      .catch(err => {
        console.log(`err fetching: `, err.response.data.errors)
      })
    },
    editProduct({commit},payload) {
      console.log(`kok ga masuk`)
      console.log(`============ini idnya==========`, payload.id)
      console.log(`edit product`)
      console.log( `ini payload.id`,payload.id)
      axios({
        method: 'put',
        url:  `http://localhost:3000/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
      .then(({data}) => {
        console.log(`berhasil edit product`)
        console.log(data)
        // commit('SET_PRODUCTS', data)
      })
      .catch(err => {
        console.log(`err editing: `, err.response.data.errors)
      })
    },
    delete({commit, dispatch}, payload) {
      console.log(`delete product`)
      console.log(payload)
      axios({
        method: 'delete',
        url:  `http://localhost:3000/products/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        console.log(`berhasil delete product`)
        console.log(data)
        dispatch('getProducts')
      })
      .catch(err => {
        console.log(`err fetching: `, err.response.data.errors)
      })
    }
  },
  modules: {
  }
})
