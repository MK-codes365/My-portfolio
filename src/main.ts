import './style.css';
import { lenis, raf } from './lenis';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

export { raf, lenis };
