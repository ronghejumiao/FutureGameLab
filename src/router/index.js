import Vue from 'vue'
import VueRouter from 'vue-router'

/*import HomeView from '../views/HomeView.vue'*/

Vue.use(VueRouter)

export const routes = [

  {
    path: "/",
    redirect: "/main",
  },

]


export const mobileRoutes = [

  {

    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/mobileMainView')


  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/mobileMainView')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/mobileAboutView.vue')
  },
  {

    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/mobileProjectView.vue')

  },

  {
    path: '/member',
    name: 'member',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/mobileMemberView')


  }





]



export const pcRoutes = [

  {

    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/mainView.vue')


  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/mainView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/aboutView.vue')
  },
  {

    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/projectView')

  },

  {
    path: '/member',
    name: 'member',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/memberView')


  }





]

/*
const router = new VueRouter({
  routes
})
*/



const createRouter = () =>
    new VueRouter({
      scrollBehavior: () => ({ y: 0 }),
      mode: "history",
      routes: routes,
    });


const router = createRouter();


// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}






export default router
