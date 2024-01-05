<template>
    <div class="project-thumbnail" @click="navigateToProject">
        <img class="thumbnail-image" :src="project.thumbnailSource" :alt="project.projectName">
        <h3>{{ project.projectName }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        project: Object,
    },
    methods: {
        navigateToProject() {
            this.$router.push(`/projects/${this.project.id}`);
        },
    },
};
</script>

<style scoped>
.project-thumbnail {
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
}

.thumbnail-image {
    max-width: 85%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.project-thumbnail:hover {
    transform: scale(1.1);
}

h3 {
    margin-top: 10px;
}
</style>