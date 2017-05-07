import Vue from 'vue';
import Router from 'vue-router';
import PageOne from '@/pages/PageOne';
import PageTwo from '@/pages/PageTwo';
import Home from '@/App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/PageOne',
      name: 'page-one',
      component: PageOne,
    },
    {
      path: '/PageTwo',
      name: 'page-two',
      component: PageTwo,
    },
  ],
});
