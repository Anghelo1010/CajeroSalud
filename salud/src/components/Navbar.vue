<template>
  <nav class="custom-navbar">
    <ul class="custom-navbar-list">
      <li class="custom-navbar-item"><router-link to="/home" class="custom-navbar-link">Home</router-link></li>
      <li class="custom-navbar-item"><router-link to="/dashboard" class="custom-navbar-link">Dashboard</router-link></li>
      <li class="custom-navbar-item"><router-link to="/informacion" class="custom-navbar-link">Información</router-link></li>
      <li class="custom-navbar-item"><router-link to="/nosotros" class="custom-navbar-link">Nosotros</router-link></li>
      <li @click="logout" class="custom-navbar-item custom-navbar-logout">Cerrar Sesión</li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  localStorage.removeItem("token");  // Ahora elimina el token correcto
  router.push("/login");
}

</script>
