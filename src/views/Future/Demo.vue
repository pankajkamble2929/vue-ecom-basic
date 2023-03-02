<!-- <template>
    <div class="p-10">
      <h1 class="text-2xl mb-5">Add Product</h1>
      <form class="max-w-lg" @submit.prevent="addProduct">
        <div class="mb-5">
          <label for="title" class="block mb-1 font-bold">Title</label>
          <input type="text" id="title" class="w-full px-4 py-2 border rounded" v-model="product.title" required>
        </div>
        <div class="mb-5">
          <label for="description" class="block mb-1 font-bold">Description</label>
          <textarea id="description" class="w-full px-4 py-2 border rounded" v-model="product.description" required></textarea>
        </div>
        <div class="mb-5">
          <label for="price" class="block mb-1 font-bold">Price</label>
          <input type="number" id="price" class="w-full px-4 py-2 border rounded" v-model="product.price" required>
        </div>
        <div class="mb-5">
          <label for="image" class="block mb-1 font-bold">Image</label>
          <input type="file" id="image" class="w-full px-4 py-2 border rounded" @change="onImageChange" required>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'firebase/storage';
  import { productsRef, storageRef } from '@/firebase';
  
  export default {
    data() {
      return {
        product: {
          title: '',
          description: '',
          price: '',
          imageUrl: '',
        },
        imageFile: null,
      };
    },
    methods: {
      async addProduct() {
        try {
          const productsSnapshot = await productsRef.push(this.product);
          const productId = productsSnapshot.key;
          const imageExtension = this.imageFile.name.split('.').pop();
          const imageRef = storageRef.child(`products/${productId}.${imageExtension}`);
          await imageRef.put(this.imageFile);
          const imageUrl = await imageRef.getDownloadURL();
          await productsRef.child(productId).update({ imageUrl });
          this.$router.push('/');
        } catch (error) {
          console.error(error);
        }
      },
      onImageChange(event) {
        this.imageFile = event.target.files[0];
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
   -->