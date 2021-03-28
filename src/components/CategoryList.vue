<template>
  <forum-list v-for="category in categories"
              :key="category.id"
              :forums="getForumsForCategory(category)"
              :title="category.name"
              :category-id="category.id">
  </forum-list>

</template>

<script>
import ForumList from '@/components/ForumList'

export default {
  name: 'CategoryList',
  components: {
    ForumList: ForumList
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsForCategory (category) {
      return this.$store.state.forums.filter(f => f.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
