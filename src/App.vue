<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "App" });
</script>

<style lang="postcss">
#app {
  @apply mt-14 text-center antialiased font-sans;
  color: #2c3e50;
}
</style>
