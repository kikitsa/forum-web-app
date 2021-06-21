<template>
  <the-nav-bar></the-nav-bar>
  <div class="container">
    <router-view v-show="showPage" @ready="onPageReady"/>
    <app-spinner v-show="!showPage" />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'
import AppSpinner from '@/components/AppSpinner'
import { mapActions } from 'vuex'
import NProgress from 'nprogress'

export default {
  name: 'App',
  components: { TheNavBar, AppSpinner },
  data () {
    return {
      showPage: false
    }
  },
  methods: {
    ...mapActions(['fetchAuthUser']),
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
