/**
 * @fileoverview Componente para visualizar los detalles de un empleado específico 👀
 * 
 * @component Leer
 * @description Este componente permite ver la información detallada de un empleado
 * seleccionado, incluyendo su ID, nombre y correo electrónico 📝
 *
 * @dependencies {vue} ref, onMounted - Composables de Vue para manejo de estado y ciclo de vida
 * @dependencies {vue-router} useRoute, useRouter - Hooks para manejo de rutas
 * @dependencies {api.js} getEmpleado - Servicio para obtener datos del empleado
 *
 * @state {Object|null} empleado - Almacena los datos del empleado consultado
 *
 * @mounted
 * - Obtiene el ID del empleado desde los parámetros de la URL 🔍
 * - Realiza una petición a la API para obtener los datos del empleado
 * - Actualiza el estado con la información recibida
 * 
 * @ui
 * - Muestra una tarjeta con la información del empleado 💳
 * - Incluye campos para ID, nombre y correo
 * - Proporciona un botón para volver a la página de inicio
 * 
 * @error
 * - Maneja casos donde el empleado no es encontrado
 * - Registra errores en consola durante la obtención de datos ⚠️
 */

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
