<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getEmpleado } from "../services/api.js";

const route = useRoute();
const empleado = ref(null);

onMounted(async () => {
  const id = route.query.id;
  if (id) {
    try {
      const { data } = await getEmpleado(id);
      if (data && data.length > 0) {
        empleado.value = data[0];
      } else {
        console.error("Empleado no encontrado");
      }
    } catch (error) {
      console.error("Error al obtener empleado:", error);
    }
  }
});
</script>

<template>
  <div class="container mt-4">
    <h1 class="mb-4">Detalles de empleado</h1>
    <div v-if="empleado" class="card">
      <div class="card-body">
        <h5 class="card-tittle">Informacion del empleado</h5>
        <div class="mb-3">
          <strong>ID</strong>
          <span>{{ empleado.id }}</span>
        </div>
        <div class="mb-3">
          <strong>Nombre</strong>
          <span>{{ empleado.nombre }}</span>
        </div>
        <div class="mb-3">
          <strong>Correo</strong>
          <span>{{ empleado.correo }}</span>
        </div>
        <router-link to="/inicio" class="btn btn-primary"
          >Volver al inicio</router-link
        >
      </div>
    </div>
  </div>
</template>
