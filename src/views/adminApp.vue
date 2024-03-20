<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Control Panel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="showVideogames">Videogames</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="showAddGame">Add Game</a>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="section">
            <VideogamesList v-if="showVideogamesList" />
            <AddGameForm v-if="showAddGameForm" />
        </main>
    </div>
</template>
<script>
import AddGameForm from '@/components/AddGameForm.vue';
import { ref } from 'vue';

const showAddGameForm = ref(false);

const showAddGame = () => {
    showAddGameForm.value = true;
}

// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa Bootstrap JS (requiere jQuery y Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min';
</script>
<style>
.section {
    padding-top: 6rem;
}

body {
    background: #272727;
}
</style>