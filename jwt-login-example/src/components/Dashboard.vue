<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {{ user }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
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
  };
  </script>