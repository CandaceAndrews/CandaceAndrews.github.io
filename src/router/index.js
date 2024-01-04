import {createRouter, createWebHashHistory} from 'vue-router'
import AboutPage from '../components/AboutPage.vue';
import Projects from '../components/Projects.vue';
import ContactPage from '../components/ContactPage.vue';
import ProjectDetail from '../components/ProjectDetail.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
      { path: '/', component: AboutPage },
      { path: '/projects', component: Projects },
      { path: '/contact', component: ContactPage },
      { path: '/projects/id', component: ProjectDetail, props: true},
    ]
});

export default router;