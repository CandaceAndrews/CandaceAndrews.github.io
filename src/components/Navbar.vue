<template>
  <div class="navbar">
    <router-link to="#about-section" class="nav-link" exact @click="scrollToSection('about-section')">About</router-link>
    <router-link to="#projects-section" class="nav-link" exact @click="scrollToSection('projects-section')">Projects</router-link>
    <router-link to="#contact-section" class="nav-link" exact @click="scrollToSection('contact-section')">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    scrollToSection(sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    },
  }
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: #333333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0; /* Stick to the top of the screen */
  width: 100%;
  z-index: 1000; /* Ensure it appears above other elements */
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover,
.router-link-exact-active {
  background-color: #555;
  color: #fff;
}

/* .router-link-exact-active {
  // Add styling for the active link if needed
  // This class is automatically applied to the active link by Vue Router
} */

</style>