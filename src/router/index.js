import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/Home')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '@/views/shop/Shop')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "Register" */ '@/views/register/Register'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      if (isLogin === 'true') {
        next({ name: 'Home' });
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '@/views/login/login'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      console.log(typeof isLogin);
      if (isLogin === 'true') {
        next({ name: 'Home' });
      } else {
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
