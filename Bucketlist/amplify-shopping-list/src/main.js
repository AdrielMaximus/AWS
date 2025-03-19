import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue3";
import awsconfig from "./aws-exports";

import BootstrapVue from "bootstrap-vue";
import { BootstrapVueIcons } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


createApp(App).use(router).mount("#app");
