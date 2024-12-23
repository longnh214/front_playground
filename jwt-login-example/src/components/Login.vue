<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label>Username</label>
          <input v-model="username" type="username" required />
        </div>
        <div>
          <label>Password</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
      };
    },
    methods: {
      ...mapActions('auth', ['login', 'logout']),
      async handleLogin() {
        try {
          await this.login({ username: this.username, password: this.password });
          this.$router.push('/');
        } catch (err) {
          this.error = 'Invalid username or password';
        }
      },
    },
  };
  </script>  