<template>
  <div class="project-detail">
    <h2 v-if="project">{{ project.projectName }}</h2>
    <p v-if="project">{{ project.description }}</p>
    <p class="no-data" v-else>No project data available.</p>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.project-detail {
  max-width: 800px;
  margin: 0 auto;
}

.no-data {
  padding-top: 55px;
}
</style>
