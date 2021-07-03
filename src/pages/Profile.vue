<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <user-profile-card v-if="!edit" :user="user"></user-profile-card>
        <user-profile-card-editor v-else :user="user"></user-profile-card-editor>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead">{{user.name}} recent activity</span>
          <a href="#">See only started threads ?</a>
        </div>

        <hr>
        <post-list :posts="user.posts"></post-list>

      </div>

    </div>

  </div>
</template>

<script>
import PostList from '@/components/PostList'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    UserProfileCard,
    PostList,
    UserProfileCardEditor
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({ user: 'authUser' })
  },
  created () {
    this.$emit('ready')
  }
}
</script>

<style scoped>

</style>
