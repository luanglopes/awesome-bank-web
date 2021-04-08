<template>
  <h1 class="text-lg font-bold mb-2">Histórico</h1>

  <table class="w-full">
    <thead>
      <th>Tipo de operação</th>
      <th>Descrição</th>
      <th>Valor</th>
      <th>Data</th>
    </thead>

    <tbody>
      <tr>
        <td>Pagamento</td>
        <td>fatura do cartão</td>
        <td class="text-red-600">R$ 250,00</td>
        <td>07/04/2021 14:40</td>
      </tr>

      <tr>
        <td>PIX</td>
        <td>divisão da conta do restaurante</td>
        <td class="text-green-600">R$ 100,00</td>
        <td>06/04/2021 21:30</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppAccountTransactions",
});
</script>

<style lang="postcss" scoped>
th,
td {
  @apply px-4 py-2 text-left text-sm;
}

tr:not(:last-child),
thead {
  @apply border-b;
}

th {
  @apply font-bold;
}
</style>
