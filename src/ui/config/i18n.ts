import { SetupContext } from "@vue/composition-api";
import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "../../lang/en.js";

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: "en",
    messages: { en }
});

export function $t(context: SetupContext, key: string): string {
    return context.root.$t(key).toString();
}

export default i18n;
