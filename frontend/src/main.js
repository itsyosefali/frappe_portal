import { createApp } from "vue";
import {
  FrappeUI,
  Button,
  onOutsideClickDirective,
  setConfig,
  frappeRequest,
} from "frappe-ui";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import mitt from "mitt";
import "./index.css";
import VueTippy from "vue-tippy";

setConfig("resourceFetcher", frappeRequest);
const emitter = mitt();
const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.config.globalProperties.emitter = emitter;
app.provide("emitter", emitter);
app.use(router);
app.use(store);
app.use(FrappeUI);
app.directive("on-outside-click", onOutsideClickDirective);
app.use(
  VueTippy,
  // optional
  {
    directive: "tippy", // => v-tippy
    component: "tippy", // => <tippy/>
  }
);
app.directive("focus", {
  mounted: (el) => el.focus(),
});

setConfig("resourceFetcher", (options) => {
  return frappeRequest({
    ...options,
    onError(err) {
      if (err.messages && err.messages[0]) {
        return;
      }
    },
  });
});
app.component("Button", Button);
app.mount("#app");
