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