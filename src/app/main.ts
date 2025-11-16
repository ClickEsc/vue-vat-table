import { createApp } from 'vue';
import naive from 'naive-ui';
import './styles/style.css';
import App from './App.vue';
import i18n from '../shared/lib/locale';

const app = createApp(App);

app.use(i18n);
app.use(naive);

app.mount('#app');
