import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/home.vue';
import Todo from '../pages/todo/todo.vue';
import Photos from '../pages/photos/photos.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
  ]
})

export default router;
