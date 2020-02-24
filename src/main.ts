import Vue, { VNode } from "vue";

import "./config/composition";
import i18n from "./config/i18n";
import router from "./config/router";
import App from "./ui/App";

new Vue({
    router,
    render: (h): VNode => h(App),
    i18n
}).$mount("#app");
