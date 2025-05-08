<template>
    <div>
      <h2>Iniciar Sesión</h2>
      <button @click="login">Iniciar</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  function login() {
    localStorage.setItem("user", "authenticated");
    router.push("/home");
  }
  </script>
  