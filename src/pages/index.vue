<template>
  <div class="container">
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Post from '~/type/Post'

  @Component({
    components: {
      "PostPreview": () => import('~/components/PostPreview/PostPreview.vue')
    },
  })
  export default class FeedPage extends Vue {
    posts: Post[] = [
      {
        id: 1,
        title: "hello",
        description: "test",
      },
    ]
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
