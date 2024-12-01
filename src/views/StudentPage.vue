<template>
  <div class="student-page">
    <div class="card">
      <h1>Student Assignment</h1>
      <p>Scan the QR code or enter a short code to access your assignment.</p>

      <div>
        <div class="mb">
        QR Code Scanner
        </div>
        <div class="center stream">
        <qr-stream @decode="onDecode" class="mb">
            <div style="color: red;" class="frame"></div>
        </qr-stream>
        </div>
        <div class="mb">
        or upload your QR code
        </div>
        <qr-capture @decode="onDecode" class="mb"></qr-capture>
      </div>
    </div>
  </div>
</template>

<script>
import { QrCapture, QrStream } from "vue3-qr-reader";
import { reactive, toRefs } from 'vue';

function validateWordProblemWeaverUrl(url) {
  // Define the expected base URL
  const baseUrl = "https://wordproblemweaver.com/student?data=";

  // Check if the URL starts with the base URL
  if (!url.startsWith(baseUrl)) {
    return false; // The URL doesn't match the expected base URL
  }

  // Extract the 'data' query parameter from the URL
  const urlParams = new URLSearchParams(new URL(url).search);
  const dataParam = urlParams.get('data');

  // Check if the 'data' parameter exists and is valid (Base64 encoded or LZ string)
  try {
    // You can add further validation here for the 'data' if needed (e.g., ensure it's a valid Base64 or LZ-string).
    if (!dataParam) {
      return false; // If there's no 'data' parameter
    }
    return true; // The URL is valid
  } catch (error) {
    return false; // Invalid URL structure or failed JSON parsing
  }
}

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
  },
  setup() {
    const state = reactive({
      data: null
    })
    function onDecode(data) {
      state.data = data
      console.log("Here!");
      const valid = validateWordProblemWeaverUrl(data);
      if (valid) {
        console.log("Valid!");
        console.log(data)
        window.location.replace = data; // Redirect the user to the URL
      } else {
        alert("Invalid QR code! Try again or ask your teacher for a new QR code.");
      }
    }
    return {
      ...toRefs(state),
      onDecode
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

.stream {
  max-height: 500px;
  max-width: 500px;
  margin: auto;
}
.frame {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
}
</style>
