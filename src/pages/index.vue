<template>
  <div class="container">
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getBaseInfo } from "~/core/api/apiExecutor";
import Post from "~/type/Post";
import PostPreview from "~/components/PostPreview/PostPreview.vue";

@Component({
  components: {
    PostPreview
  },
  async asyncData() {
    const payload = JSON.stringify({
      token: "dev"
    });
    // console.log(payload);
    // axios({
    //   method: "post",
    //   headers: {'X-Requested-With': 'XMLHttpRequest'},
    //   url: "http://local_lottery_api.platformdev.cc:978/lottery_game/get_base_info/",
    //   params: {
    //     par: payload
    //   },
    //   responseType: "json",
    // }).then((res) => {
    //   console.log(res.data)
    // })
    const data = await getBaseInfo(payload).then(res => res.data.desc);
    console.log(data);
  }
})
export default class FeedPage extends Vue {
  posts: Post[] = [
    {
      id: 1,
      title: "hello",
      description: "test"
    }
  ];
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
