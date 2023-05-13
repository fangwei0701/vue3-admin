import { createApp } from "vue";
import Antd from "ant-design-vue";
import vue3videoPlay from "vue3-video-play";

import App from "./App.vue";
import i18n from "@/i18n";
import store from "./store";
import router from "./router";
import { setupShared } from "./shared";
// 引入element3样式
import "ant-design-vue/dist/antd.css";
// 引入全局样式
import "./style/index.scss";
// 引入css
import "vue3-video-play/dist/style.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd);
app.use(i18n);
app.use(vue3videoPlay);
setupShared(app);
app.mount("#app");
