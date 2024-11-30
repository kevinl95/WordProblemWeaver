<template>
  <div class="about-container">
    <!-- About Content -->
    <div class="about-card">
      <h1>About Word Problem Weaver</h1>
      <p>
        Word Problem Weaver is an offline-ready Progressive Web App (PWA) designed to help teachers create customizable math problem sets for their students using their browser's built-in AI. Whether you're in the classroom or at home, this tool enables easy sharing of practice materials with your students, even without an internet connection.
      </p>
      <p>
        Built with Vue.js, this project aims to make math education more accessible, especially in areas where reliable or fast internet access can be a challenge. It also provides a great way for teachers to engage their students in meaningful practice outside the classroom.
      </p>
      <p>
        <a href="https://github.com/kevinl95/WordProblemWeaver" target="_blank" class="github-link">
          View the project on GitHub
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
}

.about-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
}

.about-card h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.about-card p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
}

.github-link {
  font-size: 1.1rem;
  color: #7e9eff;
  text-decoration: none;
  font-weight: bold;
}

.github-link:hover {
  text-decoration: underline;
}
</style>
