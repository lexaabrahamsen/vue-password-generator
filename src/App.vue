<script setup lang="ts">
import { ref } from 'vue';

// Reactive state for user inputs
const includeLowercase = ref(true);
const includeUppercase = ref(false);
const includeNumbers = ref(false);
const includeSymbols = ref(false);
const passwordLength = ref(12);

// Reactive state for the generated password
const generatedPassword = ref('');

// Logic to generate a random password
const generatePassword = () => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let charset = '';

  if (includeLowercase.value) charset += lowercaseChars;
  if (includeUppercase.value) charset += uppercaseChars;
  if (includeNumbers.value) charset += numberChars;
  if (includeSymbols.value) charset += symbolChars;

  if (charset === '') {
    generatedPassword.value = 'Please select at least one option!';
    return;
  }

  let password = '';

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  generatedPassword.value = password;
};
</script>

<template>
  <div class="password-generator">
    <h1>Password Generator</h1>
    <p>Generate a secure password with custom options.</p>
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
  <el-input v-model="generatedPassword" style="width: 240px" placeholder="Please input" />
  <div class="options">
    <label>
      <input type="checkbox" v-model="includeLowercase" /> Include Lowercase
    </label>
    <label>
      <input type="checkbox" v-model="includeUppercase" /> Include Uppercase
    </label>
    <label>
      <input type="checkbox" v-model="includeNumbers" /> Include Numbers
    </label>
    <label>
      <input type="checkbox" v-model="includeSymbols" /> Include Symbols
    </label>
  </div>
  <div>
    <el-checkbox
      v-model="includeLowercase"
      label="includeLowercase"
      size="large"
    />
    <el-checkbox
      v-model="includeUppercase"
      label="includeUppercase"
      size="large"
    />
  </div>
  <div class="my-2">
    <el-checkbox v-model="includeNumbers" label="includeNumbers" />
    <el-checkbox v-model="includeSymbols" label="includeSymbols" />
  </div>

  <div class="strength">
    <label for="password-length">Password Length: {{ passwordLength }}</label>
    <input
      id="password-length"
      type="range"
      min="6"
      max="32"
      v-model="passwordLength"
    />
  </div>
  <div class="slider-demo-block">
    <el-slider v-model="passwordLength" />
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
