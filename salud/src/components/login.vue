<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login" class="login-form">
      <input type="email" v-model="email" placeholder="Correo" required class="input-field" />
      <input type="password" v-model="password" placeholder="Contraseña" required class="input-field" />
      <button type="submit" class="login-button">Iniciar</button>
    </form>
    <p class="register-link">
      No tienes cuenta? 
      <router-link to="/register" class="link">Regístrate aquí</router-link>
    </p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

async function login() {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem('token', response.data.token);
    router.push('/home');
  } catch (error) {
    alert('Error en el login: ' + error.response.data.error);
  }
}
</script>

<style src="./Login.css"></style>
