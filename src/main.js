import { createApp } from "vue";
import "./style.css";
import App from "./components/App.vue";
import router from "./router";
import "./services/api.js"; // Importa api.js para que se ejecute al iniciar la app

/**
 * The Vue application instance created using createApp.
 * This is the main entry point for the Vue application.
 * @type {import('vue').App}
 */
const app = createApp(App);
app.use(router);
app.mount("#app");
