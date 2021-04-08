<template>
  <div class="flex w-full">
    <button @click="emitOperation('deposit')" class="bg-green-500">
      Depósito
    </button>

    <button @click="emitOperation('payment')" class="bg-yellow-500">
      Pagamento
    </button>

    <button @click="emitOperation('withdraw')" class="bg-blue-600">
      Saque
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppAccountOperations",
  setup(_, { emit }) {
    const emitOperation = (operation: string) => {
      emit("operationClick", operation);
    };

    return { emitOperation };
  },
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
