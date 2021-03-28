import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import Profile from '@/pages/Profile'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/me', name: 'Profile', component: Profile },
  { path: '/category/:id', name: 'Category', component: Category, props: true },
  { path: '/forum/:id', name: 'Forum', component: Forum, props: true },
  { path: '/thread/:id', name: 'ThreadShow', component: ThreadShow, props: true },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
