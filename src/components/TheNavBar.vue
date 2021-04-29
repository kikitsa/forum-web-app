<template>
  <header class="header" id="header">

    <router-link :to="{name: 'Home'}" class="logo">
      <img src="../assets/svg/vueschool-logo.svg">
    </router-link>

    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <nav class="navbar">
      <ul>
        <li v-if="authUser" class="navbar-user">
          <router-link :to="{name: 'Profile'}">
            <img class="avatar-small" :src="authUser.avatar" :alt="`${authUser.name} profile picture`">
            <span>
              {{authUser.name}}
              <img class="icon-profile" src="../assets/svg/arrow-profile.svg" alt="">
            </span>
          </router-link>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavBar',
  computed: {
    ...mapGetters(['authUser'])
  }
}
</script>

<style scoped>

</style>
