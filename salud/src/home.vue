<template>
  <div class="home-container">
    <Navbar />
    <!-- Hero Section -->
    <div class="home-hero">
      <img src="../src/assets/images/inicio.jpg" alt="Imagen principal" class="home-background-image" />
      <div class="home-overlay">
        <h1 class="home-title">Cajero de salud</h1>
        <p class="home-welcome">Bienvenido a la página principal del centro de salud.</p>
      </div>
    </div>

    <!-- Línea divisora -->
    <hr class="home-divider" />

    <!-- Sección de información -->
    <section class="home-info-section">
      <div class="home-info-image">
        <img src="../src/assets/images/image_uno.jpg" alt="Imagen de salud" class="home-info-img" />
      </div>
      <div class="home-info-text">
        <h2 class="home-info-title">¿Qué es la salud?</h2>
        <p class="home-info-description">
          La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades.
          Es fundamental para el desarrollo humano y el bienestar de la sociedad.
        </p>
      </div>
    </section>

    <!-- Línea divisora -->
    <hr class="home-divider" />

    <!-- Sección Cajero de Salud -->
    <section class="home-cajero-section">
      <div class="home-cajero-text">
        <h2 class="home-cajero-title">Cajero de Salud</h2>
        <p class="home-cajero-description">
          El Cajero de Salud se dedica a realizar un chequeo rápido y efectivo de los pacientes, 
          midiendo parámetros esenciales como ritmo cardíaco, presión arterial y temperatura. 
          Una solución eficiente para monitorear la salud de manera precisa.
        </p>
      </div>
      <div class="home-cajero-image">
        <img src="../src/assets/images/imagen_dos.jpg" alt="Cajero de Salud" class="home-cajero-img" />
      </div>
    </section>

    <!-- Línea divisora -->
    <hr class="home-divider" />

    <!-- Sección de Parámetros de Salud -->
    <section class="home-parameters-section">
      <div class="home-parameter">
        <h3 class="home-parameter-title">Presión Arterial</h3>
        <p class="home-parameter-description">
          La presión arterial es la fuerza que ejerce la sangre contra las paredes de las arterias. 
          Un monitoreo constante ayuda a prevenir enfermedades cardiovasculares.
        </p>
      </div>
      <div class="home-parameter">
        <h3 class="home-parameter-title">Ritmo Cardíaco</h3>
        <p class="home-parameter-description">
          El ritmo cardíaco es el número de veces que el corazón late por minuto. 
          Es un indicador importante del estado de salud cardiovascular.
        </p>
      </div>
      <div class="home-parameter">
        <h3 class="home-parameter-title">Temperatura</h3>
        <p class="home-parameter-description">
          La temperatura corporal refleja el equilibrio entre el calor generado y perdido por el cuerpo. 
          Es fundamental para detectar estados febriles o infecciones.
        </p>
      </div>
    </section>

    <!-- Línea divisora -->
    <hr class="home-divider" />

  <!-- Sección Ubicación -->
<section class="home-location-section">
  <div class="home-location-text">
    <h2 class="home-info-title">¿Dónde estamos ubicados?</h2>
    <p class="home-location-description">
      Nos encontramos en el Centro de Salud de Santa Cruz, Bolivia, brindando servicios rápidos y efectivos para el monitoreo de la salud.
    </p>
  </div>
  <div class="home-location-map">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.721489356254!2d-63.181684085224606!3d-17.7833815800531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e5a92b6ae15d%3A0xd0209d1b1b6b66f1!2sCentro%20de%20Salud%20Santa%20Cruz!5e0!3m2!1ses-419!2sbo!4v1682529612345!5m2!1ses-419!2sbo" 
      allowfullscreen="" loading="lazy"></iframe>
  </div>
</section>

  </div>
</template>

<script setup>
import Navbar from '../src/components/Navbar.vue';
</script>
