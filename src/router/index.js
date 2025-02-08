// Language: JavaScript
import { createRouter, createWebHistory } from 'vue-router'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'
import Inicio from '../components/Inicio.vue'
import actualizar from '../components/Actualizar.vue'
import Eliminar from '../components/Eliminar.vue'
import Agregar from '../components/Agregar.vue'


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
  },
  {
    path:'/actualizar',
    name:'Actualizar',
    component:actualizar
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: Crear
  },
  {
    path:'/eliminar',
    name:'Eliminar',
    component:Eliminar
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router