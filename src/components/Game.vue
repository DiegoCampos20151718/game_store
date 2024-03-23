<template>
  <default-layout>
    <div>
      <br /><br /><br /><br />
      <div v-if="loading" class="placeholder">
        Loading...
      </div>
      <div v-else class="container">
        <div class="imageContainer">
          <img :src="game.image" :alt="game.name" class="image" />
        </div>
        <div class="detailsContainer">
          <h2 class="title">{{ game.name }}</h2>
          <p class="price">${{ game.price }} MXN</p>
          <p class="genrePlatform">Genre: {{ game.genre }}</p>
          <p class="genrePlatform">Platform: {{ game.platform }}</p>
          <p class="description">{{ game.description }}</p>
          <button @click="buy" class="buyButton">Buy</button>
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';

export default {
  name: 'Game',
  components: {
    DefaultLayout,
  },
  data() {
    return {
      loading: false,
      game: {
        name: 'Game 1',
        description: 'Description for game 1',
        platform: 'Xbox',
        genre: 'alguno',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/976730/capsule_616x353.jpg?t=1670458602',
        price: 59.99 // Add a price property
      }
    };
  },
  methods: {
    buy() {
      alert(`${this.game.name} purchased`);
    }
  }
};
</script>

<style scoped>
.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Adjust the height of the placeholder to cover the entire viewport */
  background-color: #333;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  animation: glow 1.5s infinite alternate;
}

.container {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  padding: 20px;
  background-color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.imageContainer {
  flex: 1;
  margin-right: 20px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.detailsContainer {
  flex: 2;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

.price {
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
}

.genrePlatform {
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
}

.description {
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
}
</style>