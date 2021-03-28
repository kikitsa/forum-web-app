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

    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheNavBar'
}
</script>

<style scoped>

</style>
