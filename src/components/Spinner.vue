<template>
  <span class="spinner"></span>
</template>

<style lang="scss" scoped>
.spinner {
  width: 12px;
  height: 12px;
  border: 2px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>