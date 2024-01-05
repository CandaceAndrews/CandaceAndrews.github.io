<template>
    <div class="projects">
        <h1>Projects</h1>
        <div class="projects-grid">
            <ProjectThumbnail v-for="project in projects" :key="project.id" :project="project" />
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
                {
                    id: 1,
                    projectName: "Final Project Weather App",
                    thumbnailSource: require('@/assets/thumbnails/Final-Project-Weather-App.png'),
                    description: 'Final project for Team 17 at Momentum Learning. My team and I wanted to work on something fun and that would help younger users get into the weather more.'
                },
                {
                    id: 2,
                    projectName: "Dinosaur Fighting Game",
                    thumbnailSource: require('@/assets/thumbnails/Dinosaur-Fighting-Game.png'),
                    description: "Trying to recreate the classic 'Primal Rage' arcade game in Pygame. So far I have Diablo and Sauron."
                },
                {
                    id: 3,
                    projectName: "Social Card Team Project",
                    thumbnailSource: require('@/assets/thumbnails/Social-Card-Team-Project.png'),
                    description: "Team project where backend and frontend collaborated to make a card site for users to create greeting cards, share them on a feed and follow other users."
                },
                {
                    id: 4,
                    projectName: "Library API",
                    thumbnailSource: require('@/assets/thumbnails/Library-API.png'),
                    description: "API application that lets users keep track of books, including important information like title, author, publication date, a genre, and a field that marks it as 'featured'."
                },
                {
                    id: 5,
                    projectName: "Poke-API Project",
                    thumbnailSource: require('@/assets/thumbnails/Poke-API-Project.png'),
                    description: "Pulls from the PokeAPI, Displays: Name, Id, Image, Attacks and Type, Stores the information in a local database."
                },
                {
                    id: 6,
                    projectName: "Task Manager Application",
                    thumbnailSource: require('@/assets/thumbnails/Task-Manager-Application.png'),
                    description: "App that allows the user to keep track of incompleted and completed tasks."
                },
            ],
        };
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