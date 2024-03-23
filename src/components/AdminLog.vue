<template>
  <default-layout>
    <div class="container" style="width: 1200px;">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-6">
          <div class="card shadow">
            <div class="card-header bg-dark text-white">
              <h4 class="m-0">Iniciar sesión</h4>
            </div>
            <div class="card-body">
              <div class="text-center mb-4">
                <img src="../components/icons/AdminSaur.png" alt="Logo" style="max-width: 200px;">
              </div>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="username" class="form-label">Nombre del admin:</label>
                  <input type="text" class="form-control" id="username" v-model="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña:</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <div class="d-grid">
                  <RouterLink to="/admin">
                    <button type="submit" class="btn btn-dark btn-lg text-center">Ingresar a administración</button>
                  </RouterLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';

// Datos de ejemplo de juegos
export default {
  name: 'AdminLog',
  components: {
    DefaultLayout,
  },
}
</script>

<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');

const login = () => {
  // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
  console.log('Nombre de usuario:', username.value);
  console.log('Contraseña:', password.value);
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 1rem;
}

.card-header {
  border-radius: 1rem 1rem 0 0;
}

.card-footer {
  border-radius: 0 0 1rem 1rem;
}

.btn-dark {
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:hover {
  background-color: #1d2124;
  border-color: #1d2124;
}

h4 {
  align-self: center;
}
</style>