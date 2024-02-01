
<template>
  <div class="project-detail">
    <h1>{{ project.projectName }}</h1>
    <img class="detail-image" :src="project.thumbnailSource" :alt="project.projectName">
    <p>{{ project.description }}</p>
  </div>
  <div class="video-container">
    <!-- YouTube video demo -->
    <iframe 
      width="560" 
      height="315" 
      :src="getYouTubeEmbedUrl(project.youtubeVideoId)"
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  methods: {
    getYouTubeEmbedUrl(videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style scoped>
.project-detail {
max-width: 800px;
margin: 0 auto;
padding: 50px;
}

.detail-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

</style>
