<template>
  <div class="student-page">
    <div class="card">
      <h1>Student Assignment</h1>
      <p>Scan the QR code or enter a short code to access your assignment.</p>

      <div class="qr-scanner">
        <h3>Scan QR Code</h3>
        <button @click="startScanning">Start Scanning</button>
        <!-- Placeholder: Display scanned QR code data here -->
        <p v-if="scannedQRCode">Scanned Code: {{ scannedQRCode }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shortCode: '',
      scannedQRCode: '', // Placeholder for scanned QR code data
      assignment: '', // Placeholder for the assignment
    };
  },
  methods: {
    startScanning() {
      // Placeholder method to start QR scanning
      console.log('QR code scanning started');
      // After scanning, you would assign the scanned code to this.scannedQRCode
      // Example: this.scannedQRCode = 'sample-assignment-code';
    },
    loadAssignment() {
      if (this.shortCode) {
        // Here you'd add logic to load the assignment based on the short code
        // For now, we simply display the short code as the assignment.
        this.assignment = `Assignment for code: ${this.shortCode}`;
      }
    }
  }
};
</script>

<style scoped>
.student-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
}

.card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
}

.card h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.card p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.qr-scanner, .short-code-input {
  margin-top: 2rem;
}

.qr-scanner button, .short-code-input button {
  padding: 0.8rem 1.5rem;
  background-color: #7e9eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.qr-scanner button:hover, .short-code-input button:hover {
  background-color: #6a8ccc;
}

input {
  padding: 0.8rem;
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

p {
  font-size: 1rem;
  color: #555;
  margin-top: 1rem;
}
</style>
