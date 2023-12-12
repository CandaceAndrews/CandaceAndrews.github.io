<template>
    <div class="about-page-container">
      <div>
        <img src="@/assets/profilePicture.png" alt="Profile picture of me, I have red hair and sitting in a field.">
      </div>
      <div class="name-and-title">
        <h1 class="my-name">Candace Andrews</h1>
        <p class="subtitle">Software Engineer & Digital Artist</p>
      </div>
      <div class="about-content">
        <p class="bio-title">
          Welcome to my portfolio!
        </p>
        <p class="bio">
          My name is Candace Andrews and I'm a junior software engineer with a
          background in digital art and design. I am able to offer a distinctive
          combination of both technical expertise and artistic insight. My journey
          into programming was sparked by a passion for video games, and I have since
          honed my skills in Python, Django, and JavaScript.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
  .my-name {
    font-size: 2.5em; 
    margin-bottom: 2px;
  }
  
  .subtitle {
    font-size: 1.2em;
    color: #555;
    margin-top: 2px;
  }
  
  .about-page-container img {
    border-radius: 50%; 
  }
  </style>
  