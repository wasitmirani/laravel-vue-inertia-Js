require('./bootstrap');
// import { createApp } from 'vue';
// import App from './components/App.vue'
// import router from "./router";


// createApp(App).use(router).mount("#app");


import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'

const el = document.getElementById('app')

createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => require(`./Pages/${name}`).default,
  })
}).use(plugin).mount(el)
