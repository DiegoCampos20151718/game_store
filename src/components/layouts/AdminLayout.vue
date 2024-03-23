<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/admin" class="nav-link"><h2 class="text-white">Control Panel</h2></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin" class="nav-link">Videogames</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/add-game" class="nav-link">Add game</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="section">
            <slot />
        </main>
    </div>
</template>
<script>
export default {
    name: "AdminLayout",
}
</script>