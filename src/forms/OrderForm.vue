<template>
  <div class="order-form min-h-screen bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-4">Заказ печати</h1>

      <model-view :model="model" />

      <form @submit.prevent="handleOrderClick" class="space-y-4 bg-white p-4 rounded-xl shadow-md">
        <div>
          <label class="block font-medium mb-1">Телефон для связи:</label>
          <input
              ref="phoneRef"
              v-model="phone"
              type="tel"
              required
              placeholder="+7 777 123-45-67"
              class="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label class="block font-medium mb-1">Комментарий к заказу:</label>
          <textarea
              v-model="comment"
              required
              placeholder="Введите комментарий"
              class="w-full p-2 border rounded" />
        </div>
      </form>

    <div class="h-12"></div>
  </div>

  <Button class="mb-2 mx-2" :disabled="orderInProgress" @click="handleOrderClick">
    Заказать
    <spinner v-if="orderInProgress" />
  </Button>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {getOrderFormService, getRouterService,} from "@/core/di/getContainer";
import ModelView from '@/views/Model.vue'
import {Model} from "@/enitities/model";
import Button from '@/components/Button.vue'
import {RouteNames} from "@/routing/routes";
import Spinner from "@/components/Spinner.vue";

const {model} = defineProps<{model: Model}>()

const orderFormService = getOrderFormService()

const phoneRef = ref()
const comment = ref('')
const phone = ref('')
const orderInProgress = ref(false)

const handleOrderClick = async () => {
  const data = { comment: comment.value, phoneNumber: phone.value }

  // check that phone entered and valid
  if (orderFormService.isPhoneNumberValid(phone.value)) {
    orderInProgress.value = true
    try {
      await orderFormService.makeOrder({...data, modelId: model.id})
      getRouterService().goTo(RouteNames.OrderCreatedPage)
    } finally {
      orderInProgress.value = false
    }
    return
  } else {
    phoneRef.value.focus()
  }
}

onMounted(() => {
  phoneRef.value.focus()
})
</script>

<style lang="scss" scoped>
.order-form {
  &__button {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>