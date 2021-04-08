<template>
  <form
    class="flex flex-col"
    @submit.prevent.stop="handleSubmit"
    autocomplete="off"
  >
    <label class="mb-1 text-sm font-bold" for="documentId">
      Identificador do documento
    </label>
    <app-input
      class="mb-4"
      v-model="form.documentId"
      name="documentId"
      id="documentId"
      required
    />

    <label class="mb-1 text-sm font-bold" for="amount">Valor</label>
    <app-input
      class="mb-4"
      v-model="form.amount"
      name="amount"
      id="amount"
      required
    />

    <label class="mb-1 text-sm font-bold" for="description">Descrição</label>
    <app-input
      class="mb-4"
      v-model="form.description"
      name="description"
      id="description"
    />

    <button class="rounded bg-green-600 px-2 py-1 text-white" type="submit">
      Pagar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, FormHTMLAttributes, reactive } from "vue";

import AppInput from "./AppInput.vue";

export default defineComponent({
  name: "AppPaymentForm",
  components: { AppInput },
  setup(_, { emit }) {
    const form = reactive({
      amount: "",
      documentId: "",
      description: "",
    });

    const handleSubmit: FormHTMLAttributes["onSubmit"] = () => {
      const formData = { ...form };

      emit("payment", formData);
    };

    return { handleSubmit, form };
  },
});
</script>
