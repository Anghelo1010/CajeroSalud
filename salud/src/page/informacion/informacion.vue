<template>
  <div class="info-main-container">
    <Navbar />
    <div class="info-hero">
      <div class="info-overlay">
        <h1 class="info-hero-title">Información</h1>
        <p class="info-hero-description">
          Descubre más sobre nuestro centro de salud, nuestros servicios y el compromiso con el bienestar de la comunidad.
        </p>
      </div>
    </div>
    <hr class="info-divider" />

    <!-- Sección de herramientas -->
    <div class="info-tools">
      <h2 class="info-tools-title">Herramientas utilizadas en el proyecto</h2>
      <p class="info-tools-description">
        Para el desarrollo de este proyecto, hemos utilizado tecnologías modernas como Vue.js para el frontend, Express y Node.js para el backend, junto con PostgreSQL como base de datos. Además, integramos herramientas de diseño y gráficos para una experiencia visual óptima.
      </p>
    </div>
    <hr class="info-divider" />

    <!-- Sección: NodeMCU ESP32 con fondo blanco -->
    <div class="info-content">
      <div class="info-nodemcu">
        <div class="info-nodemcu-text">
          <h2 class="info-nodemcu-title">NodeMCU ESP32</h2>
          <p class="info-nodemcu-description">
            El NodeMCU ESP32 es un módulo de desarrollo compacto y versátil basado en el chip ESP32, que ofrece conectividad Wi-Fi y Bluetooth. Es ideal para proyectos de IoT, ya que cuenta con múltiples pines GPIO, alta capacidad de procesamiento y soporte para programación en C++ y MicroPython.
          </p>
        </div>
        <div class="info-nodemcu-image">
          <img src="../../assets/images/node.jpg" alt="NodeMCU ESP32" class="info-nodemcu-img" />
        </div>
      </div>
    </div>
    <hr class="info-divider" />

    <!-- Nueva sección: Sensor de Temperatura -->
    <div class="info-content">
      <div class="info-sensor">
        <div class="info-sensor-image">
          <img src="../../assets/images/temperatura.jpg" alt="Sensor de Temperatura" class="info-sensor-img" />
        </div>
        <div class="info-sensor-text">
          <h2 class="info-sensor-title">Sensor de Temperatura</h2>
          <p class="info-sensor-description">
            El sensor de temperatura utilizado en el proyecto permite medir de forma precisa la temperatura corporal. Está diseñado para captar cambios rápidos y enviar los datos en tiempo real, facilitando el monitoreo constante de la salud del usuario.
          </p>
        </div>
      </div>
    </div>
    <hr class="info-divider" />

    <!-- Sección: Sensor de Ritmo Cardíaco -->
<div class="info-content">
  <div class="info-heart-sensor">
    <div class="info-heart-text">
      <h2 class="info-heart-title">Sensor de Ritmo Cardíaco</h2>
      <p class="info-heart-description">
        El sensor MAX30102 es un módulo óptico que permite medir la frecuencia cardíaca y niveles de oxígeno en sangre mediante un sistema de emisión y recepción de luz. Funciona por comunicación I2C y está diseñado especialmente para aplicaciones médicas y de fitness.
      </p>
    </div>
    <div class="info-heart-image">
      <img src="../../assets/images/arterial.jpg" alt="Sensor de Ritmo Cardíaco" class="info-heart-img" />
    </div>
  </div>
</div>
<hr class="info-divider" />

  </div>
</template>

<script setup>
import Navbar from '../../../src/components/Navbar.vue';
</script>
