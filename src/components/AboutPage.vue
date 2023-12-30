<template>
    <div class="about-page">
      <div class="profile-section">
        <div class="pic-name-title">
          <img class="profile-picture" src="@/assets/profilePicture.png" alt="Profile picture of me, I have red hair and sitting in a field.">
          <h1 class="my-name">Candace Andrews</h1>
          <p class="subtitle">Software Engineer & Digital Artist</p>
        </div>
        <div class="about-content">
          <p class="bio-title">
            Welcome to my portfolio!
          </p>
          <p class="bio">
            I'm a junior software engineer with a background in digital art and design, 
            bringing a unique blend of technical expertise and artistic insight to the table. 
            My journey into programming began when I started crafting small games using platforms 
            like Ren’py and experimenting with modding in video games. I found that I enjoyed coding 
            and made the decision to transition into a career in software engineering. Dedicated to 
            continuous growth, I have honed my skills in Python, Django, and JavaScript.
          </p>
        </div>
      </div>
      <div class="skills-section">
        <h2 class="skills-header">🛠️ Skills</h2>
        <div class="skill">
          <img src="@/assets/icons/python.png" alt="Python logo icon">
          <img src="@/assets/icons/django.png" alt="Django logo icon">
          <img src="@/assets/icons/photoshop.png" alt="Photoshop logo icon">
          <img src="@/assets/icons/html.png" alt="HTML logo icon">
          <img src="@/assets/icons/css.png" alt="CSS logo icon">
          <img src="@/assets/icons/javascript.png" alt="JavaScript logo icon">
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
.about-page {
  margin: 50px 0px 0px 0px;
}

.pic-name-title {
  background-color: pink;
  padding: 10px;
  width: 100%;
  height: auto;
  border-bottom: 2px solid rgb(202, 150, 160);
}

.profile-picture {
    border-radius: 50%; 
    width: 13%;
    height: auto;
    border: 3px solid rgb(78, 77, 78);
  }

.my-name {
  font-size: 2.2em; 
  margin: 0px 10px 0px 2px;
}
  
.subtitle {
  font-size: 1.2em;
  color: #555;
  margin: 2px 0px 0px 0px;
}

.bio {
  margin: 0px 100px 0px 100px;
  line-height: 1.5;
}

.about-content {
  margin: 35px 0px 10px 0px;
}
  
.skills-section {
  align-items: center;
  margin-bottom: 10px;
}

.skills-header {
  margin: 30px 0px 15px 0px;
}
.skill img {
  width: 50px;
  height: 50px;
  margin-right:8px;
}
  </style>
  