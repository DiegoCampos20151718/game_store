<template>
    <div>
      <!-- Sección de banners -->
      <section class="banner-section">
        <div class="container">
          <H1>Complete Catalog:</H1>
        </div>
      </section>
  
      <!-- Sección de juegos -->
      <main class="section-fluid" style="width: 1200px;">
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-4 mb-4" v-for="(game, index) in games" :key="index">
              <div class="card h-100 shadow">
                <img :src="game.image" class="card-img-top" alt="Game Image">
                <div class="card-body">
                  <h5 class="card-title">{{ game.title }}</h5>
                  <p class="card-text">{{ game.description }}</p>
                  <p class="card-text">Console: {{ game.console }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Datos de ejemplo de juegos
  const games = ref([
    {
      title: 'Halo masterchief colection',
      description: 'Description for game 1',
      console: 'Xbox',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/976730/capsule_616x353.jpg?t=1670458602'
    },
    {
      title: 'God of War III',
      description: 'Description for game 2',
      console: 'Playstation',
      image: 'https://i.blogs.es/700de3/god-of-war-3-22530001/650_1200.jpg'
    },
    {
      title: 'Super Smash bros Ultimate',
      description: 'Description for game 3',
      console: 'Nintendo',
      image: 'https://i.blogs.es/77fc2d/super-smash-bros-ultimate-switch/840_560.jpg'
    },
    {
      title: 'Contra',
      description: 'Description for game 4',
      console: 'Polystation',
      image: 'https://cdn.ligadegamers.com/imagenes/contra-mejores-juegos-de-nes-cke.jpg'
    },
    {
      title: '200 amazing games',
      description: 'Description for game 5',
      console: 'Xtronx',
      image: 'https://i.blogs.es/a3c6ce/8a25t5f-2/450_1000.jpg'
    },
    {
      title: 'Destiny Original Sin II',
      description: 'Description for game 6',
      console: 'Pc',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRnefJO-XdaSH3pp9upRpx91FNBYB-Fk1ZOaHBP8qQyysUEOdaJ_gJegr8aCNBMO8MVQ&usqp=CAU'
    },
    {
      title: 'God of war',
      description: 'Description for game 6',
      console: 'PlayStation 5',
      image: 'https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadagowpc.jpg'
    },
    {
      title: 'Metal Gear Solid Snake Eater',
      description: 'Description for game 6',
      console: 'Nintendo',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/2417610/capsule_616x353.jpg?t=1698426694'
    },
    {
      title: 'Pokemon Ruby Omega y Zafiro Alfa',
      description: 'Description for game 6',
      console: 'Nintendo',
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2014/10/396360-puntos-clave-demo-pokemon-rubi-omega-pokemon-zafiro-alfa.jpg?tf=3840x'
    },

  
    // Agrega más juegos según sea necesario
  ]);
  </script>
  
  <style scoped>
  /* Estilos personalizados */
  .banner-section {
    padding: 50px 0;
  }
  
  .banner-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .banner-img {
    width: 1150px;
    height: 200px;
  }
  body{
    background: black;
  }
  h1{
    color: #ccc;
  }
  </style>
  