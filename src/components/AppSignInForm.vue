<template>
  <form
    class="flex flex-col"
    @submit.prevent.stop="handleSubmit"
    autocomplete="off"
  >
    <label class="mb-1 text-sm font-bold" for="name">Nome completo</label>
    <app-input
      class="mb-4"
      v-model="form.name"
      name="name"
      id="name"
      required
    />

    <label class="mb-1 text-sm font-bold" for="email">Email</label>
    <app-input
      class="mb-4"
      v-model="form.email"
      name="email"
      id="email"
      type="email"
      required
    />

    <label class="mb-1 text-sm font-bold" for="password">Senha</label>
    <app-input
      class="mb-4"
      v-model="form.password"
      name="password"
      id="password"
      type="password"
      required
    />

    <label class="mb-1 text-sm font-bold" for="passwordConfirmation">
      Confirmação de senha
    </label>
    <app-input
      class="mb-4"
      v-model="form.passwordConfirmation"
      name="passwordConfirmation"
      id="passwordConfirmation"
      type="password"
      required
    />

    <button class="rounded bg-green-600 px-2 py-1 text-white" type="submit">
      Criar conta
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, FormHTMLAttributes, reactive } from "vue";

import AppInput from "./AppInput.vue";

export default defineComponent({
  components: { AppInput },
  name: "AppSignInForm",
  setup(_, { emit }) {
    const form = reactive({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });

    const handleSubmit: FormHTMLAttributes["onSubmit"] = () => {
      const formData = { ...form };

      emit("signin", formData);
    };

    return { handleSubmit, form };
  },
});
</script>
