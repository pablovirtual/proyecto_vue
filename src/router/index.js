// Language: JavaScript
import { createRouter, createWebHistory } from "vue-router";
import Editar from "../components/Editar.vue";
import Inicio from "../components/Inicio.vue";
import Actualizar from "../components/Actualizar.vue";
import Eliminar from "../components/Eliminar.vue";
import Agregar from "../components/Agregar.vue";
import Listar from "../components/Listar.vue";

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
    path: "/actualizar",
    name: "Actualizar",
    component: Actualizar,
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
    path: "/listar",
    name: "Listar",
    component: Listar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
