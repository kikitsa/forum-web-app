<template>
  <h1>Welcome to the forum</h1>
  <category-list :categories="categories"/>
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList'

export default {
  name: 'Home',
  components: { CategoryList },
  data () {
    return {
      categories: sourceData.categories
    }
  }
}
</script>

<style scoped>

</style>
