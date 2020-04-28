import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueToastify from "vue-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as VueSpinnersCss from "vue-spinners-css";
import "./styles/global.css";
import "vue-material-design-icons/styles.css";

library.add(faArrowLeft);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.config.productionTip = false;
Vue.use(VueToastify, {
  successDuration: 2000,
  errorDuration: 3000,
  theme: "light",
  iconEnabled: false,
  maxToasts: 3,
});

Vue.use(VueSpinnersCss);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
