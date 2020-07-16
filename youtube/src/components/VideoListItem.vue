<template>
  <li class="list-group-item media" @click="onVideoSelect"  >
    <img class="mr-3" :src="thumbnailUrl" />
    <div class="media-body">
      <h5 class="mt-0 mb-1">{{ video.snippet.title }} </h5>
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video );
    }

  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>
