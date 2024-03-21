<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <RouterLink to="/" class="navbar/brand">
          <img src="./components/icons/Banner.png" alt="Logo" class="nav-link" style="max-width: 170px;"
            @click="showRouter">
        </RouterLink>
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/catalog" class="nav-link" @click="showRouter">All videogames</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/register" class="nav-link" @click="showRouter">Register</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link" @click="showRouter">Login</RouterLink>
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
          <RouterLink to="/search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </RouterLink>
        </form>
        <RouterLink :to="{ path: '/admin' }">
          <img src="./components/icons/LogoU.png" height="40px" alt="Logo oficial de FiesTop" title="Perfil de usuario"
            @click="showRouter">
        </RouterLink>
      </div>
    </nav>
    <main class="section">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
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