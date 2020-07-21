<template>
  <div>
     <div>
      <img v-for="image in allImages" :src="image.link" :key="image.id">
     </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Images',
  computed: {
    ...mapGetters(['allImages']),
  },
  methods: {
    ...mapActions(['fetchImages']),
  },
  created() {
    document.title = "Images";
    this.fetchImages();
  },
};

</script>
