<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./components/icons/Banner.png" alt="Logo" @click="showHome" class="nav-link"
            style="max-width: 170px;">
        </a>
        <ul class="navbar-nav">
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
        <a class="navbar-brand" href="#" @click="showAdminLog">
          <img src="./components/icons/LogoU.png" height="40px" alt="Logo oficial de FiesTop" title="Perfil de usuario">
        </a>
      </div>
    </nav>
    <main class="section">
      <Home v-if="showHomeForm" />
      <Login v-if="showLoginForm" />
      <Register v-if="showRegisterForm" />
      <AdminLog v-if="showAdminLogForm"/>
    </main>
  </div>
</template>

<script setup>
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';
import AdminLog from './components/AdminLog.vue';
import { ref } from 'vue';

const showLoginForm = ref(false);
const showRegisterForm = ref(false);
const showHomeForm = ref(true);
const showAdminLogForm = ref(false);
 // Cambiado a true para que se muestre Home por defecto

const showLogin = () => {
  showLoginForm.value = true;
  showRegisterForm.value = false;
  showHomeForm.value = false;
  showAdminLogForm.value = false;
};

const showRegister = () => {
  showLoginForm.value = false;
  showRegisterForm.value = true;
  showHomeForm.value = false;
  showAdminLogForm.value = false;
};

const showHome = () => {
  showLoginForm.value = false;
  showRegisterForm.value = false;
  showHomeForm.value = true;
  showAdminLogForm.value = false;
};

const showAdminLog = () => {
  showLoginForm.value = false;
  showRegisterForm.value = false;
  showHomeForm.value = false;
  showAdminLogForm.value = true;
};
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

<script>
// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa Bootstrap JS (requiere jQuery y Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min';
</script>