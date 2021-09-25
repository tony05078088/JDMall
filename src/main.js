/* eslint-disable quotes */
import "normalize.css";
import { createApp } from "vue";
import '../public/twicon/twicon.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/base.scss";
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
