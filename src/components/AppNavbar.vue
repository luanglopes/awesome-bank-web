<template>
  <nav class="sticky top-0 w-full py-2 border-b">
    <div class="container mx-auto flex justify-between">
      <span class="font-bold text-lg">Awesome Bank</span>

      <button class="text-red-500" @click="handleLogout">Sair</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNavbar",
  setup() {
    const handleLogout = () => {
      console.log("sair");
    };

    return { handleLogout };
  },
});
</script>
