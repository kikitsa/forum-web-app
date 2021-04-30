<template>
  <h1>{{category.name}}</h1>
  <forum-list :title="category.name" :forums="getForumsForCategory(category)"></forum-list>
</template>

<script>
import ForumList from '@/components/ForumList'
import { findById } from '@/helpers'

export default {
  name: 'Category',
  components: {
    ForumList: ForumList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return findById(this.$store.state.categories, this.id)
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
