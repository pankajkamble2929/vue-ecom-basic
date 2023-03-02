<template>
    <div>
      <div class="mb-4">
        <input type="file" @change="handleFileUpload" class="hidden" ref="fileInput">
        <button @click="openFileInput" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Choose Image
        </button>
      </div>
  
      <div v-if="imageUrl" class="mb-4">
        <img :src="imageUrl" class="max-w-xs max-h-xs">
      </div>
  
      <button @click="uploadImage" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" :disabled="!file">
        Upload Image
      </button>
    </div>
  </template>
  
  <script>
  import 'firebase/storage'
  export default {
    data() {
      return {
        file: null,
        imageUrl: null,
      }
    },
    methods: {
      openFileInput() {
        this.$refs.fileInput.click()
      },
      handleFileUpload(event) {
        this.file = event.target.files[0]
        this.previewImage()
      },
      previewImage() {
        const reader = new FileReader()
        reader.readAsDataURL(this.file)
        reader.onload = event => {
          this.imageUrl = event.target.result
        }
      },
      uploadImage() {
        const filename = `${new Date().getTime()}_${this.file.name}`
        const storageFile = storageRef.child(filename)
        storageFile.put(this.file).then(snapshot => {
          console.log('File uploaded successfully.')
          storageFile.getDownloadURL().then(url => {
            console.log('File URL:', url)
            this.$emit('imageUploaded', url)
          })
        }).catch(error => {
          console.error('Error uploading file:', error)
        })
      }
    }
  }
  </script>
  