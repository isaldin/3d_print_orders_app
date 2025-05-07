<template>
  <div class="container mx-auto pb-4">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-2">{{ model.name }}</h2>

        <Splide :options="{ rewind: true }"  class="model__splide w-full h-auto rounded-lg mb-4">
          <SplideSlide v-for="photoUrl in model.photoUrls">
            <img v-bind:src="photoUrl" alt="Фото модели" />
          </SplideSlide>
        </Splide>

      <p class="text-gray-600 font-bold">Цена: {{ model.price }} тг.</p>

      <div class="mt-2">
        <label class="block font-medium mb-1">Ссылка на модель</label>
        <input
            v-model="model.linkToModelPage"
            type="url"
            required
            placeholder="https://example.com/model.stl"
            class="w-full p-2 border rounded"
            disabled
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import {Model} from "@/enitities/model";

const {model} = defineProps<{model: Model}>()
</script>

<style lang="scss" scoped>
.model {
  &__splide {
    min-height: 230px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>