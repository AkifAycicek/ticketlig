import { App, createApp } from 'vue';
import AppVue from './App.vue';

export let app: App;

export function createVueApp() {
   app = createApp(AppVue);
   return app;
}
