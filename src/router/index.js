// Language: JavaScript
import { createRouter, createWebHistory } from "vue-router";
import Editar from "../components/Editar.vue";
import Inicio from "../components/Inicio.vue";
import Eliminar from "../components/Eliminar.vue";
import Agregar from "../components/Agregar.vue";
import Leer from "../components/Leer.vue";

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
  history: createWebHistory(),
  routes,
});

export default router;
