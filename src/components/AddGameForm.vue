<template>
    <div class="add-game-container mt-3">
        <h1>Add videogame</h1>
        <form @submit.prevent="addGame">
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control" id="name" v-model="game.name">
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Description:</label>
                <textarea class="form-control" id="description" v-model="game.description"></textarea>
            </div>

            <div class="mb-3">
                <label for="stock" class="form-label">Stock:</label>
                <input type="number" class="form-control" id="stock" v-model.number="game.stock">
            </div>

            <div class="mb-3">
                <label for="price" class="form-label">Price:</label>
                <input type="number" class="form-control" id="price" v-model.number="game.price">
            </div>

            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="physical" value="Physical" v-model="game.type">
                    <label class="form-check-label" for="physical">Physical</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="digital" value="Digital" v-model="game.type">
                    <label class="form-check-label" for="digital">Digital</label>
                </div>
            </div>

            <div class="mb-3">
                <label for="image" class="form-label">Image:</label>
                <input class="form-control" type="file" id="image" @change="handleFileUpload">
            </div>

            <div class="mb-3">
                <label for="category" class="form-label">Category:</label>
                <select class="form-select" id="category" v-model="game.category">
                    <option disabled value="">Select a category</option>
                    <!-- Las opciones de categoría van aquí -->
                </select>
            </div>

            <div class="mb-3">
                <label for="genre" class="form-label">Genre:</label>
                <select class="form-select" id="genre" v-model="game.genre">
                    <option disabled value="">Select a genre</option>
                    <!-- Las opciones de género van aquí -->
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Add Game</button>
        </form>
    </div>
</template>

<script>
export default {
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
