<template>
  <div class="Home">
    <section class="Home__schedule">
      <the-schedule />
    </section>
    <section class="Home__settings">Here is schedule settings</section>
  </div>
</template>

<script>
import { TheSchedule } from '@/components/organisms'
export default {
  name: 'Home',
  components: { TheSchedule }
}
</script>

<style lang="scss" scoped>
.Home {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 300px;

  &__settings {
    background: $color-light;
  }
}
</style>