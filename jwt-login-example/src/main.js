import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';  // Vuex 스토어 임포트
import router from './router/index.js';  // Vue Router 임포트

const app = createApp(App);

app.use(store);  // Vuex 스토어 연결
app.use(router);  // Vue Router 연결

app.mount('#app');  // 애플리케이션 마운트