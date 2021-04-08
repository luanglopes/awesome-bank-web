<template>
  <form
    class="flex flex-col"
    @submit.prevent.stop="handleSubmit"
    autocomplete="off"
  >
    <label class="mb-1 text-sm font-bold" for="amount">Valor</label>
    <app-input
      class="mb-4"
      v-model="form.amount"
      name="amount"
      id="amount"
      required
    />

    <button class="rounded bg-green-600 px-2 py-1 text-white" type="submit">
      Efetuar Saque
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, FormHTMLAttributes, reactive } from "vue";

import AppInput from "./AppInput.vue";

export default defineComponent({
  name: "AppWithdrawForm",
  components: { AppInput },
  setup(_, { emit }) {
    const form = reactive({
      amount: "",
    });

    const handleSubmit: FormHTMLAttributes["onSubmit"] = () => {
      const formData = { ...form };

      emit("withdraw", formData);
    };

    return { handleSubmit, form };
  },
});
</script>
