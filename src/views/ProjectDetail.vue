<template>
  <div class="project-detail">
    <h2>{{ project.projectName }}</h2>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
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
