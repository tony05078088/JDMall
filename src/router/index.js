import Home from '@/views/home/Home';
import Login from '@/views/login/login';
import Register from '@/views/register/Register';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      console.log(typeof isLogin);
      if (isLogin === 'true') {
        console.log('a');
        next({ name: 'Home' });
      } else {
        console.log('b');
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      console.log(typeof isLogin);
      if (isLogin === 'true') {
        console.log('a');
        next({ name: 'Home' });
      } else {
        console.log('b');
        next();
      }
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = name === 'Login' || name === 'Register';
  isLoginOrRegister || isLogin === 'true' ? next() : next({ name: 'Login' });
});

export default router;
