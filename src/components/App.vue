/**
 * @component App
 * @description Componente principal que maneja la navegación de la aplicación.
 *             Proporciona una barra de navegación con enlaces a diferentes rutas
 *             utilizando router-link de Vue Router.
 * 
 * @vue-template
 * - nav: Barra de navegación con enlaces estilizados usando Bootstrap
 * - router-view: Contenedor donde se renderizan los componentes según la ruta actual
 * 
 * @vue-style
 * - Implementa diseño responsivo con Flexbox
 * - Usa clases de Bootstrap para los botones
 * - Incluye animaciones y efectos de hover en los botones
 * - Aplica sombras y transformaciones para efectos visuales
 * 
 * @routing
 * - /inicio: Ruta para la página principal
 * - /agregar: Ruta para la página de agregar elementos
 * 
 * @styling
 * - Utiliza Bootstrap para estilos base de botones
 * - Personaliza la apariencia con transiciones y efectos de sombra
 * - Implementa efectos interactivos en hover y active states
 */
<template>
  <div>
    <nav>
      <router-link to="/inicio" class="btn btn-primary me-2">Inicio</router-link>
      <router-link to="/agregar" class="btn btn-success me-2">Agregar</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  background: #fff;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

/* Usar las clases de Bootstrap en lugar de router-link */
.btn {
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.15);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>