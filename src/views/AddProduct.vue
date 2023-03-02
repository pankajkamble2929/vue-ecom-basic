<template>
  <LeftSidebar />
    <div class="mt-10 max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Add Product</h1>
      <form @submit.prevent="addProduct">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="title">
            Title
          </label>
          <input
            class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter product title"
            v-model="title"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="description">
            Description
          </label>
          <textarea
            class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter product description"
            v-model="description"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="price">
            Price
          </label>
          <input
            class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Enter product price"
            v-model.text="price"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import LeftSidebar from '../components/LeftSidebar.vue'

  export default {
    created() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const loginTime = localStorage.getItem("loginTime");
        if (isLoggedIn && loginTime) {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - loginTime;
            const timeout = 30 * 60 * 1000; // 30 minutes in milliseconds
            if (elapsedTime > timeout) {
                // Logout the user and redirect to login page
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("loginTime");
                router.push("/login");
            }
        }
        else {
            router.push("/login");
        }
    },
    beforeRouteLeave(to, from, next) {
        // clear authentication state
        next();
    },
    components: { LeftSidebar },
    name: "AddProduct",
    data() {
      return {
        title: "",
        description: "",
        price: "",
      };
    },
    methods: {
      async addProduct() {
        try {
          const res = await axios.post(
            "https://pk-ecommerce-1e56b-default-rtdb.firebaseio.com/products.json",
            {
              title: this.title,
              description: this.description,
              price: this.price,
            }
          );
          console.log(res);
          alert("Product added successfully!");
          this.title = "";
          this.description = "";
          this.price = "";
        } catch (error) {
          console.error(error);
          alert("Error adding product!");
        }
      },
    },
    
  };
  </script>
  
  <style>
  /* Add your own custom styles here */
  </style>
  