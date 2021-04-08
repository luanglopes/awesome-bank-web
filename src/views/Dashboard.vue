<template>
  <app-navbar />

  <div class="container mx-auto mt-4 flex">
    <aside class="flex flex-col mb-4 md:mb-0 md:mr-4">
      <div class="mb-4">
        <app-account-info />
      </div>

      <app-account-balance />
    </aside>

    <main class="border flex-1 rounded-lg p-8">
      <div class="mb-4">
        <app-account-operations />
      </div>

      <app-account-transactions />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppNavbar from "@/components/AppNavbar.vue";
import AppAccountInfo from "@/components/AppAccountInfo.vue";
import AppAccountBalance from "@/components/AppAccountBalance.vue";
import AppAccountTransactions from "@/components/AppAccountTransactions.vue";
import AppAccountOperations from "@/components/AppAccountOperations.vue";

export default defineComponent({
  components: {
    AppNavbar,
    AppAccountInfo,
    AppAccountBalance,
    AppAccountTransactions,
    AppAccountOperations,
  },
  name: "Dashboard",
});
</script>
