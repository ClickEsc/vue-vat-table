import { createApp } from 'vue';
import naive from 'naive-ui';
import './styles/style.css';
import App from './App.vue';

const app = createApp(App);
app.use(naive);

app.mount('#app');
