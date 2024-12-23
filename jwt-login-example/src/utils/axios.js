import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // Spring Boot API 주소
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 시 JWT 토큰 추가
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt'); // 로컬스토리지에서 토큰 가져오기
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;