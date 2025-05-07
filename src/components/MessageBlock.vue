<template>
  <div class="container mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-2">
        <slot name="title"></slot>
      </h2>

      <p class="text-gray-700 mb-4">
        <slot name="message"></slot>
      </p>

      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>