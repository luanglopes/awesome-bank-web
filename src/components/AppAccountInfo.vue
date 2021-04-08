<template>
  <div class="flex rounded-md items-center">
    <img
      class="h-14 w-14 rounded-full object-cover mr-4"
      src="https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
      alt="avatar"
    />

    <div class="flex flex-col">
      <span class="text-lg text-gray-700">Nome do usuário</span>

      <span class="text-sm text-gray-600">usuário@email.com</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppAccountInfo",
});
</script>
