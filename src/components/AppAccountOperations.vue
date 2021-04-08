<template>
  <div class="flex w-full">
    <button class="bg-green-400">Depósito</button>

    <button class="bg-yellow-500">Pagamento</button>

    <button class="bg-blue-600">Saque</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppAccountOperations",
});
</script>

<style lang="postcss" scoped>
button {
  @apply rounded px-2 py-1 text-white hover:bg-opacity-70;
}

button:not(:last-child) {
  @apply mr-4;
}
</style>
