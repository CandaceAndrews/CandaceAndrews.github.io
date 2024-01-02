<template>
  <div id="app">
    <Navbar />
    <router-view />
    <SocialIcons />
  </div>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 52px; */
}
</style>
