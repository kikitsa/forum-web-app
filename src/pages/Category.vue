<template>
  <h1>{{category.name}}</h1>
  <forum-list :title="category.name" :forums="getForumsForCategory(category)"></forum-list>
</template>

<script>
import ForumList from '@/components/ForumList'
import sourceData from '@/data.json'

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
      return sourceData.categories.find(c => c.id === this.id)
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
