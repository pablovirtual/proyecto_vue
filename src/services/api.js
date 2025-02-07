import axios from 'axios'

const apiClient = axios.create({
  // Usa solo la carpeta donde se encuentra index.php
  baseURL: 'http://localhost/db_empleados/',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Función para obtener los empleados desde el endpoint PHP (index.php)
export function getEmpleados() {
  return apiClient.get('index.php')
}

// Llamada para visualizar en la consola los datos recibidos desde el endpoint
getEmpleados()
  .then(response => {
    console.log('Respuesta de index.php:', response.data)
  })
  .catch(error => {
    console.error('Error al obtener empleados:', error)
  })