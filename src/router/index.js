import {createRouter, createWebHashHistory} from 'vue-router'
import AboutPage from '../components/AboutPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ContactPage from '../components/ContactPage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
      { path: '/', component: AboutPage },
      { path: '/projects', component: ProjectsPage },
      { path: '/contact', component: ContactPage },
    ]
});

export default router;