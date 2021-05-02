<template>
  <div class="Home">
    <section class="Home__schedule">
      <base-button label="New reminder" @click="onNewReminderClick" />
      <the-schedule @edit="onEdit($event)" />
    </section>
    <section class="Home__settings">
      <home-reminder 
        v-if="showHomeReminder" 
        @close="emittedHomeReminder" 
        :id="editId" 
        :editData="editData" />
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
      showHomeReminder: false,
      editData: '',
      editId: null
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
    },
    onEdit(e) {
      this.editId = e.id
      this.editData = e
      this.handleShowReminder(true)
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