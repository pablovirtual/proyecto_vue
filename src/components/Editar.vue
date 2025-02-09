<!--
/**
 * @component Editar
 * @description Componente para editar la información de un empleado existente.
 * 
 * @features
 * - Carga los datos del empleado seleccionado usando su ID
 * - Permite editar nombre y correo del empleado
 * - Validación de campos requeridos
 * - Navegación de retorno a la página de inicio
 * 
 * @props
 * - Recibe el ID del empleado a través de route query params
 * 
 * @methods
 * - submitForm: Maneja el envío del formulario y actualiza los datos del empleado
 * 
 * @dependencies
 * - Vue Router para navegación y obtención de parámetros
 * - api.js para las operaciones CRUD con el backend
 * 
 * @emits
 * - No emite eventos
 * 
 * @example
 * <router-link :to="{ path: '/editar', query: { id: empleado.id }}">
 *   Editar Empleado
 * </router-link>
 */
-->
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getEmpleado, updateEmpleado } from "../services/api.js";

const route = useRoute();
const router = useRouter();

const empleado = ref({
  id: "",
  nombre: "",
  correo: ""
});

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
      console.error("Error al obtener el empleado:", error);
      router.push("/inicio");
    }
  } else {
    console.error("ID no proporcionado");
    router.push("/inicio");
  }
});

const submitForm = async (e) => {
  e.preventDefault();
  try {
    const response = await updateEmpleado(empleado.value);
    alert(`Empleado actualizado exitosamente`);
    router.push("/inicio");
  } catch (error) {
    alert(`Error al actualizar el empleado: ${error.message}`);
  }
};
</script>

<template>
  <div>
    <div class="container mt-4">
      <h1 class="mb-4">Editar Empleado</h1>
      <form @submit="submitForm">
        <!-- Campo oculto para almacenar el id -->
        <input type="hidden" v-model="empleado.id" />
        <!-- Campo para el nombre -->
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input 
            type="text"  
            id="nombre"
            v-model="empleado.nombre"
            class="form-control"
            required
          />
        </div>
        <!-- Campo para el correo -->
        <div class="mb-3">
          <label for="correo" class="form-label">Correo</label>
          <input 
            type="email"
            id="correo"
            v-model="empleado.correo"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Actualizar</button>
      </form>
      <router-link to="/inicio" class="btn btn-secondary mt-3">
        Volver al inicio
      </router-link>
    </div>
  </div>
</template>