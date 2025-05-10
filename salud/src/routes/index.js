import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/login.vue";
import Register from "../components/register.vue"; // nuevo import
import Home from "../home.vue"; // Página principal después de iniciar sesión
import Dashboard from "../page/dashboard/dasboard.vue"; // Página de Dashboard
import Informacion from "../page/informacion/informacion.vue";
import Nosotros from "../page/nosotros/nosotros.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register }, // nuevo
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/informacion",
    name: "Informacion",
    component: Informacion,
    meta: { requiresAuth: true },
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protección de rutas: verifica si el usuario está autenticado
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // Recupera el token
  const isAuthenticated = !!token; // Verifica si el token existe

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
