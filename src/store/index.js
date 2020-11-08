import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import errorMessage from './errors'

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
      try{
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      }
      catch(e){
        console.log(e);
        throw e;
      }
    },
    async logout(){
      try{
        await firebase.auth().signOut();
      }
      catch(e){
        console.log(e);
        throw e;
      }
    }
  },
  modules: {
  }
})
