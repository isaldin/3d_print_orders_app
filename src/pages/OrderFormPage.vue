<template>
  <template v-if="!modelId">
    <no-model-view />
  </template>

  <template v-else>
    <div v-if="status === 'loading'">
      <div class="flex justify-center items-center h-screen">
        <spinner style="width: 48px; height: 48px; border-width: 4px;" />
      </div>
    </div>

    <template v-else-if="status==='ready'">
      <order-form v-if="model" :model="model" />
    </template>

    <no-model-view v-else-if="status === 'not_found'" />
  </template>
</template>

<script lang="ts" setup>
import OrderForm from '@/forms/OrderForm.vue'
import NoModelView from "@/views/NoModelView.vue";

import { getRouterService} from "@/core/di/getContainer";
import {computed, } from "vue";
import {useLoadModel} from "@/compositions/loadModel";
import Spinner from "@/components/Spinner.vue";

const routerService = getRouterService()

// TaGuFZhlsr0z8eEiifio
const modelId = computed(() => routerService.getRouterParams().modelId as string || null)
const { model, status} = useLoadModel(modelId)
</script>