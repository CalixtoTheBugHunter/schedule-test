<template>
  <div class="Home">
    <section class="Home__schedule">Here is schedule</section>
    <section class="Home__settings">Here is schedule settings</section>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.Home {
  width: 100vw;
  height: 100vh;

  &__settings {
    background: $color-light;
  }
}
</style>