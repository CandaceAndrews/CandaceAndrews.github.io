import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: About },
    { path: '/projects', component: Projects },
    { path: '/projects/:id', component: ProjectDetail },
    { path: '/contact', component: Contact },
  ],
});

export default router;
