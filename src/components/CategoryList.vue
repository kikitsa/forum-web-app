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
import sourceData from '@/data.json'

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
      return sourceData.forums.filter(f => f.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
