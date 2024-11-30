import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import GenerateAssignment from "@/views/GenerateAssignment.vue";
import About from "@/views/About.vue";
import StudentPage from "@/views/StudentPage.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/generate", component: GenerateAssignment, name: "TeacherPage" },
  { path: "/about", component: About },
  { path: "/student", component: StudentPage, name: "StudentPage"}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;