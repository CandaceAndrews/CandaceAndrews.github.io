<template>
  <div id="app">
    <Navbar />
    <router-view />
    <SocialIcons />
  </div>
  <footer>
    @ 2024 Candace Andrews
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SocialIcons from './components/SocialIcons.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    SocialIcons,
  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34423a;
  background-color: #d3e3d9;
}
</style> -->

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34423a;
  background-color: #d3e3d9;
}

footer {
  color: #69736d;
  margin-top: 25px;
  font-size: small;
}
</style>
