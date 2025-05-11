<template>
  <div class="app-container">
    <!-- Navbar visible solo si no estamos en las páginas de login o registro -->
    <Navbar v-if="!isLoginPage && !isRegisterPage" />
    <router-view />
    <!-- Footer visible solo si no estamos en las páginas de login o registro -->
    <Footer v-if="!isLoginPage && !isRegisterPage" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'; // Importamos ref y watch
import { useRoute } from 'vue-router'; // Importamos onBeforeRouteUpdate
import Footer from '../src/components/Footer.vue';
import '../src/components/Navbar.css';
import Navbar from '../src/components/Navbar.vue';
import '../src/components/footer.css';
import '../src/components/login.css';
import '../src/page/dashboard/dasboard.css';
import '../src/page/informacion/informacion.css';
import '../src/page/nosotros/nosotros.css';
import '../src/style.css';

const route = useRoute();
const isLoginPage = ref(route.path === '/login');
const isRegisterPage = ref(route.path === '/register');

// Actualiza los valores de isLoginPage y isRegisterPage cada vez que la ruta cambie
watch(
  () => route.path,
  (newPath) => {
    isLoginPage.value = newPath === '/login';
    isRegisterPage.value = newPath === '/register';
  }
);
</script>
