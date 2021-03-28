<template>

  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{forum.name}}</h1>
        <p class="text-lead">{{forum.description}}</p>
      </div>
      <a href="#" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <thread-list :threads="threads"></thread-list>
  </div>

</template>

<script>
import ThreadList from '@/components/ThreadList'

export default {
  name: 'Forum',
  components: {
    ThreadList: ThreadList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum () {
      return this.$store.state.forums.find(f => f.id === this.id)
    },
    threads () {
      return this.$store.state.threads.filter(t => t.forumId === this.id)
    }
  }
}
</script>

<style scoped>

</style>
