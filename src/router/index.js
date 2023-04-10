import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import Details from '../views/event/Details.vue'
import AboutView from '../views/AboutView.vue'
import Edit from '../views/event/Edit.vue'
import Register from '../views/event/Register.vue'

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
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: Details,
    },
    {
      path: '/event/:id/edit',
      name: 'event-edit',
      props: true,
      component: Edit,
    },
    {
      path: '/event/:id/register',
      name: 'event-register',
      props: true,
      component: Register,
    }
  ]
})

export default router
