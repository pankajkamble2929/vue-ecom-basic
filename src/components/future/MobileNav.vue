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
                <router-link v-if="!$route.path.includes('/dashboard') && !$route.path.includes('/add-product')" class="block" to="/">Home</router-link>
                <button v-if="$route.path !== '/dashboard' && $route.path !== '/add-product'" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="login">Login</button>
                <button v-if="$route.path === '/dashboard' || $route.path === '/add-product'" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="logout">Logout</button>
              </div>
            </div>
          </div>
        </div>
    
    <!-- Mobile Menu-->
      <div class="flex md:hidden float-right -mt-10">
      <button @click="isDrawerOpen = !isDrawerOpen" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="Open mobile menu">
        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
          <path v-if="isDrawerOpen" fill-rule="evenodd" clip-rule="evenodd" d="M19 6.41L13.42 12l5.59 5.59L17 19l-6-6 6-6 2.42 2.41zM5 18h14v-2H5v2zm0-5h14v-2H5v2zm0-7h14V4H5v2z"></path>
          <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"></path>
        </svg>
      </button>
    </div>
    
    
    <div class="md:hidden" :class="{ 'block': isDrawerOpen, 'hidden': !isDrawerOpen }">
      <div class="fixed inset-0 z-40">
        <div @click="isDrawerOpen = false" class="absolute inset-0 bg-gray-600 opacity-5"></div>
      </div>
      <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="w-screen max-w-md">
          <div class="h-full flex flex-col py-6 bg-white shadow-xl">
            
            <div class="h-full flex flex-col py-6 bg-white shadow-xl">
              <router-link v-if="!$route.path.includes('/dashboard') && !$route.path.includes('/add-product')" class="bg-slate-200 mb-2 p-2" to="/">Home</router-link>
              <button v-if="$route.path !== '/dashboard' && $route.path !== '/add-product'" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="login">Login</button>
              <button v-if="$route.path === '/dashboard' || $route.path === '/add-product'" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="logout">Logout</button>
            </div>
    
          </div>
        </div>
      </div>
    
    <!-- Close Button-->
      <div class="absolute top-0 right-0 p-2">
      <button @click="closeDrawer" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">
        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    </div>
    
    
      </nav>
    </header>
    
    </template>
    
    <script>
    export default {
      name: 'Navbar',
      name: 'Header',
      data() {
        return {
          isDrawerOpen: false,
        }
      },
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
        },
        toggleDrawer() {
          this.isDrawerOpen = !this.isDrawerOpen
        },
        closeDrawer() {
          this.isDrawerOpen = false
        }
      }
    }
    </script>
    
    <style>
    /* Add your own custom styles here */
    </style>
    