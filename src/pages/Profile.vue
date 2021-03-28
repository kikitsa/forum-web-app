<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge">
          </p>

          <h1 class="title">{{user.username}}</h1>

          <p class="text-lead">{{user.name}}</p>

          <p class="text-justify">{{user.bio || 'No bio specified'}}</p>

          <span class="online">{{user.username}} is online</span>

          <div class="stats">
            <span>{{userPostsCount}} posts</span>
            <span>{{userThreadsCount}} threads</span>
          </div>

          <hr>

          <p class="text-large text-center" v-if="user.website">
            <i class="fa fa-globe"></i>
            <a :href="user.website">{{user.website}}</a>
          </p>

        </div>

        <hr>

        <post-list :posts="userPosts"></post-list>
      </div>

    </div>

  </div>
</template>

<script>
import PostList from '@/components/PostList'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    PostList
  },
  computed: {
    ...mapGetters({ user: 'authUser' }),
    userPostsCount () {
      return this.userPosts.length
    },
    userThreadsCount () {
      return this.userThreads.length
    },
    userPosts () {
      return this.$store.state.posts.filter(post => post.userId === this.user.id)
    },
    userThreads () {
      return this.$store.state.threads.filter(thread => thread.userId === this.user.id)
    }
  }
}
</script>

<style scoped>

</style>
