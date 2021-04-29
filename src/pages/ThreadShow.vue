<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}
    <router-link :to="{name: 'ThreadEdit', id: this.id}" class="btn-green btn-small" tag="button">
      Edit thread
    </router-link>
    </h1>

    <p>
      By <a href="#" class="link-unstyled">{{ thread.author.name }}</a>, <app-date :timestamp="thread.publishedAt"/>.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">
        {{ thread.repliesCount }} replies by {{ thread.contributorsCount}} contributors
      </span>
    </p>

    <post-list :posts="threadPosts"></post-list>
    <post-editor @save="addPost"></post-editor>

  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
import AppDate from '@/components/AppDate'

export default {
  name: 'ThreadShow',
  components: {
    AppDate,
    PostList: PostList,
    PostEditor: PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    threads () {
      return this.$store.state.threads
    },
    posts () {
      return this.$store.state.posts
    },
    thread () {
      return this.$store.getters.thread(this.id)
    },
    threadPosts () {
      return this.posts.filter(p => p.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style scoped>

</style>
