import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/index.vue'
import NProgress from '@/utils/nprogress'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
