<template>
  <router-view />
</template>

<style lang="scss">
  @import '@/assets/scss/main.scss';

  body {
    background: $color-dark;
    background: linear-gradient(90deg, $color-dark 0%, $color-dark 49%, $color-black 50%, $color-black 100%);
  }
</style>
