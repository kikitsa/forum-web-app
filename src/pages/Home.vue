<template>
  <h1 class="push-top">Welcome to the forum</h1>
  <category-list :categories="categories"/>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  name: 'Home',
  components: { CategoryList },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  async beforeCreate () {
    const categories = await this.$store.dispatch('fetchAllCategories')
    const forumIds = categories.map(category => category.forums).flat()
    this.$store.dispatch('fetchForums', { ids: forumIds })
    console.log('before create', this.categories)
  }
}
</script>

<style scoped>

</style>
