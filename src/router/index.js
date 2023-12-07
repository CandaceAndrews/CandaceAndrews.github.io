import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ContactPage from '../components/ContactPage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/contact', component: ContactPage },
  ]
});

export default router;