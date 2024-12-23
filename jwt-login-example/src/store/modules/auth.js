// store/modules/auth.js
import apiClient from '../../utils/axios.js';

const auth = {
  namespaced: true, // 네임스페이스 설정
  state: {
    loginSuccess: false,
    loginError: false,
    username: null,
    password: null
  },
  mutations: {
    loginSuccess(state, { username, password }) {
      state.loginSuccess = true;
      state.username = username;
      state.password = password;
    },
    loginError(state, { username, password }) {
      state.loginError = true;
      state.username = username;
      state.password = password;
    },
    logout(state) {
      state.loginSuccess = false;
      state.loginError = false;
      state.username = null;
      state.password = null;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const result = await apiClient.post('/login', {
            username: username,
            password: password  
        });
        if (result.status === 200) {
          const jwt = result.data; // 응답에서 JWT를 가져옵니다.
          localStorage.setItem('jwt', jwt); // localStorage에 저장합니다.

          commit('loginSuccess', {
            username: username,
            password: password
          });
        }
      } catch (err) {
        commit('loginError', {
          username: username,
          password: password
        });
        throw new Error(err);
      }
    },
    logout({ commit }) {
      localStorage.removeItem('jwt');
      commit('logout');
    }
  },
  getters: {
    isLoggedIn: state => state.loginSuccess,
    hasLoginErrored: state => state.loginError,
    getUsername: state => state.username,
    getPassword: state => state.password
  }
};

export default auth;