<template>
    <div class="projects">
        <h1>Projects</h1>
        <div class="project-grid">
            <ProjectThumbnail v-for="project in projects" key="project.id" :project="project" />
        </div>
    </div>
</template>

<script>
import ProjectThumbnail from '../components/ProjectThumbnail.vue';

export default {
    components: {
        ProjectThumbnail,
    },
    data() {
        return {
            projects: [
                // Array of project data, each item should have an 'id', 'projectName', 'thumbnailSrc', etc.
            ],
        };
    },
};
</script>

<style scoped>
.projects {
  max-width: 800px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>