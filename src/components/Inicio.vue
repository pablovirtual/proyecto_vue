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
