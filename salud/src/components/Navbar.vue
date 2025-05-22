<template>
  <nav class="custom-navbar">
    <div class="navbar-logo-container">
      <img src="../assets/images/copia.png" alt="Logo" class="navbar-logo" />
    </div>
    <ul class="custom-navbar-list">
      <li class="custom-navbar-item">
        <router-link to="/home" class="custom-navbar-link">Home</router-link>
      </li>
      <li class="custom-navbar-item">
        <router-link to="/dashboard" class="custom-navbar-link">Dashboard</router-link>
      </li>
      <li class="custom-navbar-item">
        <router-link to="/informacion" class="custom-navbar-link">Información</router-link>
      </li>
      <li class="custom-navbar-item">
        <router-link to="/nosotros" class="custom-navbar-link">Nosotros</router-link>
      </li>
      <li class="custom-navbar-item">
        <a @click="logout" class="custom-navbar-link custom-navbar-logout">Cerrar Sesión</a>
      </li>
    </ul>
  </nav>
</template>


<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  localStorage.removeItem("token");
  router.push("/login");
}
</script>
