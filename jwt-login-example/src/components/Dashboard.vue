<template>
    <div>
      <h1>Dashboard</h1>
      <p>{{ message }}, {{ user }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import apiClient from '@/utils/axios';

  export default {
    data(){
      return{
        message: '',
      };
    },
    computed: {
      ...mapGetters('auth', ['getUsername']),
      user() {
        return this.getUsername;
      },
    },
    methods: {
      ...mapActions('auth', ['logout']),
      handleLogout() {
        this.logout();
        this.$router.push('/login');
      },
    },
    mounted() {
    // 서버에 요청을 보내 데이터를 가져옴
      apiClient
        .get('/test') // API 호출
        .then((response) => {
          console.log(response.data);
          this.message = response.data; // 응답 데이터를 message에 저장
        })
        .catch((error) => {
          console.error('Error fetching message:', error); // 에러 처리
          this.message = 'Error fetching data'; // 오류 메시지 표시
        });
    },
  };
  </script>