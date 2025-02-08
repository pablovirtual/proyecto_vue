<!--
🔄 Componente de Edición de Empleado

📝 Descripción:
Este componente permite editar la información de un empleado existente en el sistema.
Muestra un formulario con campos para modificar el nombre y correo del empleado.

🔧 Propiedades Reactivas:
- empleado: Objeto que contiene id, nombre y correo del empleado a editar

🎯 Funcionalidades:
- Carga automática de datos del empleado al montar el componente
- Validación de campos requeridos
- Actualización de información en la base de datos
- Redirección automática después de la actualización

📡 APIs Utilizadas:
- getEmpleado: Obtiene los datos del empleado por ID
- updateEmpleado: Actualiza los datos del empleado en la BD

🚦 Flujo de Trabajo:
1. Obtiene el ID del empleado desde la URL
2. Carga los datos del empleado al iniciar
3. Permite edición de campos
4. Envía actualización al servidor
5. Redirecciona a la página de inicio

⚠️ Manejo de Errores:
- Validación de ID existente
- Manejo de errores en la carga de datos
- Manejo de errores en la actualización
- Alertas de éxito/error

🔗 Rutas:
- Redirección a "/inicio" después de actualizar
- Botón de retorno a inicio

🎨 Estilos:
- Utiliza clases de Bootstrap para el diseño
- Formulario responsivo
- Botones estilizados
-->
<script setup>
  import { ref, onMounted  } from "vue";
  import { useRoute,useRouter } from "vue-router";
  import { getEmpleado, updateEmpleado } from "../services/api.js";

  //obtenesmos el id del empleado desde la query string
  const route = useRoute();
  const router = useRouter();

  //se crea una variable reactiva para almacenar los datos del empleado
  const empleado = ref({
    id:"",
    nombre:"",
    correo:""
  });

  onMounted(async () =>{
    const id = route.query.id;
    if(id){
      try{
        //se asume que la respuesta retorna un array
        const {data} = await getEmpleado(id);
        if(data && data.length>0){
          empleado.value = data[0];
        } else {
          console.error("Empleado no encontrado");
        } 
        }catch (error){
          console.error("Error al obtener el empleado",error);
      }
    } else {
      console.log("No se especifico el id del empleado");
    }
  })

  //Funcion para enviar el formulario y actualizar el empleado en la BD
const submitForm = async (e) => {
  e.preventDefault();
  try{
    const response = await updateEmpleado(empleado.value);
    alert("Empleado actualizado",response.data);
    //Redirige a la vista de inicio o lista,segun el flujo
    router.push("/inicio");
  } catch (error){
   alert("Error al actualizar el empleado", error);
  }
};
</script>

<template>
  <div >
      <div class="container mt-4">
        <h1 class="mb-4">Editar Empleado</h1>
        <form @submit="submitForm">
          <!--Campo oculto para almacenar el id-->
          <input type="hidden" v-model="empleado.id"/>
          <!--Campo para el nombre-->
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input 
            type="text"  
            id="nombre"
            v-model="empleado.nombre"
            class="form-control"
            required
            />
            <!--Campo para correo-->
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
          </div>
        </form>
        <router-link to="/inicio" class="btn btn-secondary mt-3">Volver al inicio</router-link>
      </div>
  </div>
</template>