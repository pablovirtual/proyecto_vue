// Language: JavaScript
import { createRouter, createWebHistory } from "vue-router";
import Editar from "../components/Editar.vue";
import Inicio from "../components/Inicio.vue";
import Eliminar from "../components/Eliminar.vue";
import Agregar from "../components/Agregar.vue";
import Leer from "../components/Leer.vue";

/**
 * @fileoverview Router configuration for the application
 * @module router/index
 * 
 * @description Defines the routing paths and their associated components for a CRUD application.
 * Contains routes for:
 * - Home page (redirects to /inicio)
 * - Inicio (main/home view)
 * - Editar (edit functionality) 
 * - Agregar (add/create functionality)
 * - Eliminar (delete functionality)
 * - Leer (read/view functionality)
 * 
 * Each route is mapped to its corresponding component and has a unique name identifier.
 */
const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/editar",
    name: "Editar",
    component: Editar,
  },
  {
    path: "/agregar",
    name: "Agregar",
    component: Agregar,
  },
  {
    path: "/eliminar",
    name: "Eliminar",
    component: Eliminar,
  },
  {
    path: "/leer",
    name: "Leer",
    component: Leer,
  },
];

const router = createRouter({
  history: createWebHistory('/proyecto_vue/'),
  routes,
});

export default router;
