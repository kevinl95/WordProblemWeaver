<template>
    <div class="assignment-container">
      <h2>Assignment</h2>
      <div v-if="state.decodedData && state.decodedData.length > 0" class="assignment-card">
        <!-- Show loading spinner while generating word problems -->
        <div id="loadingSpinner">
            <ui-spinner active class="loading-spinner" />
        </div>
        <ui-form type="|" @submit.prevent="handleSubmit">
            <div v-for="(problemPair, index) in state.decodedData" :key="index" class="problem">
            <label :id="'problem-' + index" :for="'problem-' + index">{{index + 1}}. Loading...</label> <!-- Dynamically show label -->            <br></br>
            <ui-textfield
              placeholder="Enter your answer"
              v-model="userAnswers[index]"
              :id="'input-' + index"
              outlined
            />
            <span v-if="isWrong(problemPair)" class="error">Wrong answer</span>
          </div>
          <ui-button raised :style="{ backgroundColor: '#7e9eff', color: 'white' }" type="submit" @click="handleSubmit">
            Submit Assignment
          </ui-button>
        </ui-form>
  
        <!-- Print button -->
        <ui-button raised :style="{ backgroundColor: '#4caf50', color: 'white' }" @click="printPage">
          Print
        </ui-button>
      </div>
      <div v-else>
        <p>Error: Invalid assignment data or link, please try again.</p>
      </div>
    </div>
  </template>

<script>
import LZString from "lz-string";
import { reactive, onMounted } from "vue";

async function generateWordProblem(problem) {
    const problemString = problem.replace(/\$/g, '');
    
    const writer = await ai.writer.create({
        tone: "casual",
        length: "short",
        format: "plain-text"
    });

    const result = await writer.write(
        'A creative and fun word problem with a hint that does not give away the answer based on the following mathematical formula "' + problemString + '". The word problem should not change the type of the problem or the quantities involved. Do not require units on answers.'
    );
    return result
}

// Async function to update the label for each problem with a generated word problem
async function generateWordProblemForAll(decodedData) {
    for (let i = 0; i < decodedData.length; i++) {
        const problemPair = decodedData[i];
        const wordProblem = await generateWordProblem(problemPair[0]); // Generate word problem based on formula
        const label = document.getElementById('problem-' + i);
        const newIndex = i + 1;
        label.textContent = newIndex.toString() + ". " + wordProblem;
    }
    const spinner = document.getElementById("loadingSpinner");
    spinner.style.display = 'none';
}

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
      userAnswers: [], // Store user's answers in an array
    };
  },
  methods: {
     // Function to handle form submission and check answers
     handleSubmit() {
      let allCorrect = true;

      state.decodedData.forEach((problemPair) => {
        const [problem, correctAnswer] = problemPair;
        const userAnswer = state.userAnswers[index];
        if (userAnswer !== correctAnswer) {
          problemPair[2] = true; // Mark as incorrect
          allCorrect = false;
        } else {
          problemPair[2] = false; // Mark as correct
        }
      });

      if (allCorrect) {
        alert("All answers are correct!");
      } else {
        alert("Some answers are wrong. Please try again.");
      }
    },

    // Function to check if the answer is wrong
    isWrong(problemPair) {
      return problemPair[2] === true; // 2 is where we store whether the answer is wrong
    },

    // Function to print the page
    printPage() {
      window.print();
    },
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
          state.userAnswers = Array(result.length).fill(''); // Initialize user answers array
          generateWordProblemForAll(result); // Generate word problems for all problems on mount
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
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
}
.assignment-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.problem {
  margin-bottom: 16px;
}
.error {
  color: red;
  font-size: 0.9rem;
  display: block;
  margin-top: 4px;
}
.loading-spinner {
  display: block;
  margin: 0 auto;
}
</style>
