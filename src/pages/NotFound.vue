<template>
  <div class="col-full text-center">
    <h1>Not found</h1>
    <router-link :to="{name: 'Home'}">Read some cool threads</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  created () {
    this.$emit('ready')
  }
}
</script>

<style scoped>

</style>
