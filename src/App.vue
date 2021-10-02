<template>
  <the-nav-bar></the-nav-bar>
  <div class="container">
    <router-view v-show="showPage" @ready="onPageReady" :key="`${$route.path}${JSON.stringify($route.query)}`"/>
    <app-spinner v-show="!showPage" />
    <app-notifications />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'
import AppSpinner from '@/components/AppSpinner'
import { mapActions } from 'vuex'
import NProgress from 'nprogress'
import AppNotifications from '@/components/AppNotifications'

export default {
  name: 'App',
  components: { TheNavBar, AppNotifications, AppSpinner },
  data () {
    return {
      showPage: false
    }
  },
  methods: {
    ...mapActions('auth', ['fetchAuthUser']),
    onPageReady () {
      this.showPage = true
      NProgress.done()
    }
  },
  created () {
    this.fetchAuthUser()
    NProgress.configure({
      speed: 200,
      showSpinner: false
    })
    this.$router.beforeEach(() => {
      this.showPage = false
      NProgress.start()
    })
  }
}
</script>

<style>
@import "assets/style.css";
@import "~nprogress/nprogress.css";

#nprogress .bar{
  background: #57AD8D !important;
}
</style>
