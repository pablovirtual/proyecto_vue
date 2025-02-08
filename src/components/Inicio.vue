<script setup>
    import { ref, onMounted } from 'vue'
    import { getEmpleados } from '../services/api.js'

    const empleados = ref([])

    onMounted (
        async () => {
            try {
                const {data} = await getEmpleados()
                empleados.value = data
            } catch (error){
                console.error('Error al obtener los empleados', error)
            }
        })
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
                </tr>
            </thead>
            <tbody>
                    <tr v-for="empleado in empleados" :key="empleado.id">
                        <td>{{ empleado.id }}</td>
                        <td>{{ empleado.nombre }}</td>
                        <td>{{ empleado.correo }}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>