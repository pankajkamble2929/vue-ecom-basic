<template>
    <div class="file-uploader">
      <label class="block mb-2 font-bold text-gray-700">{{ label }}</label>
      <input type="file" @change="uploadFile" />
      <div v-if="uploading" class="mt-2 text-center">
        <p>Uploading file...</p>
        <progress class="mt-2" :value="uploadProgress" max="100"></progress>
      </div>
      <div v-if="uploadedUrl" class="mt-2">
        <p>File uploaded successfully:</p>
        <a :href="uploadedUrl" target="_blank">{{ uploadedUrl }}</a>
      </div>
      <div v-if="error" class="mt-2 text-red-500">
        <p>{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { storage } from "@/firebase";
  
  export default {
    name: "FileUploader",
    props: {
      label: {
        type: String,
        required: true,
      },
      allowedTypes: {
        type: Array,
        default: () => ["image/jpeg", "image/png"],
      },
      maxSize: {
        type: Number,
        default: 5 * 1024 * 1024, // 5MB in bytes
      },
    },
    setup(props) {
      const uploading = ref(false);
      const uploadProgress = ref(0);
      const uploadedUrl = ref(null);
      const error = ref(null);
  
      const uploadFile = async (event) => {
        uploading.value = true;
        uploadProgress.value = 0;
        error.value = null;
  
        const file = event.target.files[0];
  
        // Check file type and size
        if (!props.allowedTypes.includes(file.type)) {
          error.value = `File type must be one of: ${props.allowedTypes.join(", ")}`;
          uploading.value = false;
          return;
        }
        if (file.size > props.maxSize) {
          error.value = `File size must not exceed ${props.maxSize / 1024 / 1024} MB`;
          uploading.value = false;
          return;
        }
  
        // Upload file to Firebase Storage
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        const uploadTask = fileRef.put(file);
  
        // Update progress
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploadProgress.value = progress;
          },
          (error) => {
            console.error(error);
            uploading.value = false;
            error.value = "Failed to upload file";
          },
          async () => {
            // Upload complete, get file URL
            uploadedUrl.value = await fileRef.getDownloadURL();
            uploading.value = false;
          }
        );
      };
  
      return { uploading, uploadProgress, uploadedUrl, error, uploadFile };
    },
  };
  </script>
  
  <style scoped>
  .file-uploader {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  </style>
  