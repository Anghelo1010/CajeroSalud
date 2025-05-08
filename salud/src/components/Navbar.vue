<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/informacion">Información</router-link></li>
        <li><router-link to="/nosotros">Nosotros</router-link></li>
        <li @click="logout" class="logout">Cerrar Sesión</li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  function logout() {
    localStorage.removeItem("user");
    router.push("/login");
  }
  </script>
  