<template>
    <admin-layout>
        <div class="add-game-container">
            <h1 class="text-white">Add videogame</h1>
            <form @submit.prevent="addGame">
                <div class="mb-3">
                    <label for="name" class="form-label text-white">Name:</label>
                    <input type="text" class="form-control" id="name" v-model="game.name">
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label text-white">Description:</label>
                    <textarea class="form-control" id="description" v-model="game.description"></textarea>
                </div>

                <div class="mb-3">
                    <label for="stock" class="form-label text-white">Stock:</label>
                    <input type="number" class="form-control" id="stock" v-model.number="game.stock">
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label text-white">Price:</label>
                    <input type="number" class="form-control" id="price" v-model.number="game.price">
                </div>

                <div class="mb-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="physical" value="Physical" v-model="game.type">
                        <label class="form-check-label text-white" for="physical">Physical</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="digital" value="Digital" v-model="game.type">
                        <label class="form-check-label text-white" for="digital">Digital</label>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="image" class="form-label text-white">Image:</label>
                    <input class="form-control" type="file" id="image" @change="handleFileUpload">
                </div>

                <div class="mb-3">
                    <label for="category" class="form-label text-white">Category:</label>
                    <select class="form-select" id="category" v-model="game.category">
                        <option disabled value="">Select a category</option>
                        <!-- Las opciones de categoría van aquí -->
                    </select>
                </div>

                <div class="mb-3">
                    <label for="genre" class="form-label text-white">Genre:</label>
                    <select class="form-select" id="genre" v-model="game.genre">
                        <option disabled value="">Select a genre</option>
                        <!-- Las opciones de género van aquí -->
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Add Game</button>
            </form>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from './layouts/AdminLayout.vue';

export default {
    name: 'AddGameForm',
    components: {
        AdminLayout,
    },
    data() {
        return {
            game: {
                name: '',
                description: '',
                stock: 0,
                price: 0,
                type: null,
                image: null,
                category: '',
                genre: '',
            },
        };
    },
    methods: {
        addGame() {
            // Lógica para añadir el videojuego
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            this.game.image = file;
            // Aquí podrías implementar la lógica para manejar la subida de archivos
        }
    }
};
</script>
