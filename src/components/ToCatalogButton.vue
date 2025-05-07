<template>
  <Button @click="handleClick">
    Перейти к каталогу
  </Button>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import {getRouterService} from "@/core/di/getContainer";

const handleClick = () => {
  getRouterService().goToInstagramAccount()
}
</script>