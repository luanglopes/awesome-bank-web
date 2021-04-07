<template>
  <form
    class="flex flex-col"
    @submit.prevent.stop="handleSubmit"
    autocomplete="off"
  >
    <label class="mb-1 text-sm font-bold" for="accountNumber">
      Número da conta
    </label>
    <app-input
      class="mb-4"
      v-model="form.accountNumber"
      name="accountNumber"
      id="accountNumber"
      required
    />

    <label class="mb-1 text-sm font-bold" for="password">Senha</label>
    <app-input
      class="mb-4"
      v-model="form.password"
      name="password"
      id="password"
      required
      type="password"
    />
    <button class="rounded bg-green-600 px-2 py-1 text-white" type="submit">
      Entrar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, FormHTMLAttributes, reactive } from "vue";

import AppInput from "./AppInput.vue";

export default defineComponent({
  components: { AppInput },
  name: "AppLoginForm",
  setup(_, { emit }) {
    const form = reactive({
      accountNumber: "",
      password: "",
    });

    const handleSubmit: FormHTMLAttributes["onSubmit"] = () => {
      const formData = { ...form };

      emit("login", formData);
    };

    return { handleSubmit, form };
  },
});
</script>
