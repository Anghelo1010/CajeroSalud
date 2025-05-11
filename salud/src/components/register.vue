<template>
  <div class="register-container">
    <h2>Registro</h2>
    <form @submit.prevent="register" class="register-form">
      <input type="text" v-model="nombre" placeholder="Nombre completo" required class="input-field" />
      <input type="email" v-model="email" placeholder="Correo" required class="input-field" />
      <input type="password" v-model="password" placeholder="Contraseña" required class="input-field" />
      <button type="submit" class="register-button">Registrarse</button>
    </form>
    <p class="login-link">
      ¿Ya tienes cuenta? 
      <router-link to="/login" class="link">Inicia sesión</router-link>
    </p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nombre = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

async function register() {
  try {
    const res = await axios.post('http://localhost:3000/register', {
      nombre: nombre.value,
      email: email.value,
      password: password.value,
    });

    if (res.data && res.data.user) {
      alert('Registro exitoso ✅');
      router.push('/login');
    } else {
      alert('Registro fallido, intenta de nuevo ❌');
    }
  } catch (error) {
    console.error('Error al registrar:', error);
    const errorMessage = error.response?.data?.error || 'Error en el servidor.';
    alert('Error en el registro: ' + errorMessage);
  }
}
</script>

<style src="./Register.css"></style>
