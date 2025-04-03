<script setup lang="ts">
import { ref } from 'vue';

const includeLowercase = ref(true);
const includeUppercase = ref(false);
const includeNumbers = ref(false);
const includeSymbols = ref(false);
const passwordLength = ref(12);
const generatedPassword = ref('');

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
  <div class="app">
    <h1>Password Generator</h1>
    <el-card shadow="hover" class="card">
      <label class="label-text">Generated Password</label>
      <el-input
        v-model="generatedPassword"
        :placeholder="'Password'"
        size="large"
        class="password-input"
        aria-label="where at"
        readonly
      />

      <div class="checkbox-group">
        <el-checkbox v-model="includeLowercase">Include Lowercase</el-checkbox>
        <el-checkbox v-model="includeUppercase">Include Uppercase</el-checkbox>
        <el-checkbox v-model="includeNumbers">Include Numbers</el-checkbox>
        <el-checkbox v-model="includeSymbols">Include Symbols</el-checkbox>
      </div>

      <div class="slider-section">
        <label class="label-text">Password Length: {{ passwordLength }}</label>
        <el-slider v-model="passwordLength" :min="6" :max="32" />
      </div>

      <el-button type="primary" class="generate-btn" @click="generatePassword">
        Generate Password
      </el-button>
    </el-card>
  </div>
</template>

<style scoped>
/* App Background */
.app {
  background: #131A27;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Avenir', monospace;
  flex-direction: column;
}

/* Header */
h1 {
  color: white;
  margin-bottom: 20px;
}

/* Label text */
.label-text {
  color: #ffffff80;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Avenir', monospace;
}

/* Card */
.card {
  background: #202938;
  border: 1px solid #405A7D;
  border-radius: 12px;
  padding: 25px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  margin: 10px;
}

/* Input */
.password-input {
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 6px !important;
}

/* Placeholder at 50% opacity */
:deep(.el-input__inner::placeholder) {
  opacity: 0.5;
  color: white;
}

/* Input normal text */
:deep(.el-input__inner) {
  color: white;
  font-family: 'Avenir', monospace;
}

/* Checkbox section */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0;
}

/* Slider */
.slider-section {
  margin-top: 20px;
}

/* Input Border */
:deep(.el-input__wrapper) {
  border-color: #405A7D !important;
  background-color: #263549;
}

/* Slider track and handle */
:deep(.el-slider__bar) {
  background-color: #12B982 !important;
}
:deep(.el-slider__button) {
  border: 2px solid #12B982 !important;
}

/* Checkboxes */
:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #12B982 !important;
  border-color: #12B982 !important;
}
:deep(.el-checkbox__label) {
  color: white !important;
  font-family: 'Avenir', monospace;
}
:deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #12B982 !important;
}

/* Button */
.generate-btn {
  background-color: #12B982;
  border: none;
  margin-top: 40px;
  font-family: 'Avenir', monospace;
  width: 100%;
  font-weight: medium;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 6px;
}

.generate-btn:hover {
  background-color: #02926B;
}
</style>
