import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    
  },
  mutations: {

  },
  getters: {

  },
  actions: {
    async login({dispatch, commit}, data){
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    },
    async logout(){
      await firebase.auth().signOut();
    }
  },
  modules: {
  }
})
