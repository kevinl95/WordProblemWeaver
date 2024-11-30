<template>
  <div class="generate-assignment-container">
    <!-- Generate Assignment Card -->
    <div class="generate-card">
      <h1>Generate Math Assignment</h1>
      <p>Use the form below to customize your math problem set for students.</p>
    </div>
  </div>
</template>

<style scoped>
.generate-assignment-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
}

.generate-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
}

.generate-card h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.generate-card p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
}
</style>
