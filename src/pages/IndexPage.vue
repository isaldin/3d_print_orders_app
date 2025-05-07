<template>
  <message-block>
    <template v-slot:title>
      Добро пожаловать на наш сервис 3D-печати
    </template>

    <template v-slot:message>
      <p class="mt-2">
        Мы предоставляем услуги 3D-печати и рады предложить вам широкий выбор моделей для печати.
      </p>
      <br />
      <p>Вы можете просмотреть наш каталог и заказать печать понравившейся модели.</p>
      <br/>
      <p>
        Если у вас есть вопросы, не стесняйтесь обращаться к нам!
      </p>
    </template>

    <div class="mt-4 flex justify-center">
      <to-catalog-button class="mt-4" />
    </div>
  </message-block>
</template>
<script setup lang="ts">
import MessageBlock from "@/components/MessageBlock.vue";
import ToCatalogButton from "@/components/ToCatalogButton.vue";
</script>