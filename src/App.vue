<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">All Videogames</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <select class="form-select" aria-label="Default select example">
            <option selected>All categories</option>
            <option value="1">Shooter</option>
            <option value="2">Adventure</option>
            <option value="3">RPG</option>
          </select>
          <select class="form-select" aria-label="Default select example">
            <option selected>All plataforms</option>
            <option value="1">Xbox</option>
            <option value="2">Playstation</option>
            <option value="3">Polystation</option>
          </select>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <main class="section">
      <From />
    </main>
  </div>
</template>

<script setup>
import From from './components/From.vue'
</script>

<style>
/* Estilos para el espacio debajo del navbar */
.section {
  padding-top: 4rem;
  /* Ajusta este valor según el tamaño del navbar */
}
</style>

<script>
// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa Bootstrap JS (requiere jQuery y Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min';
</script>./components/Form.vue./components/From.vue
