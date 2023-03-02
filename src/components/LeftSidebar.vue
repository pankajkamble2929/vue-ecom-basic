<template>
  <div class="mt-16 fixed inset-y-0 left-0 w-1/5 bg-gray-800 h-screen overflow-y-auto">
    <router-link to="/dashboard" class="text-white text-lg font-semibold"><div class="cursor-pointer py-2 px-4 bg-gray-700 hover:bg-gray-900 mt-2">
      Dashboard
      </div>
    </router-link>
    <router-link to="/add-product" class="text-white text-lg font-semibold"><div class="cursor-pointer py-2 px-4 bg-gray-700 hover:bg-gray-900 mt-2">
      Add Product
      </div></router-link>
  </div>
</template>

  
  <script>
  export default {
    name: "LeftSidebar",
  };
  </script>
  
  <style>
  /* Add your own custom styles here */
  </style>
  