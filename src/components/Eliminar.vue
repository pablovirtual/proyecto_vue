<!--
🗑️ Componente de Eliminación de Empleados

📝 Descripción:
Este componente permite eliminar un empleado del sistema, mostrando una vista de confirmación
con los detalles del empleado antes de proceder con la eliminación.

🔧 Propiedades:
- No recibe propiedades directamente

📦 Importaciones:
- ref, onMounted: De Vue.js para manejo de estado y ciclo de vida
- useRoute, useRouter: De Vue Router para navegación
- getEmpleado, deleteEmpleado: Servicios API para operaciones CRUD

🔄 Estado:
- empleado: Almacena los datos del empleado a eliminar

📋 Funcionalidades:
- Carga inicial: Obtiene los datos del empleado según el ID en la URL
- confirmarEliminacion: Maneja el proceso de eliminación con confirmación

⚡ Eventos:
- click: En el botón de confirmación para ejecutar la eliminación

🎯 Flujo de uso:
1. Component carga y obtiene datos del empleado
2. Muestra información del empleado
3. Usuario confirma eliminación
4. Sistema elimina y redirecciona a inicio

⚠️ Manejo de errores:
- Muestra alertas en caso de error en la eliminación
- Maneja errores en la carga inicial de datos

🔗 Rutas:
- Redirección a "/Inicio" después de eliminación exitosa
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
      if (data && data.length > 0) {
        empleado.value = data[0];
      }
    } catch (error) {
      console.error("Error al obtener el empleado", error);
    }
  }
});

const confirmarEliminacion = async () => {
  if (confirm("¿Estas seguro de eliminar este empleado?")) {
    try {
      await deleteEmpleado(empleado.value.id);
      alert("Empleado eliminado existosamente");
      router.push("/Inicio");
    } catch (error) {
      alert("Error al eliminar el empleado");
      console.error(error);
    }
  }
};
</script>

<template>
  <div class="container mt-4">
    <h1 class="mb-4">Eliminar Empleados</h1>
    <div v-if="empleado" class="card">
      <div class="card-body">
        <h5 class="card-tittle">
          ¿Esta seguro que desea eliminar este empleado?
        </h5>
        <p><strong>Nombre</strong>{{ empleado.nombre }}</p>
        <p><strong>Correo</strong>{{ empleado.correo }}</p>
        <button @click="confirmarEliminacion" class="btn btn-danger me-2">
          Confirmar Eliminacion
        </button>
        <router-link to="/Inicio" class="btn btn-secondary">
          Cancelar
        </router-link>
      </div>
    </div>
  </div>
</template>
