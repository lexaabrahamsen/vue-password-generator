<script setup lang="ts">
import { ref } from 'vue';

// Reactive state for the generated password
const generatedPassword = ref('');

// Logic to generate a random password
const generatePassword = () => {
  const length = 12;
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  generatedPassword.value = password;
};
</script>

<template>
  <div class="password-generator">
    <h1>Password Generator</h1>
    <p>Generate a secure password.</p>
  </div>
  <div class="password-display">
    <lable for="generated-password">Generate Password</lable>
    <input
      id="generated-password"
      type="text"
      :value="generatedPassword"
      readonly
    />
  </div>
  <button @click="generatePassword">Generate Password</button>
</template>

<style scoped>
.password-generator {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.password-display {
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
