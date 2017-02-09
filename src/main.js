import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './vuex/store.js'
import routes from './routers.js'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name != 'login' && localStorage.getItem("userId") == undefined)
    fetch(store.state.apiBase + "/user/GetLoginInfo?userId=" + localStorage.getItem("userId"))
      .then(response => response.json())
      .then(result => result.login ? next() : next('login'))
  else
    next();
})

// new Vue({
//   el: '#app',
//   store,
//   render: h => h(App)
// })


const routerApp = new Vue({
  store,
  router,
}).$mount('#app');

export default routerApp;
