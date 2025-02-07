// Language: JavaScript
import { createRouter, createWebHistory } from 'vue-router'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'
import App from '../components/App.vue'

const routes = [
  {
    path: '/app',
    name: 'Inicio',
    component: App
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router