import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
    meta: {
      requiredAuth: true
    }
  },
  //Для других маршрутов выдаем 404 если авторизованы, если нет, то переход на страницу авторизации 
  {
    path: '*',
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      requiredAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let requiredAuth = to.matched.some(record => record.meta.requiredAuth);
  if (requiredAuth && !firebase.auth().currentUser){
    next({
      path: '/'
    })
  }
  else{
    next();
  }
  //Сразу переходим сразу на страницу контакты, если авторизованы
  if (to.path === '/' && firebase.auth().currentUser){
    next({
      path: '/contacts'
    })
  }
  else{
    next();
  }
});

export default router
