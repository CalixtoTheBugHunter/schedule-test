<template>
  <div class="Home">
    <section class="Home__schedule">
      <base-button label="New reminder" @click="onNewReminderClick" />
      <the-schedule />
    </section>
    <section class="Home__settings">
      <home-reminder v-if="showHomeReminder" @close="emittedHomeReminder" />
    </section>
  </div>
</template>

<script>
import { BaseButton } from '@/components/atoms'
import { TheSchedule } from '@/components/organisms'
import HomeReminder from './HomeReminder/HomeReminder.vue'


export default {
  name: 'Home',
  components: { BaseButton, TheSchedule, HomeReminder },
  data() {
    return {
      showHomeReminder: false
    }
  },
  methods: {
    handleShowReminder(value) {
      this.showHomeReminder = value
    },
    onNewReminderClick() {
      this.handleShowReminder(true)
    },
    emittedHomeReminder() {
      this.handleShowReminder(false)
    }
  }
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