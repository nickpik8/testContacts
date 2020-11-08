import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: null
  },
  mutations: {
    setEmail(state, userEmail){
      state.email = userEmail;
    }
  },  
  getters: {
    getEmail: state => {
      return state.email;
    }
  },
  actions: {
    async login({dispatch, commit}, data){
      try{
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password); 
        dispatch('setUserEmail');
      }
      catch(e){
        console.log(e.message);
        alert('Неверный логин или пароль, проверьте правильность введенных данных!')
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
    },
    setUserEmail({dispatch, commit}){
      commit('setEmail', firebase.auth().currentUser.email);
    }
  },
  modules: {
  }
})
