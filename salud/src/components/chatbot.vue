<template>
  <div class="chatbot-container">
    <div class="chat-icon" @click="toggleChat">💬</div>

    <div class="chat-window" v-if="isOpen">
      <div class="chat-header">
        Chat de Ayuda
        <button class="close-btn" @click="toggleChat">✖</button>
      </div>

      <div class="chat-body">
        <div v-for="(msg, index) in messages" :key="index" class="message">
          <strong>{{ msg.sender }}:</strong> {{ msg.text }}
        </div>
      </div>

      <div class="chat-input">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Escribe tu mensaje..." />
        <button @click="sendMessage">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const isOpen = ref(false);
const userInput = ref('');
const messages = ref([
  { sender: 'Bot', text: '¡Hola! ¿En qué puedo ayudarte sobre salud?' }
]);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
};

const sendMessage = async () => {
  if (userInput.value.trim() === '') return;

  const userText = userInput.value;
  messages.value.push({ sender: 'Tú', text: userText });
  userInput.value = '';

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres un asistente médico que responde dudas de salud de forma clara y sencilla.' },
        ...messages.value.map(m => ({
          role: m.sender === 'Tú' ? 'user' : 'assistant',
          content: m.text
        }))
      ],
      max_tokens: 150
    }, {

    });

    const reply = response.data.choices[0].message.content.trim();
    messages.value.push({ sender: 'Bot', text: reply });

 } catch (error) {
  console.error(error.response?.data || error);
  messages.value.push({ sender: 'Bot', text: 'Lo siento, hubo un error al responder. Intenta nuevamente.' });
}
let lastRequestTime = 0;

const sendMessage = async () => {
  const now = Date.now();
  if (now - lastRequestTime < 3000) {  // 3 segundos entre mensajes
    messages.value.push({ sender: 'Bot', text: 'Espera un momento antes de enviar otro mensaje.' });
    return;
  }

  if (userInput.value.trim() === '') return;

  const userText = userInput.value;
  messages.value.push({ sender: 'Tú', text: userText });
  userInput.value = '';
  lastRequestTime = now;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Eres un asistente médico que responde dudas de salud de forma clara y sencilla.' },
          ...messages.value.map(m => ({
            role: m.sender === 'Tú' ? 'user' : 'assistant',
            content: m.text
          }))
        ],
        max_tokens: 150
      },
      {
      
      }
    );

    const reply = response.data.choices[0].message.content.trim();
    messages.value.push({ sender: 'Bot', text: reply });

  } catch (error) {
    console.error(error.response?.data || error);
    messages.value.push({ sender: 'Bot', text: 'Lo siento, hubo un error al responder. Intenta nuevamente.' });
  }
};

};
</script>

<style scoped>
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}

.chat-icon {
  background-color: #018124FF;
  color: white;
  font-size: 24px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.chat-window {
  width: 300px;
  height: 400px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.chat-header {
  background: #017A21FF;
  color: white;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.chat-body {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  font-size: 14px;
}

.chat-input {
  display: flex;
  border-top: 1px solid #ccc;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 14px;
}

.chat-input button {
  padding: 10px 15px;
  background: #056A08FF;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
