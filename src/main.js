import { createApp } from "vue";
import "./style.css";
import App from "./components/App.vue";
import router from "./router";
import "./services/api.js"; // Importa api.js para que se ejecute al iniciar la app

const app = createApp(App);
app.use(router);
app.mount("#app");
