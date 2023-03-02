<template>
<header class="sticky top-0 z-50 bg-white shadow-lg">
  <nav class="bg-slate-200 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/"><img class="h-8 w-auto" src="../assets/logo.svg" alt="Logo"></router-link>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4 py-3">
            <router-link v-if="!$route.path.includes('/dashboard') && !$route.path.includes('/add-product')" class="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400 mr-4" to="/">Home</router-link>
            <button v-if="$route.path !== '/dashboard' && $route.path !== '/add-product'" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="login">Login</button>
            <button v-if="$route.path === '/dashboard' || $route.path === '/add-product'" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    login() {
      // navigate to the login page
      this.$router.push('/login');
    },
    logout() {
      // clear session and navigate to the login page
      sessionStorage.clear();
      this.$router.push('/login');
      localStorage.removeItem('isLoggedIn');
    }
  }
}
</script>

<style>
/* Add your own custom styles here */
</style>
