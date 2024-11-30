<template>
  <div class="assignment-container">
    <div class="assignment-card">
      <h2>Generate Assignment</h2>
      <p>Select what problem types you would like to appear in your assignment. Then, select the number of problems you want in this assignment. A random set of problems made up of your selections will be generated. Each student upon loading the assignment will receive different word problems but they will be derived from the same set of practice prooblems.</p>
      <ui-form nowrap item-margin-bottom="16" label-width="80" type="|">
        <ui-form-field>
          <label class="required">Select Problem Types: </label>
          <ui-form-field v-for="problem in problemTypes" :key="problem">
            <ui-checkbox :value="problem" :input-id="problem"></ui-checkbox>
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
        "Square",
        "Simplify Square Root",
        "Basic Algebra",
        "Combine Like Terms",
        "Compound Interest",
        "Distance Between Two Points",
        "Factoring"
      ]
    };
  },
  methods: {
    generateAssignment() {
      if (this.selectedProblemTypes.length === 0) {
        alert("Please select at least one problem type.");
        return;
      }
      if (this.problemCount < 1) {
        alert("Please enter a valid number of problems.");
        return;
      }
      console.log("Generating assignment with:", {
        problemTypes: this.selectedProblemTypes,
        problemCount: this.problemCount
      });
      // Logic to generate the assignment will go here
    }
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
