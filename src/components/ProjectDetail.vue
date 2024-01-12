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
    projects: Array,
  },
  created() {
    console.log('Received project prop:', this.project);

    const projectId = parseInt(this.$route.params.id, 10);
    const foundProject = this.projects.find(project => project.id === projectId);
    console.log('Found project:', foundProject);
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
