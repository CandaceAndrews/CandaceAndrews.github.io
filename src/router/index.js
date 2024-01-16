import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import Contact from '../views/Contact.vue';
import projects from '../data/ProjectData.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: About },
    { path: '/projects', component: Projects },
    { path: '/projects/:id', name: 'projectDetail', component: ProjectDetail, props: true },
    { path: '/contact', component: Contact },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'projectDetail' && to.params.id) {
    const project = projects.find(p => p.id === parseInt(to.params.id));
    if (project) {
      to.params.project = project;
    }
  }
  next();
});

export default router;
