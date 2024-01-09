import Vue from 'vue';
import Router from 'vue-router';

import IndexPage from '@/pages/IndexPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
    },
    {
      path: '/home',
      name: 'home',
      component: IndexPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectPage,
    },
    {
      path: '/blog-details',
      name: 'blog-details',
      component: BlogDetailsPage,
    },
    {
      path: '/project-details',
      name: 'project-details',
      component: ProjectDetailsPage,
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/*',
      redirect: { name: 'NotFound' },
    },
  ],
});
