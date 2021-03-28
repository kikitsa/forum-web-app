<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <user-profile-card :user="user"></user-profile-card>
        <user-profile-card-editor :user="user"></user-profile-card-editor>
        <p class="text-xsmall text-faded text-center">Member since </p>
        <div class="text-center">
          <hr>
          <a href="#" class="btn-green btn-small">Edit Profile</a>
        </div>
        <hr>

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
  computed: {
    ...mapGetters({ user: 'authUser' })
  }
}
</script>

<style scoped>

</style>
