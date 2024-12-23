// store/index.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './modules/auth'; // auth 모듈 import

export default createStore({
  modules: {
    auth // auth 모듈 등록
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});