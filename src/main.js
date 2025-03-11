import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import "./styles/common.scss";
import { lazyImgPlugin } from "@/directives";

const app = createApp(App);

document.title = "FLOWER SHOP";

app.use(createPinia().use(piniaPluginPersistedstate));
app.use(router);
app.use(lazyImgPlugin);
app.mount("#app");
