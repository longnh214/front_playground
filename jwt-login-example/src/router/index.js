import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../components/Dashboard.vue';
import LoginView from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true } // 인증이 필요한 페이지
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 인증 가드 설정
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('jwt'); // JWT가 저장되어 있는지 확인
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/'); // 인증이 필요하지만 인증되지 않은 경우 로그인 페이지로 리다이렉트
  } else {
    next(); // 인증이 필요하지 않거나 인증된 경우 계속 진행
  }
});

export default router;
