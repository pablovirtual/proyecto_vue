// Language: JavaScript
import { createRouter, createWebHistory } from 'vue-router'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'
import Inicio from '../components/Inicio.vue'

const routes = [
  {
    path: '/',
    redirect:'/inicio'
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
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