<template>
  <message-block>
    <template v-slot:title>
      Модель не найдена :(
    </template>
    <template v-slot:message>
      Похоже, что модель удалена или недоступна.
    </template>

    <div class="mt-4 flex justify-center">
      <to-catalog-button />
    </div>
  </message-block>
</template>

<script lang="ts" setup>
import MessageBlock from "@/components/MessageBlock.vue";
import ToCatalogButton from "@/components/ToCatalogButton.vue";
</script>