<template>
  <div class="assignment-container">
    <div class="assignment-card">
      <h2>Generate Assignment</h2>
      <p>Select what problem types you would like to appear in your assignment. Then, select the number of problems you want in this assignment. A random set of problems made up of your selections will be generated. Each student upon loading the assignment will receive different word problems but they will be derived from the same set of practice prooblems.</p>
      <ui-form nowrap item-margin-bottom="16" label-width="80" type="|">
        <ui-form-field>
          <label class="required">Select Problem Types: </label>
          <ui-form-field v-for="problem in problemTypes" :key="problem">
            <ui-checkbox :value="problem" :input-id="problem" v-model="selectedProblemTypes"></ui-checkbox>
            <label :for="problem">{{ problem }}</label>
          </ui-form-field>
        </ui-form-field>
        <ui-form-field>
          <label class="required">Number of Problems: </label>
          <ui-textfield
            v-model="problemCount"
            type="number"
            min="1"
            max="100"
            outlined
            placeholder="Enter number of problems"
          ></ui-textfield>
        </ui-form-field>
        <ui-button raised :style="{ backgroundColor: '#7e9eff', color: 'white' }" @click="generateAssignment">
          Generate Assignment
        </ui-button>
      </ui-form>
    </div>
  </div>
</template>

<script>
import * as mathgenerator from 'mathgenerator';

function randint(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random integer between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomchoice(option1, option2) {
  // Use Math.random() to pick randomly between 0 or 1
  return Math.random() < 0.5 ? option1 : option2;
}


function division(max_a=25, max_b=25) {
    const a = randint(1, max_a);
    const b = randint(1, max_b);

    const divisor = a * b;
    const dividend = randomchoice(a, b);
    const quotient = Math.floor(divisor / dividend);

    return [`$${divisor}}\\div${dividend}=$`, `$${quotient}$`];
}

export default {
  data() {
    return {
      selectedProblemTypes: [], // Array to store selected problem types
      problemCount: 10, // Default number of problems
      problemTypes: [
        "Addition",
        "Subtraction",
        "Absolute Difference",
        "Compare Fractions",
        "Cube Root",
        "Divide Fractions",
        "Division",
        "Exponentiation",
        "Factorial",
        "Fraction Multiplication",
        "Fraction to Decimal",
        "Is Prime",
        "Is Composite",
        "Greatest Common Divisor",
        "Multiplication",
        "Percentage Difference",
        "Percentage Error",
        "Power of Powers",
        "Square"
      ]
    };
  },
  methods: {
    generateAssignment() {
      if (this.selectedProblemTypes.length === 0) {
        alert('Please select at least one problem type.');
        return;
      }

      if (this.problemCount < 1) {
        alert('Please enter a valid number of problems.');
        return;
      }

      // Prepare to generate problems
      const problems = [];
      const totalProblems = this.problemCount;
      const selectedTypes = this.selectedProblemTypes;

      for (let i = 0; i < totalProblems; i++) {
        // Randomly pick a problem type
        const randomIndex = Math.floor(Math.random() * selectedTypes.length);
        const selectedType = selectedTypes[randomIndex];
        console.log(selectedType)
        // Convert the checkbox label to function name
        const functionName = selectedType.toLowerCase().replace(/ /g, '_');

        // Check if the function exists in mathgenerator
        if (mathgenerator[functionName]) {
          console.log(functionName)
          let problem = null;
          if (functionName === "division") {
            console.log("In here")
            problem = division();
          } else {
            problem = mathgenerator[functionName]();
          }
          problems.push(problem);
        } else {
          console.warn(`Function ${functionName} not found in mathgenerator`);
        }
      }

      // Display the generated problems (replace this with actual usage in your app)
      console.log('Generated Problems:', problems);
      alert('Assignment generated successfully! Check the console for problems.');

      // TODO: Replace with code to display or save the problems in your app
    },

  }
};
</script>

<style scoped>
h2 {
  color: #7e9eff;
  text-align: center;
}
ui-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.assignment-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  text-align: center;
}
.assignment-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
}
</style>
