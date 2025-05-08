import { createApp } from "vue";
import router from "../src/routes/index.js";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
