<!--
  @component Eliminar.vue
  @description Componente para eliminar un empleado del sistema
  
  Este componente permite visualizar la información de un empleado específico
  y confirmar su eliminación del sistema. Incluye:
  - Recuperación automática de datos del empleado usando el ID de la URL
  - Confirmación doble antes de eliminar (modal y botón)
  - Manejo de errores y redirección
  - Interfaz con detalles del empleado a eliminar
  
  @vue-data {Object} empleado - Almacena los datos del empleado a eliminar
  
  @vue-event confirmarEliminacion - Maneja el proceso de eliminación del empleado
  
  @requires vue-router
  @requires ../services/api.js - Para las operaciones getEmpleado y deleteEmpleado
  
  @routing
  - Requiere un parámetro 'id' en la query string
  - Redirecciona a '/inicio' en caso de error o cancelación
-->
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getEmpleado, deleteEmpleado } from "../services/api.js";

const route = useRoute();
const router = useRouter();
const empleado = ref(null);

onMounted(async () => {
  const id = route.query.id;
  if (id) {
    try {
      const { data } = await getEmpleado(id);
      if (Array.isArray(data)) {
        const found = data.find(emp => emp.id == id);
        if (found) {
          empleado.value = found;
        } else {
          console.error("Empleado no encontrado");
          router.push("/inicio");
        }
      } else if (data && data.id) {
        empleado.value = data;
      } else {
        console.error("Empleado no encontrado");
        router.push("/inicio");
      }
    } catch (error) {
      console.error("Error al obtener el empleado", error);
      router.push("/inicio");
    }
  } else {
    console.error("ID no proporcionado");
    router.push("/inicio");
  }
});

const confirmarEliminacion = async () => {
  if (confirm("¿Estás seguro de eliminar este empleado?")) {
    try {
      await deleteEmpleado(empleado.value.id);
      alert("Empleado eliminado exitosamente");
      router.push("/inicio");
    } catch (error) {
      alert("Error al eliminar el empleado");
      console.error(error);
    }
  }
};
</script>

<template>
  <div class="container mt-4">
    <h1 class="mb-4">Eliminar Empleado</h1>
    <div v-if="empleado" class="card">
      <div class="card-body">
        <h5 class="card-title">
          ¿Está seguro que desea eliminar este empleado?
        </h5>
        <p><strong>Nombre:</strong> {{ empleado.nombre }}</p>
        <p><strong>Correo:</strong> {{ empleado.correo }}</p>
        <button @click="confirmarEliminacion" class="btn btn-danger me-2">
          Confirmar Eliminación
        </button>
        <router-link to="/inicio" class="btn btn-secondary">
          Cancelar
        </router-link>
      </div>
    </div>
  </div>
</template>