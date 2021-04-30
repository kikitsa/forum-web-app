<template>
  <div class="col-full push-top">
    <h1>Editing <i>{{thread.title}}</i></h1>
    <thread-editor :title="thread.title" :text="text" @save="save" @cancel="cancel"></thread-editor>
  </div>
</template>

<script>
import ThreadEditor from '@/components/ThreadEditor'
import { findById } from '@/helpers'

export default {
  name: 'ThreadEdit',
  components: { ThreadEditor },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    thread () {
      return findById(this.$store.state.threads, this.id)
    },
    text () {
      return findById(this.$store.state.posts, this.thread.posts[0]).text
    }
  },
  methods: {
    async save ({ title, text }) {
      const thread = await this.$store.dispatch('updateThread', {
        id: this.id,
        title,
        text
      })
      this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
    },
    cancel () {
      this.$router.push({ name: 'ThreadShow', params: { id: this.id } })
    }
  }
}
</script>

<style scoped>

</style>
