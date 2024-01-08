import {createRouter, createWebHashHistory} from 'vue-router'
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import ProjectDetail from '../components/ProjectDetail.vue';
import Contact from '../components/Contact.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
      { path: '/', component: About },
      { path: '/projects', component: Projects },
      { path: '/projects/:id', component: ProjectDetail},
      { path: '/contact', component: Contact },
    ]
});

export default router;