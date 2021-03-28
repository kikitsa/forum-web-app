import { createStore } from 'vuex'
import sourceData from '@/data'

export default createStore({
  state: sourceData,
  actions: {
    createPost (context, post) {
      post.id = 'te' + Math.random()
      context.commit('setPost', { post })
      context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId })
    }
  },
  mutations: {
    setPost (state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread (state, { postId, threadId }) {
      state.threads.find(t => t.id === threadId).posts.push(postId)
    }
  }
})
