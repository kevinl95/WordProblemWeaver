<template>
  <header class="banner">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Word Problem Weaver Logo" class="logo-img" />
    </div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/student">Access Assignment</router-link>
      <router-link to="/generate">Generate Assignment</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <ui-dialog v-model="dialogVisible" persistent>
      <ui-card tabindex="-1">
        <ui-card-content>
            It seems your browser doesn't support built-in AI with Gemini Nano. Please re-open this page in the latest version of Google Chrome or update your browser.
        </ui-card-content>
        <ui-card-actions>
          <ui-button color="primary" @click="dialogVisible = false">Close</ui-button>
        </ui-card-actions>
      </ui-card>
    </ui-dialog>
  </header>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      dialogVisible: false,
    };
  },
  async mounted() {
    try {
      // Check if the AI language model feature is available
      const isAvailable = (await ai.languageModel.capabilities()).available;
      if (!isAvailable) {
        this.dialogVisible = true;
      }
    } catch (error) {
      console.error("Error checking AI capabilities: ", error);
      this.dialogVisible = true;
    }
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7e9eff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.logo-img {
  height: 40px;
}
.nav a {
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
  font-size: 16px;
  transition: color 0.3s;
}
.nav a:hover {
  color: #ffe47e;
}
</style>
