<template>
    <div class="projects">
      <h1>📊 Projects</h1>
      <div class="projects-grid">
        <ProjectThumbnail
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProjectThumbnail from '../components/ProjectThumbnail.vue';
  import projects from '../data/ProjectData.js';
  
  export default {
    components: {
      ProjectThumbnail,
    },
    data() {
      return {
        projects,
      };
    },
    methods: {
      navigateToProject(project) {
        this.$router.push(`/projects/${project.id}`);
      },
    },
  };
  </script>

<style scoped>
.projects {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>