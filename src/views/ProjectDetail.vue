
<template>
  <div class="project-detail-page">
    <div class="project-detail">
      <h1>{{ project.projectName }}</h1>
      <img class="detail-image" :src="project.thumbnailSource" :alt="project.projectName">
      <p>{{ project.description }}</p>
    </div>

    <!-- Project Overview Section -->
    <section class="project-section">
      <h2 class="section-title">📚 Project Overview</h2>
      <p>
          {{ project.projectOverview }}
      </p>
    </section>

    <!-- Challenges and Solutions Section -->
    <section class="project-section">
      <h2 class="section-title">🚧 Challenges and Solutions</h2>
      <p>
          {{ project.challengesSolutions }}
      </p>
    </section>

    <!-- Technologies Used Section -->
    <section>
      <h2 class="section-title">⚙️ Technologies Used</h2>
        <p>
          ➤ {{ project.technologiesUsed }}
        </p>
    </section>

    <!-- Design Decisions Section -->
    <section class="project-section">
      <h2 class="section-title">🧠 Design Decisions</h2>
      <p>
        {{ project.designDecisions }}
      </p>
    </section>

    <!-- Demo Video Section -->
    <div class="video-container">
      <h2 class="section-title">🎥 Demo Video</h2>
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

    <!-- Code Snippets Section -->
    <section class="project-section">
      <h2 class="section-title">💻 Code Snippets</h2>
      <p>
        {{ project.codeExplain }}
      </p>
      <img :src="project.codeSnippet" alt="code from project">
    </section>

    <!-- Project Impact Section -->
      <section class="project-section">
      <h2 class="section-title">🌟 Project Impact</h2>
      <p>
        {{ project.projectImpact }}
      </p>
    </section>

    <!-- Future Plans Section -->
    <section class="project-section">
      <h2 class="section-title">🗺️ Future Plans</h2>
      <p>
        Mention any future plans or enhancements you have in mind for the project.
      </p>
    </section>

    <!-- GitHub Repo Section -->
    <div class="Github-Repo">
      <a :href="getGithubRepo(project.githubRepo)" target="_blank" class="repo-link">{{ project.projectName }} Repo</a>
    </div>
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
    getGithubRepo(repoId) {
      return `https://github.com/CandaceAndrews/${repoId}`;
    },
  },
};
</script>

<style scoped>
.project-detail-page {
  overflow-x: hidden;
}

.project-detail {
max-width: 800px;
margin: 0 auto;
padding: 50px;
}

.section-title {
  font-size: 1.5em;
  color: #b88085;
}

.detail-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.Github-Repo {
  margin-top: 20px;
  padding-top: 10px;
}

.repo-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.repo-link:hover {
  background-color: #218838;
}


.project-section {
  background-color: #e1f1e7;
  /* margin: 50px 100px 0px 100px; */
  margin: 3% 3% 0% 3%;
  padding: 7px 15px 25px 15px;
  white-space: pre-line;
}

</style>
