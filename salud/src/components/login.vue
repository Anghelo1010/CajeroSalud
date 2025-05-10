<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Correo" required />
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar</button>
    </form>
    <p>No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
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
