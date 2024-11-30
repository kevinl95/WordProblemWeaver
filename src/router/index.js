import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import GenerateAssignment from "@/views/GenerateAssignment.vue";
import About from "@/views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/generate", component: GenerateAssignment },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
