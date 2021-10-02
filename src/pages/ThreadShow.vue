<template>
  <div v-if="asyncDataStatus_ready" class="col-large push-top">
    <h1>{{ thread.title }}
      <router-link
        v-if="thread.userId === authUser?.id"
        :to="{name: 'ThreadEdit', id: this.id}" class="btn-green btn-small" tag="button">
        Edit thread
      </router-link>
    </h1>

    <p>
      By <a href="#" class="link-unstyled">{{ thread.author?.name }}</a>,
      <app-date :timestamp="thread.publishedAt"/>.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">
        {{ thread.repliesCount }} replies by {{ thread.contributorsCount}} contributors
      </span>
    </p>

    <post-list :posts="threadPosts"></post-list>
    <post-editor v-if="authUser" @save="addPost" />
    <div v-else class="text-center" style="margin-bottom: 50px;">
      <router-link :to="{name: 'SignIn', query:{redirectTo: $route.path}}">Sign In</router-link> or <router-link :to="{name: 'Register',  query:{redirectTo: $route.path}}">Register</router-link> to reply.
    </div>

  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
import AppDate from '@/components/AppDate'
import { mapActions, mapGetters } from 'vuex'
import asyncDataStatus from '@/mixins/asyncDataStatus'
// import useNotifications from '@/composables/useNotifications'

export default {
  name: 'ThreadShow',
  components: {
    AppDate,
    PostList: PostList,
    PostEditor: PostEditor
  },
  mixins: [asyncDataStatus],
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup () {
    // const { addNotification } = useNotifications()
  },
  computed: {
    ...mapGetters('auth', ['authUser']),
    threads () {
      return this.$store.state.threads.items
    },
    posts () {
      return this.$store.state.posts.items
    },
    thread () {
      return this.$store.getters['threads/thread'](this.id)
    },
    threadPosts () {
      return this.posts.filter(p => p.threadId === this.id)
    }
  },
  methods: {
    ...mapActions('threads', ['fetchThread']),
    ...mapActions('users', ['fetchUsers']),
    ...mapActions('posts', ['fetchPosts', 'createPost']),
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.createPost(post)
    }
  },
  async created () {
    const thread = await this.fetchThread({ id: this.id })

    const posts = await this.fetchPosts({ ids: thread.posts })

    const users = posts.map(post => post.userId).concat(thread.userId)
    await this.fetchUsers({ ids: users })
    this.asyncDataStatus_fetched()
  }
}
</script>

<style scoped>

</style>
