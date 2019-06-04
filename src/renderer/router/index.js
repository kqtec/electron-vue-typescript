import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: require('../pages/index.vue').default,
    },
    {
      path: '/Landing',
      name: 'Landing-page',
      component: require('../components/LandingPage.vue').default,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
