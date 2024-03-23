<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <RouterLink to="/" class="navbar/brand">
                    <img src="../icons/Banner.png" alt="Logo" class="nav-link" style="max-width: 170px;">
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
                <RouterLink :to="{ path: '/admin/login' }">
                    <img src="../icons/LogoU.png" height="40px" alt="Logo oficial de FiesTop" title="Perfil de usuario">
                </RouterLink>
            </div>
        </nav>
        <main class="section">
            <slot />
        </main>
    </div>
</template>
<script>
export default {
    created() {
        
    }
}
</script>