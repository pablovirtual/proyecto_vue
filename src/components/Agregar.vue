<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import {addEmpleado } from "../services/api.js";

    const router = useRouter();

    // creamos las variables reactivas
    const empleado = ref({
        nombre: "",
        correo: ""
    });

    // creamos la funcion para agregar un empleado
    const submitForm = async (e) => {
        // evitamos que el formulario recargue la pagina
        e.preventDefault();

        try {
            const response = await addEmpleado(empleado.value);
            console.log('Empleado agregado:',response.data);
            //redirigui al usuario a la vista de inicio
            router.push("/inicio");
            // limpiamos el formulario
            empleado.value.nombre="";
            empleado.value.correo="";       
        } catch (error) {
            console.error("Error al agregar el empleado", error);
        }
    }
</script>

<template>
    <div class="container mt-4">
        <h1 class="mb-4">Agregar Empleado</h1>
        <form @submit="submitForm" novalidate>
            <!--campo para el nombre-->
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" id="nombre" v-model="empleado.nombre" class="form-control" required/>
            </div>
            <!--campo para el correo-->
            <div class="mb-3">
                <label for="correo" class="form-label">Correo</label>
                <input type="email"
                id="correo"
                v-model="empleado.correo"
                class="form-control"
                required/>
            </div>
            <!--boton para enviar el formulario-->
            <button type="submit" class="btn btn-primary">Agregar</button>
            <button type="reset" class="btn btn-danger">Limpiar</button>
        </form>

    </div>
</template>