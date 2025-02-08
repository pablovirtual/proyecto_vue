<!--
* @file Inicio.vue
* @description Componente Vue que muestra una lista de empleados en formato de tabla con opciones para ver, editar y eliminar cada registro
*
* @component Inicio
* @requires vue
* @requires ../services/api.js
* @requires vue-router
*
* @data {Array} empleados - Array reactivo que almacena la lista de empleados obtenida de la API
*
* @method eliminarEmpleados(id) - Maneja la acción de eliminar un empleado, redirigiendo a la ruta /eliminar con el ID como parámetro
* 
* @hook onMounted - Hook del ciclo de vida que se ejecuta al montar el componente. Realiza la petición GET para obtener los empleados
*
* @template
* - Renderiza una tabla con Bootstrap que muestra:
*   - ID del empleado
*   - Nombre del empleado 
*   - Correo del empleado
*   - Botones de acción (Ver, Editar, Eliminar)
* - Incluye manejo de errores para la petición API
* 
* @css
* - Utiliza clases de Bootstrap para estilos
* - container, mt-4, mb-4, table, table-striped
* - btn, btn-info, btn-warning, btn-danger, me-2
-->
<script setup>
// add your script setup here...
import { ref, onMounted } from "vue";
import { getEmpleados } from "../services/api.js";
import { useRouter } from "vue-router";

const router = useRouter();
const empleados = ref([]);

const eliminarEmpleados = (id) => {
  router.push(`/eliminar?id=${id}`);
};

onMounted(async () => {
  try {
    const { data } = await getEmpleados();
    empleados.value = data;
  } catch (error) {
    console.error("Error al obtener los empleados", error);
  }
});
</script>

<template>
  <div class="container mt-4">
    <h1 class="mb-4">Lista de Empleados</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Editar/Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado.id">
          <td>{{ empleado.id }}</td>
          <td>{{ empleado.nombre }}</td>
          <td>{{ empleado.correo }}</td>
          <td>
            <router-link
              :to="{ path: '/leer', query: { id: empleado.id } }"
              class="btn btn-info me-2"
            >
              Ver
            </router-link>
            <router-link
              :to="{ path: '/editar', query: { id: empleado.id } }"
              class="btn btn-warning me-2"
            >
              Editar
            </router-link>
            <button
              @click="eliminarEmpleados(empleado.id)"
              class="btn btn-danger"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
