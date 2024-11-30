import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BalmUI from 'balm-ui'; // Official Google Material Components
import 'balm-ui-css'; // BalmUI styles

const app = createApp(App);

app.use(BalmUI);
app.use(router).mount("#app");
