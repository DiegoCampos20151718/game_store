import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Search from './components/Search.vue';
import adminApp from './components/adminApp.vue';
import AddGameForm from './components/AddGameForm.vue';
import EditGameForm from './components/EditGameForm.vue';
import AllVideo from './components/AllVideo.vue';
import AdminLog from './components/AdminLog.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/catalog', component: AllVideo },
    
    { path: '/admin',  component: adminApp },
    { path: '/admin/add-game', component: AddGameForm },
    { path: '/admin/edit-game', component: EditGameForm },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router;