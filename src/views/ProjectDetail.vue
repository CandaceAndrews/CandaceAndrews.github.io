
<template>
  <div class="project-detail">
    <h1>{{ project.projectName }}</h1>
    <img class="detail-image" :src="project.thumbnailSource" :alt="project.projectName">
    <p>{{ project.description }}</p>
  </div>

  <!-- Project Overview Section -->
  <section class="project-section">
    <h2>Project Overview</h2>
    <p>
        {{ project.projectOverview }}
    </p>
  </section>

  <!-- Challenges and Solutions Section -->
  <section class="project-section">
    <h2>Challenges and Solutions</h2>
    <p>
        {{ project.challengesSolutions }}
    </p>
  </section>

  <!-- Technologies Used Section -->
  <section>
    <h2>Technologies Used</h2>
    <ul>
      <li>
        {{ project.technologiesUsed }}
      </li>
    </ul>
  </section>

  <!-- Design Decisions Section -->
  <section class="project-section">
    <h2>Design Decisions</h2>
    <p>
      Discuss the design decisions you made for the project. Explain your thought process behind the user interface, user experience, color scheme, etc.
    </p>
  </section>

  <!-- Demo Video Section -->
  <div class="video-container">
    <h2>Demo Video</h2>
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
    <h2>Code Snippets</h2>
    <pre>
      <code>Code snippets with explanations</code>
    </pre>
  </section>

  <!-- Project Impact Section -->
    <section class="project-section">
    <h2>Project Impact</h2>
    <p>
      Share any impact the project has had, including user feedback, download statistics, or recognition received.
    </p>
  </section>

  <!-- Future Plans Section -->
  <section class="project-section">
    <h2>Future Plans</h2>
    <p>
      Mention any future plans or enhancements you have in mind for the project.
    </p>
  </section>

  <!-- GitHub Repo Section -->
  <div class="Github-Repo">
    <a :href="getGithubRepo(project.githubRepo)" target="_blank" class="repo-link">{{ project.projectName }} Repo</a>
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
.project-detail {
max-width: 800px;
margin: 0 auto;
padding: 50px;
}

.detail-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.Github-Repo {
  margin-top: 20px;
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
  margin-top: 50px;
  background-color: #e1f1e7;
  margin: 50px 100px 0px 100px;
  padding: 7px 0px 25px 0px;
}

</style>
