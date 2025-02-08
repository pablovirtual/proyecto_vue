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