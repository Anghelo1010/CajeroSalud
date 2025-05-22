<template>
  <div class="dashboard-container">
    <h1>Dashboard de Monitoreo</h1>

    <!-- Formulario del paciente -->
    <div class="form-container">
      <h2>Datos del Paciente</h2>
      <form @submit.prevent="guardarPaciente">
        <label>
          Nombre:
          <input v-model="paciente.nombre" type="text" required />
        </label>
        <label>
          Edad:
          <input v-model="paciente.edad" type="number" required />
        </label>
        <label>
          Género:
          <select v-model="paciente.genero">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>

    <!-- Información del paciente al lado del dashboard -->
    <div class="info-container">
      <div class="data-card">
        <p><strong>IR:</strong> {{ ir }}</p>
        <p><strong>RED:</strong> {{ red }}</p>
        <p><strong>Temp Objeto:</strong> {{ t_obj }} °C</p>
        <p><strong>Temp Ambiente:</strong> {{ t_amb }} °C</p>
        <p v-if="esperandoDatos">⏳ Esperando datos del sensor...</p>
        <p v-if="errorConexion" style="color: red;">❌ Error de conexión con el ESP32</p>
        <p v-if="estado === 'normal'" class="estado-normal">🟢 Pulso y oxigenación normales</p>
        <p v-if="estado === 'alerta'" class="estado-alerta">🔴 Pulso muy elevado. ¡Cuidado!</p>
      </div>

      <canvas ref="chartCanvas" width="700" height="400"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Chart from 'chart.js/auto'
import './dasboard.css'

const ipESP = 'http://192.168.1.117:8080/datos'

const ir = ref(0)
const red = ref(0)
const t_obj = ref(0)
const t_amb = ref(0)
const esperandoDatos = ref(true)
const errorConexion = ref(false)
const estado = ref('')

const paciente = ref({
  nombre: '',
  edad: '',
  genero: 'Masculino'
})

const chartCanvas = ref(null)
let chartInstance = null
const maxPuntos = 100
let dataIR = []
let dataRED = []

function guardarPaciente() {
  alert(`Paciente guardado:\nNombre: ${paciente.value.nombre}\nEdad: ${paciente.value.edad}\nGénero: ${paciente.value.genero}`)
}

async function obtenerDatos() {
  try {
    const res = await fetch(ipESP)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()

    if (typeof data.red === 'number' && typeof data.ir === 'number') {
      red.value = data.red
      ir.value = data.ir
      t_obj.value = data.t_obj
      t_amb.value = data.t_amb
      esperandoDatos.value = false
      errorConexion.value = false

      // Clasificación del estado
      if (ir.value > 120000 && red.value > 150000) {
        estado.value = 'alerta'
      } else if (ir.value > 100000 && red.value > 100000) {
        estado.value = 'normal'
      } else {
        estado.value = ''
      }

      dataIR.push(ir.value)
      dataRED.push(red.value)
      if (dataIR.length > maxPuntos) dataIR.shift()
      if (dataRED.length > maxPuntos) dataRED.shift()

      await nextTick()
      actualizarGrafico()
    } else {
      console.error('❌ Datos inválidos recibidos:', data)
    }
  } catch (e) {
    console.error('❌ Error al obtener datos:', e)
    errorConexion.value = true
  }
}

function inicializarGrafico() {
  if (chartCanvas.value && !chartInstance) {
    chartInstance = new Chart(chartCanvas.value, {
      type: 'line',
      data: {
        labels: Array.from({ length: maxPuntos }, (_, i) => i + 1),
        datasets: [
          {
            label: 'IR',
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76,175,80,0.3)',
            data: [],
            fill: true,
            tension: 0.4
          },
          {
            label: 'RED',
            borderColor: '#FF5722',
            backgroundColor: 'rgba(255,87,34,0.3)',
            data: [],
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        animation: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 14
              }
            }
          }
        }
      }
    })
  }
}

function actualizarGrafico() {
  if (chartInstance) {
    chartInstance.data.labels = Array.from({ length: dataIR.length }, (_, i) => i + 1)
    chartInstance.data.datasets[0].data = dataIR
    chartInstance.data.datasets[1].data = dataRED
    chartInstance.update()
  } else {
    inicializarGrafico()
  }
}

onMounted(() => {
  inicializarGrafico()
  setInterval(obtenerDatos, 1500)
})
</script>
