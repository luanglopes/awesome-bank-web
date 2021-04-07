<template>
  <main class="my-14">
    <div class="max-w-md mx-auto px-4 md:px-0">
      <router-link
        class="inline-block mb-6 px-2 py-1 border border-blue-400 text-blue-400 rounded"
        :to="{ name: 'Home' }"
      >
        Home
      </router-link>

      <h1 class="text-2xl font-bold mb-6">Acesso conta</h1>

      <app-login-form @login="handleLogin" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppLoginForm from "@/components/AppLoginForm.vue";

interface ICredentials {
  accountNumber: string;
  password: string;
}

export default defineComponent({
  components: { AppLoginForm },
  name: "Login",
  setup() {
    const handleLogin = (credentials: ICredentials) => {
      console.log(credentials);
    };

    return { handleLogin };
  },
});
</script>
