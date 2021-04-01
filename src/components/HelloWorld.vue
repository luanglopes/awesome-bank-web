<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style lang="postcss" scoped>
a {
  color: #42b983;
}

code {
  @apply bg-gray-100 py-1 px-2 rounded-md font-mono text-sm;
  color: #304455;
}
</style>
