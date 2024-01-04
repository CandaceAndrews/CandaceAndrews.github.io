<template>
    <div class="project-thumbnail" @click="navigateToProject">
        <img class="thumbnail-image" :src="thumbnailSrc" :alt="projectName">
        <h3>{{ projectName }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        project: Object,
    },
    methods: {
        navigateToProject() {
            this.$router.push('/projects/${this.project.id}');
        },
    },
};
</script>

<style scoped>
.project-thumbnail {
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px;
}

.thumbnail-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
}

h3 {
    margin-top: 10px;
}
</style>