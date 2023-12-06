<template>
    <div class="navbar">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
.navbar {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s; /* Add color transition */

  &:hover {
    background-color: #555;
    color: #fff; /* Change text color on hover */
  }
}
</style>