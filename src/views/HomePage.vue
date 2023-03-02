<template>
  <div class="p-4">
    <h1 class="text-5xl text-center">PK Ecommerce Website</h1>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <div v-for="(product, index) in products" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-4">
          <h2 class="font-bold text-lg text-center">{{ product.title }}</h2>
          <img :src="images" class="object-contain mb-2" alt="">
          <p class="mt-4 text-gray-900 font-bold text-lg mb-2">₹ {{ product.price }}</p>
          <p class="text-gray-600 text-sm">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  setup() {
    const products = ref([])

    onMounted(async () => {
      try {
        const response = await axios.get('https://pk-ecommerce-1e56b-default-rtdb.firebaseio.com/products.json')
        products.value = Object.values(response.data)
      } catch (error) {
        console.error(error)
      }
    })

    return { products,
      images:  'https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg?w=1800&t=st=1677652534~exp=1677653134~hmac=327c924300cf9280babd00ff794815c7cc4a954d6560ceab17e5c8269738f88a',
       }
  }
}
</script>

<style>
/* Optional custom styling for card layout */
/* .card { ... } */
</style>
