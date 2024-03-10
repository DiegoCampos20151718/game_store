<template>
    <form class="container-fluid"  style="width: 1200px;">
      <div class="row justify-content-center mt-10">
        <div class="col-lg-25">
          <div class="card shadow">
            <div class="card-header bg-dark text-white">
              <h4 class="m-0">Registro</h4>
            </div>
            <div class="card-body">
              <div class="text-center mb-4">
                <img src="../components/icons/Banner.png" alt="Logo" style="max-width: 290px;">
              </div>
              <form @submit.prevent="register">
                <div class="mb-3">
                  <label for="username" class="form-label">Nombre de usuario:</label>
                  <input type="text" class="form-control" id="username" v-model="username" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Correo electrónico:</label>
                  <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña:</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <div class="mb-3">
                  <label for="birthdate" class="form-label">Fecha de nacimiento:</label>
                  <input type="date" class="form-control" id="birthdate" v-model="birthdate" required>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Dirección:</label>
                  <input type="text" class="form-control" id="address" v-model="address" required>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Número de teléfono:</label>
                  <input type="tel" class="form-control" id="phone" v-model="phone" required>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-dark btn-lg">Registrar</button>
                </div>
              </form>
            </div>
            <div class="card-footer bg-dark text-white text-center">
              ¿Ya tienes una cuenta? <router-link to="/login" class="text-white">Inicia sesión aquí</router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const birthdate = ref('');
  const address = ref('');
  const phone = ref('');
  
  const register = () => {
    // Aquí puedes agregar la lógica para enviar los datos de registro al servidor
    console.log('Nombre de usuario:', username.value);
    console.log('Correo electrónico:', email.value);
    console.log('Contraseña:', password.value);
    console.log('Fecha de nacimiento:', birthdate.value);
    console.log('Dirección:', address.value);
    console.log('Número de teléfono:', phone.value);
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
  </style>
  