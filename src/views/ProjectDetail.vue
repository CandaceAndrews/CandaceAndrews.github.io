<template>
  <div v-if="project" class="project-detail">
    <h2>{{ project.projectName }}</h2>
    <p>{{ project.description }}</p>
  </div>
  <div v-else class="no-data">
    No project data available.
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  created() {
    console.log('Received project prop:', this.project);
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
