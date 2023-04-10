import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import Details from '../views/event/Details.vue'
import AboutView from '../views/AboutView.vue'
import Edit from '../views/event/Edit.vue'
import Register from '../views/event/Register.vue'
import Layout from '../views/event/Layout.vue'
import NotFound from '../views/event/NotFound.vue'
import NetworkError from '../views/event/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound,
    },
    {
      path: '/NetworkError',
      name: 'networkerror',
      component: NetworkError,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      props: true,
      component: NotFound,
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: Layout,
      children: [
        {
          path: 'edit',
          name: 'event-edit',
          component: Edit,
        },
        {
          path: 'register',
          name: 'event-register',
          component: Register,
        },
        {
          path: '',
          name: 'event-details',
          component: Details,
        }
      ]
    }
  ]
})

export default router
