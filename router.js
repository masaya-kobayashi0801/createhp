import Vue from 'vue' // Vueのインポート
import Router from 'vue-router' // Vue Routerのインポート
import Home from './src/components/Home' // URLに紐付けたいコンポーネントのインポート
import About from './src/components/About' // URLに紐付けたいコンポーネントのインポート
import Work from './src/components/Work' // URLに紐付けたいコンポーネントのインポート
import Service from './src/components/Service' // URLに紐付けたいコンポーネントのインポート
import Blog from './src/components/Blog'
import Access from './src/components/Access'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/access',
      name: 'access',
      component: Access
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }
})
