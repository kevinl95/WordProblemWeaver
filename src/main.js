import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css'; // BalmUI styles
import QrReader from 'vue3-qr-reader';

const app = createApp(App);

app.use(BalmUI);
app.use(BalmUIPlus);
app.use(QrReader);
app.use(router).mount("#app");
