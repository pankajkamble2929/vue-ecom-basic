<template>
  <LeftSidebar />
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold mb-4">Welcome to the Dashboard!</h1>
  </div>
</template>

<script>
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
    components: { LeftSidebar }
}
</script>
