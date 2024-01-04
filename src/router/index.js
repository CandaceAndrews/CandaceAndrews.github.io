import {createRouter, createWebHashHistory} from 'vue-router'
import AboutPage from '../components/AboutPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ContactPage from '../components/ContactPage.vue';
import Projects from '../components/Projects.vue';
import ProjectDetail from '../components/ProjectDetail.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
      { path: '/', component: AboutPage },
      { path: '/projects', component: ProjectsPage },
      { path: '/contact', component: ContactPage },
      { path: '/projects/id', component: ProjectDetail, props: true},
    ]
});

export default router;