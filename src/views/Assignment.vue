<template>
  <div class="assignment-container">
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>

    <div v-else>
      <h2>Assignment</h2>
      <p><strong>Problem Types:</strong> {{ decodedData.problemTypes.join(", ") }}</p>
      <p><strong>Number of Problems:</strong> {{ decodedData.problemCount }}</p>

      <div v-for="(problemType, index) in decodedData.problemTypes" :key="index">
        <p><strong>{{ problemType }}:</strong></p>
        <ul>
          <!-- Here, you would render the problems based on the problem type -->
          <li v-for="(problem, i) in generateProblems(problemType)" :key="i">{{ problem }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LZString from "lz-string";
import { ref, onMounted } from "vue";

export default {
  data() {
    return {
      decodedData: null,
      errorMessage: "",
    };
  },
  methods: {
    generateProblems(problemType) {
      // This function would generate random problems based on the problem type
      // You can replace it with the actual logic for generating problems.
      return Array.from({ length: 5 }, (_, i) => `${problemType} Problem #${i + 1}`);
    },
    decodeUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      const encodedData = urlParams.get("data");

      if (!encodedData) {
        this.errorMessage = "Invalid or missing data.";
        return;
      }

      try {
        const decodedJson = LZString.decompressFromEncodedURIComponent(encodedData);
        if (decodedJson) {
          this.decodedData = JSON.parse(decodedJson);
        } else {
          this.errorMessage = "Failed to decode assignment data.";
        }
      } catch (e) {
        this.errorMessage = "Error parsing the assignment data.";
      }
    },
  },
  onMounted() {
    this.decodeUrl();
  },
};
</script>

<style scoped>
.assignment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  text-align: center;
  padding: 2rem;
}

.error-message {
  color: red;
  font-weight: bold;
}

h2 {
  color: #7e9eff;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
