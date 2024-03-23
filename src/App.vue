<template>
  <component :is="layout">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa Bootstrap JS (requiere jQuery y Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default {
  name: 'App',
  data() {
    return {
      layout: 'div',
    }
  }
}
</script>

<style>
/* Estilos para el espacio debajo del navbar */
.section {
  padding-top: 6rem;
  /* Ajusta este valor según el tamaño del navbar */
}

body {
  background: #272727;
}
</style>