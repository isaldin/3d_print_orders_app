<template>
  <button v-bind="$attrs" class="order-form__button bg-blue-600 font-bold text-white p-2 rounded hover:bg-blue-700 m-auto">
    <slot />
  </button>
</template>