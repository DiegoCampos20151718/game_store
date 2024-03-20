<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Control Panel</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="">Videogames</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/admin/add-game">Add game</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="section">
            <RouterView />
        </main>
    </div>
</template>
<script>
// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa Bootstrap JS (requiere jQuery y Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterLink, RouterView } from 'vue-router';
</script>
<style>
.section {
    padding-top: 6rem;
}

body {
    background: #272727;
}
</style>