import axios from 'axios';

/**
 * 🌐 Cliente Axios configurado para realizar peticiones HTTP
 * @const {import('axios').AxiosInstance} apiClient
 * @description Cliente Axios personalizado para comunicarse con el backend de empleados
 * @property {string} baseURL - URL base del servidor API (http://localhost/db_empleados/)
 * @property {Object} headers - Cabeceras predeterminadas para las peticiones
 * @property {string} headers.Content-Type - Tipo de contenido establecido como application/json
 * 🔧 Configurado para realizar peticiones al servidor local
 * 📝 Todas las peticiones se enviarán automáticamente en formato JSON
 */
const apiClient = axios.create({
  // Usa solo la carpeta donde se encuentra index.php
  baseURL: "http://localhost/db_empleados/",
  headers: {
    "Content-Type": "application/json",
  },
});
// Función para obtener los empleados desde el endpoint PHP (index.php)
export function getEmpleados() {
  return apiClient.get("index.php");
}
// Función para agregar un empleado al endpoint PHP (index.php)
export function addEmpleado(data) {
  //Se emvoa la solicitud POST al endpoint con el  query parameter 'insertar"
  return apiClient.post("index.php?insertar=true", data);
}
//Funcion para obtener un empleado por su id
export function getEmpleado(id) {
  return apiClient.get(`index.php?consultar=${id}`);
}
// Funcion para eliminar un empleado por su id
export function deleteEmpleado(id) {
  return apiClient.delete(`index.php?borrar=${id}`);
}
//Funcion para actualizar la informacion de un empleado
export function updateEmpleado(id, data) {
  return apiClient.put(`index.php?actualizar=${id}`, data);
}
// Llamada para visualizar en la consola los datos recibidos desde el endpoint
getEmpleados()
  .then((response) => {
    console.log("Respuesta de index.php:", response.data);
  })
  .catch((error) => {
    console.error("Error al obtener empleados:", error);
  });