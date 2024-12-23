<template>
  <div id="app">
    <router-view></router-view> <!-- 페이지 렌더링 -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    // Vuex에서 인증 상태 가져오기
    ...mapGetters('auth', ['isLoggedIn']),
  },
  watch: {
    // 인증 상태가 변경될 때마다 페이지를 리프레시하거나, 필요한 행동을 처리할 수 있습니다.
    isAuthenticated(newValue) {
      if (!newValue) {
        // 인증되지 않은 경우 로그인 페이지로 리다이렉트
        this.$router.push('/login');
      }
    },
  },
  mounted() {
    // 예를 들어, 초기화 시 인증 상태를 확인하고 처리하는 로직을 넣을 수 있습니다.
    if (!this.isAuthenticated) {
      this.$router.push('/login'); // 인증되지 않은 경우 로그인 페이지로 리다이렉트
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>