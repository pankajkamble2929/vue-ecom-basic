<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <h2 class="mb-4 text-2xl font-medium text-center text-gray-800">Login</h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="username" class="block text-gray-700">Username</label>
          <input v-model="username" type="text" name="username" id="username" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required>
        </div>
        <div>
          <label for="password" class="block text-gray-700">Password</label>
          <input v-model="password" type="password" name="password" id="password" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required>
        </div>
        <button type="submit" class="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false
    }
  },
  methods: {
    login() {
      // Dummy username and password
      const dummyUsername = 'user';
      const dummyPassword = 'pass';

      if (this.username === dummyUsername && this.password === dummyPassword) {
        this.isLoggedIn = true;
        this.$router.push('/dashboard');
      } else {
        alert('Invalid username or password!');
      }

      const loginTime = new Date().getTime()
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('loginTime', loginTime)

      const timeout = 30 * 60 * 1000 // 30 minutes in milliseconds
      setTimeout(() => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('loginTime')
        // Redirect the user to the login page
        router.push('/login')
      }, timeout)
    }
  },
  created() {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) {
      this.$router.push('/dashboard')
    }
  }
}
</script>
