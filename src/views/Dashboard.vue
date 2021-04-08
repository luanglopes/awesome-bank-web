<template>
  <app-navbar />

  <div class="container mx-auto mt-4 flex flex-col md:flex-row">
    <aside class="flex flex-col mb-4 md:mb-0 md:mr-4">
      <div class="mb-4">
        <app-account-info />
      </div>

      <app-account-balance />
    </aside>

    <main class="border flex-1 rounded-lg p-8">
      <div class="mb-4">
        <app-account-operations @operationClick="handleOperationClick" />
      </div>

      <app-account-transactions />
    </main>
  </div>

  <div
    v-if="isOperationActive"
    class="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-70 flex justify-center items-center"
  >
    <div class="bg-white rounded-md w-full max-w-md relative">
      <div class="flex justify-between px-6 py-3 border-b">
        <h3 class="font-bold">
          <template v-if="currentOperation === 'deposit'">Depósito</template>

          <template v-if="currentOperation === 'payment'">Pagamento</template>

          <template v-if="currentOperation === 'withdraw'">Saque</template>
        </h3>

        <button class="px-2" @click="handleCloseModal">X</button>
      </div>

      <div class="p-6">
        <app-deposit-form
          v-if="currentOperation === 'deposit'"
          @deposit="handleDeposit"
        />

        <app-payment-form
          v-else-if="currentOperation === 'payment'"
          @payment="handlePayment"
        />

        <app-withdraw-form
          v-else-if="currentOperation === 'withdraw'"
          @payment="handleWithdraw"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import AppNavbar from "@/components/AppNavbar.vue";
import AppAccountInfo from "@/components/AppAccountInfo.vue";
import AppAccountBalance from "@/components/AppAccountBalance.vue";
import AppAccountTransactions from "@/components/AppAccountTransactions.vue";
import AppAccountOperations from "@/components/AppAccountOperations.vue";
import AppDepositForm from "@/components/AppDepositForm.vue";
import AppPaymentForm from "@/components/AppPaymentForm.vue";
import AppWithdrawForm from "@/components/AppWithdrawForm.vue";

interface IDepositData {
  amount: number;
  description: string;
}

interface IPaymentData {
  amount: number;
  documentId: string;
  description: string;
}

interface IWithdrawData {
  amount: number;
}

export default defineComponent({
  components: {
    AppNavbar,
    AppAccountInfo,
    AppAccountBalance,
    AppAccountTransactions,
    AppAccountOperations,
    AppDepositForm,
    AppPaymentForm,
    AppWithdrawForm,
  },
  name: "Dashboard",
  setup() {
    const currentOperation = ref<string | null>(null);
    const isOperationActive = computed(() => !!currentOperation.value);

    const handleOperationClick = (operation: string) => {
      currentOperation.value = operation;
    };

    const handleCloseModal = () => {
      currentOperation.value = null;
    };

    const handleDeposit = (data: IDepositData) => {
      console.log(data);
      currentOperation.value = null;
    };

    const handlePayment = (data: IPaymentData) => {
      console.log(data);
      currentOperation.value = null;
    };

    const handleWithdraw = (data: IWithdrawData) => {
      console.log(data);
      currentOperation.value = null;
    };

    return {
      isOperationActive,
      handleOperationClick,
      handleCloseModal,
      currentOperation,
      handleDeposit,
      handlePayment,
      handleWithdraw,
    };
  },
});
</script>
