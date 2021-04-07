<template>
  <main class="my-14">
    <div class="max-w-md mx-auto px-4 md:px-0">
      <router-link
        class="inline-block mb-6 px-2 py-1 border border-blue-400 text-blue-400 rounded"
        :to="{ name: 'Home' }"
      >
        Home
      </router-link>

      <h1 class="text-2xl font-bold mb-6">Criação de conta</h1>

      <app-sign-in-form @signin="handleSignin" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppSignInForm from "@/components/AppSignInForm.vue";

interface ISignInData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default defineComponent({
  components: { AppSignInForm },
  name: "SignIn",
  setup() {
    const handleSignin = (data: ISignInData) => {
      console.log(data);
    };

    return { handleSignin };
  },
});
</script>
