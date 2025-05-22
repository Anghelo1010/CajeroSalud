<template>
  <Navbar />
  <div class="nosotros-main-container">
    <div class="nosotros-hero">
      <div class="nosotros-overlay">
        <h1 class="nosotros-hero-title">Nosotros</h1>
        <p class="nosotros-hero-description">
          Descubre más sobre nosotros, los objetivos de la empresa y los componentes de este gran proyecto.
        </p>
      </div>
    </div>
    <hr class="nosotros-divider" />

    <!-- Descripción del proyecto -->
    <div class="nosotros-content">
      <h2>Descripción del Proyecto</h2>
      <p>
        Banco de Salud es una propuesta tecnológica enfocada en el bienestar de la población boliviana, permitiendo realizar chequeos médicos básicos de forma accesible y automatizada a través de un dispositivo IoT. El sistema permite a los usuarios medir su presión arterial, temperatura y ritmo cardíaco desde un solo punto físico.
      </p>
    </div>

    <!-- Objetivos -->
    <div class="nosotros-content">
      <h2>Objetivos</h2>
      <ul>
        <li>Brindar una solución de salud preventiva mediante el uso de tecnología IoT.</li>
        <li>Ofrecer un sistema fácil de usar, confiable y disponible en lugares estratégicos de Santa Cruz.</li>
        <li>Recolectar y mostrar datos médicos en tiempo real mediante dashboards conectados.</li>
      </ul>
    </div>

    <!-- Video explicativo -->
    <div class="nosotros-content">
      <h2>Video Explicativo</h2>
      <video controls width="100%" style="max-width: 700px; border-radius: 8px; display: block; margin: 0 auto;">
        <source src="../../assets/videos/explicativo.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>

    <!-- Misión -->
    <div class="nosotros-content">
      <div class="nosotros-mision">
        <div class="nosotros-mision-text">
          <h2 class="nosotros-mision-title">Misión</h2>
          <p class="nosotros-mision-description">
            Nuestra misión es ofrecer una solución accesible y confiable para chequeos médicos generales, integrando tecnología IoT que permita a las personas medir su presión arterial, temperatura corporal y ritmo cardíaco de manera rápida y segura, desde un solo dispositivo ubicado en Santa Cruz de la Sierra, Bolivia.
          </p>
        </div>
        <div class="nosotros-mision-image">
          <img src="../../assets/images/saluduno.jpg" alt="Misión de la empresa" class="nosotros-mision-img" />
        </div>
      </div>
    </div>

    <!-- Visión -->
    <div class="nosotros-content">
      <div class="nosotros-vision">
        <div class="nosotros-vision-image">
          <img src="../../assets/images/saluddos.jpg" alt="Visión de la empresa" class="nosotros-vision-img" />
        </div>
        <div class="nosotros-vision-text">
          <h2 class="nosotros-vision-title">Visión</h2>
          <p class="nosotros-vision-description">
            Nuestra visión es convertirnos en referentes en soluciones de salud digital en Bolivia y Latinoamérica, creando una red de cajeros inteligentes que proporcionen servicios médicos preventivos y estén al alcance de toda la población, priorizando la innovación, precisión y cuidado del bienestar.
          </p>
        </div>
      </div>
    </div>

    <!-- Equipo -->
    <div class="nosotros-content">
      <h2>Equipo de Desarrollo</h2>
      <ul>
        <li><strong>Anghelo Pecho:</strong> Desarrollador Fullstack, encargado del sistema web, dashboard y backend.</li>
        <li><strong>Natalia Jallaza:</strong> Especialista en diseño de experiencia y apoyo en documentación técnica.</li>
        <li><strong>Daniel Zamorano:</strong> Responsable del módulo IoT y conexiones con sensores físicos.</li>
      </ul>
    </div>

    <!-- Resultados y Conclusiones -->
    <div class="nosotros-content">
      <h2>Resultados y Conclusiones</h2>
      <p>
        El prototipo funcional fue capaz de medir y transmitir los datos médicos básicos con éxito, demostrando que una solución de bajo costo puede ser eficaz para monitorear signos vitales. El sistema puede ser escalado e implementado en instituciones públicas, farmacias o centros comunitarios.
      </p>
    </div>

    <!-- Tecnologías Utilizadas -->
    <div class="nosotros-content">
      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li>Vue 3 + Vite para frontend</li>
        <li>Tailwind CSS para estilos</li>
        <li>Flask y Node.js para backend y API</li>
        <li>PostgreSQL para base de datos</li>
        <li>ESP32 (NodeMCU) para captura y envío de datos IoT</li>
        <li>Sensor de temperatura DHT11</li>
        <li>Sensor de ritmo cardíaco y presión arterial</li>
      </ul>
    </div>

    <!-- Referencias -->
    <div class="nosotros-content">
      <h2>Referencias</h2>
      <p>No se utilizaron referencias bibliográficas externas en esta etapa del proyecto. Todo el contenido fue desarrollado por el equipo de trabajo con conocimientos adquiridos en la carrera.</p>
    </div>

    <hr class="nosotros-divider" />
  </div>
</template>

<script setup>
import Navbar from '../../../src/components/Navbar.vue';
</script>

