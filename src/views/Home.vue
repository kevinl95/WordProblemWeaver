<template>
  <div class="home-container">
    <!-- Welcome Card -->
    <div class="welcome-card">
      <img alt="Word Problem Weaver logo" class="logo" src="@/assets/logo.svg" width="200" height="200" />
      <h1>Welcome to Word Problem Weaver</h1>
      <p>
        Word Problem Weaver is an offline-ready app that helps teachers generate customizable math problem sets with built-in AI. Whether you're in the classroom or at home, easily create problems and share them with students. Once they have visited this page once, students can still complete assignments with the internet off!
      </p>
    </div>

    <!-- Cards for Student/Teacher selection -->
    <div class="role-selection">
      <div class="role-card" @click="selectRole('student')">
        <img alt="Child with a laptop" class="logo" src="@/assets/student.png" width="100" height="100" />
        <h2>I'm a Student</h2>
        <p>Access math problems to practice and improve your skills.</p>
      </div>
      <div class="role-card" @click="selectRole('teacher')">
        <img alt="Teacher with a desk and chalkboard" class="logo" src="@/assets/teacher.png" width="100" height="100" />
        <h2>I'm a Teacher</h2>
        <p>Create and share custom math problem sets for your students.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    selectRole(role) {
      if (role === 'teacher') {
        // Redirect to the teacher page
        this.$router.push({ name: 'TeacherPage' });
      } else if (role === 'student') {
        // Redirect to the student page
        this.$router.push({ name: 'StudentPage' });
      }
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
}

.welcome-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
}

.welcome-card h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.welcome-card p {
  font-size: 1.1rem;
  color: #555;
}

.role-selection {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
}

.role-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.role-card:hover {
  transform: scale(1.05);
}

.role-card h2 {
  font-size: 1.5rem;
  color: #7e9eff; /* Light blue color for headers */
}

.role-card p {
  color: #555;
}
</style>
