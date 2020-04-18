import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';
import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';
import firebase from 'firebase'



var firebaseConfig = {
  apiKey: "AIzaSyDu_FLmmP_gSqR4KOu0At06wDdfVxExs0g",
  authDomain: "brada-commerce.firebaseapp.com",
  databaseURL: "https://brada-commerce.firebaseio.com",
  projectId: "brada-commerce",
  storageBucket: "brada-commerce.appspot.com",
  messagingSenderId: "140475552847",
  appId: "1:140475552847:web:be694f7296fe2f47e7463a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.use(Loading);
Vue.use(Toasted, {
  duration: 9000,
  position: 'top-right',
  action : {
    text : 'Okay',
    onClick : (e, toastObject) => {
        toastObject.goAway(0);
    }
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
