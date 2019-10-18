import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'
import ComparePage from './views/ComparePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/compare',
      component: ComparePage
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
