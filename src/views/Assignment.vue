<template>
    <div>
      <div v-if="state.errorMessage" class="error">
        {{ state.errorMessage }}
      </div>
      <div v-else>
        <h1>Assignment Details</h1>
        <pre>{{ state.decodedData }}</pre>
      </div>
    </div>
  </template>

<script>
import LZString from "lz-string";
import { reactive, onMounted } from "vue";

function decodeURL() {
  try {
    // Get the current URL
    const currentUrl = window.location.href;

    // Parse the URL and extract the path
    const urlObject = new URL(currentUrl);
    const pathSegments = urlObject.pathname.split("/");

    // The last segment is the encoded data
    const encodedData = pathSegments[pathSegments.length - 1];

    if (!encodedData) {
      throw new Error("No encoded data found in the URL.");
    }

    // Decode the base64-encoded, LZ-compressed data
    const decodedJson = LZString.decompressFromEncodedURIComponent(encodedData);

    if (!decodedJson) {
      throw new Error("Failed to decompress the data.");
    }

    // Parse the JSON
    const dataObject = JSON.parse(decodedJson);

    return dataObject;
  } catch (error) {
    console.error("Error decoding URL:", error);
    return { error: "Invalid or corrupted URL." };
  }
}

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
    }
  },
  setup() {
    const state = reactive({
      errorMessage: null,
      decodedData: null,
    });

    onMounted(() => {
      try {
        const result = decodeURL(); // Decodes the URL directly
        if (result.error) {
          state.errorMessage = result.error; // Set error message if decoding fails
        } else {
          state.decodedData = result; // Set decoded data
        }
      } catch (error) {
        state.errorMessage = "An unexpected error occurred.";
        console.error(error);
      }
    });

    return {
      state,
    };
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
