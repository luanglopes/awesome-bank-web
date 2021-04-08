<template>
  <main class="max-w-lg mx-auto my-14">
    <h1 class="mb-8 text-4xl font-bold">Bem vindo ao Awesome Bank</h1>

    <div class="flex justify-items-stretch flex-col md:flex-row text-center">
      <div
        class="mb-4 md:mb-0 md:mr-4 flex-1 flex flex-col items-center justify-between p-6 rounded-lg border"
      >
        <h2 class="text-xl font-bold mb-2">Já tem uma conta?</h2>

        <router-link
          class="px-4 py-2 bg-blue-500 rounded text-white hover:bg-opacity-70"
          :to="{ name: 'Login' }"
        >
          Acessar conta
        </router-link>
      </div>

      <div class="flex-1 flex flex-col items-center p-6 rounded-lg border">
        <h2 class="text-xl font-bold mb-4">Ainda não tem uma conta?</h2>

        <router-link
          class="px-4 py-2 bg-green-500 rounded text-white hover:bg-opacity-70"
          :to="{ name: 'SignIn' }"
        >
          Criar conta
        </router-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
