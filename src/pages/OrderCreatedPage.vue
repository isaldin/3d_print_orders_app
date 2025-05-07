<template>
  <message-block>
    <template v-slot:title>
      Заказ успешно создан
    </template>

    <template v-slot:message>
      Скоро с Вами свяжется менеджер для уточнения деталей.
    </template>

    <div class="flex justify-center mt-4">
      <to-catalog-button />
    </div>
  </message-block>
</template>
<script setup lang="ts">
import MessageBlock from "@/components/MessageBlock.vue";
import ToCatalogButton from "@/components/ToCatalogButton.vue";
</script>