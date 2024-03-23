import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Search from './components/Search.vue';
import AddGameForm from './components/AddGameForm.vue';
import EditGameForm from './components/EditGameForm.vue';
import AllVideo from './components/AllVideo.vue';
import AdminLog from './components/AdminLog.vue';
import Game from './components/Game.vue';
import AdminHome from './components/AdminHome.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/catalog', component: AllVideo },
    { path: '/game', component: Game },
    
    { path: '/admin',  component: AdminHome },
    { path: '/admin/login',  component: AdminLog },
    { path: '/admin/add-game', component: AddGameForm },
    { path: '/admin/edit-game', component: EditGameForm },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router;