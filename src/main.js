import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueRouter from 'vue-router';
import Test from './components/Test';
import Comments from "./components/Comments";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes:[
    { path: '/', component: Test },
    { path: '/comments', component: Comments }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
