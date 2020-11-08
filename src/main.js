import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC3ut4wruCHMg0vwgCSpoDXEACsZZL56z8",
  authDomain: "test-takeoff.firebaseapp.com",
  databaseURL: "https://test-takeoff.firebaseio.com",
  projectId: "test-takeoff",
  storageBucket: "test-takeoff.appspot.com",
  messagingSenderId: "1080999853691",
  appId: "1:1080999853691:web:445137d906e224c421acde"
};

let app
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app =  new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


