import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import Register from '@/pages/Register'
import SignIn from '@/pages/SignIn'
import Profile from '@/pages/Profile'
import ThreadCreate from '@/pages/ThreadCreate'
import ThreadEdit from '@/pages/ThreadEdit'
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/me',
    name: 'Profile',
    component: Profile,
    meta: { toTop: true, smoothScroll: true },
    beforeEnter (to, from) {
      if (!store.state.authId) return { name: 'Home' }
    }
  },
  { path: '/me/edit', name: 'ProfileEdit', component: Profile, props: { edit: true } },
  { path: '/category/:id', name: 'Category', component: Category, props: true },
  { path: '/forum/:id', name: 'Forum', component: Forum, props: true },
  { path: '/thread/:id', name: 'ThreadShow', component: ThreadShow, props: true },
  { path: '/forum/:forumId/thread/create', name: 'ThreadCreate', component: ThreadCreate, props: true },
  { path: '/thread/:id/edit', name: 'ThreadEdit', component: ThreadEdit, props: true },
  { path: '/register', name: 'Register', component: Register },
  { path: '/signin', name: 'SignIn', component: SignIn },
  {
    path: '/logout',
    name: 'SignOut',
    async beforeEnter (to, from) {
      await store.dispatch('signOut')
      return { name: 'Home' }
    }
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
})

router.beforeEach(() => {
  store.dispatch('unsubscribeAllSnapshots')
})

export default router
