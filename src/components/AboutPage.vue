<template>
    <div class="about-page">
      <div class="profile-section">
        <div class="pic-name-title">
          <img class="profile-picture" src="@/assets/profilePicture.png" alt="Profile picture of me, I have red hair and sitting in a field.">
          <h1 class="my-name">Candace Andrews</h1>
          <p class="subtitle">Software Engineer & Digital Artist</p>
        </div>
        <div class="about-content">
          <p class="welcome">
            Welcome to my portfolio!
          </p>
          <p class="about-me">
            I'm a junior software engineer with a background in digital art and design, 
            bringing a unique blend of technical expertise and artistic insight to the table. 
          </p>
          <div class="bio">
          <div class="bio-section">
            <h2 class="bio-title">🚀 Journey into Programming</h2>
            <p>
              My journey into programming began when I started crafting small games using platforms 
            like Ren’py and experimenting with modding in video games. I found that I enjoyed coding 
            and made the decision to transition into a career in software engineering.
            </p>
          </div>
          <div class="bio-section">
            <h2 class="bio-title">💡 Technical Expertise</h2>
            <ul class="skills-list">
              <li>- Python</li>
              <li>- Django</li>
              <li>- JavaScript</li>
            </ul>
          </div>
          <div class="bio-section">
            <h2 class="bio-title">🎨 Artistic Insight</h2>
            <p>
              With a background in digital art and design, I infuse a unique artistic perspective into my projects. 
              This enables me to create not just functional applications but captivating and visually engaging experiences that leave a lasting impression.
            </p>
          </div>
          <div class="bio-section">
            <h2 class="bio-title">🔎 Roles Currently Seeking</h2>
            <p>
              I would prefer a backend focused role that uses Django or any role involving Python.
              Would also love any role that would allow me to explore my creative side!
            </p>
          </div>
          <div class="bio-section">
            <h2 class="bio-title">🌐 Philosophy</h2>
            <blockquote>
              I believe in the power of technology to inspire, entertain, and solve real-world problems. 
              Every line of code and stroke of design is a step towards creating a meaningful impact in the digital landscape.
            </blockquote>
          </div>
        </div>
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
  /* background-color: pink; */
  background-color: #a3c1b0;
  padding: 10px;
  width: 100%;
  height: auto;
  /* border-bottom: 2px solid rgb(202, 150, 160); */
  border-bottom:2px solid rgb(87, 105, 97);
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

.bio-section {
  margin-bottom: 20px;
  background-color: #e1f1e7;
  padding: 0px 15px 10px 15px;
}

.bio-title {
  font-size: 1.5em;
  color: #ca969a;
  color: #b88085;
  margin-bottom: 7px;
  padding-top: 20px;
}

.skills-list {
  list-style-type: none;
  padding-left: 0;
}

.skills-list li {
  margin-bottom: 8px;
}

blockquote {
  font-style: italic;
  border-left: 4px solid #ca969a; /* Pink border for quotes */
  padding-left: 15px;
  margin: 10px 0;
  background-color: #e2e9e6;
}
.about-content {
  margin: 35px 0px 10px 0px;
}
  
.skills-section {
  align-items: center;
  margin-bottom: 10px;
}

.about-me {
  margin: 0px 100px 0px 100px;

}
.skills-header {
  margin: 40px 0px 15px 0px;
}
.skill img {
  width: 50px;
  height: 50px;
  margin-right:8px;
}

p {
  margin-top: 0px;
}

</style>
