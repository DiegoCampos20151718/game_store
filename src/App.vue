<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./components/icons/Banner.png" alt="Logo" style="max-width: 170px;">
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">All Videogames</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="showRegister">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="showLogin">Login</a>
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
            <option selected>All platforms</option>
            <option value="1">Xbox</option>
            <option value="2">Playstation</option>
            <option value="3">Polystation</option>
          </select>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <main class="section">
      <Login v-if="showLoginForm" />
      <Register v-if="showRegisterForm" />
    </main>
  </div>
</template>

<script setup>
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import { ref } from 'vue';

const showLoginForm = ref(false);
const showRegisterForm = ref(false);

const showLogin = () => {
  showLoginForm.value = true;
  showRegisterForm.value = false;
};

const showRegister = () => {
  showLoginForm.value = false;
  showRegisterForm.value = true;
};
</script>

<style>
/* Estilos para el espacio debajo del navbar */
.section {
  padding-top: 6rem;
  /* Ajusta este valor según el tamaño del navbar */
}
</style>

<script>
// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa Bootstrap JS (requiere jQuery y Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min';
</script>
