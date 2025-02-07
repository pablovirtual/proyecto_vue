<script setup>
// add your script setup here...


</script>

<template>
  <div>
  <!-- add your template here... -->
  <nav>
        <router-link to="/inicio">Inicio</router-link>
        <router-link to="/crear">Crear</router-link>
        <router-link to="/editar">Editar</router-link>
        <router-link to="/listar">Listar</router-link>
        </nav>
        <router-view></router-view>
  
  </div>

  
 
</template>

<style scoped>
/* add your styles here... */
nav {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

router-link {
  cursor: pointer;
  text-decoration: none;
  color: #2c3e50;
}

router-link:hover {
  color: #42b983;
}
</style>
