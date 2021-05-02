<template>
  <div class="Home">
    <section class="Home__schedule">
      <header class="Home__schedule-header">
        <h1>Personal Schedule</h1>
        <base-button label="New reminder" @click="onNewReminderClick" />
      </header>
      <the-schedule @edit="onEdit($event)" />
      <span 
        v-if="sheduleLength > 0"
        @click="onDeleteAll"
        class="Home__schedule-deleteAll">
        Delete All
      </span>
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
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('schedule')
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
  computed: {
    ...mapGetters(['sheduleLength']),
  },
  methods: {
    ...mapActions(['deleteAll']),
    onDeleteAll() {
      this.deleteAll()
    },
    handleShowReminder(value) {
      this.showHomeReminder = value
    },
    onNewReminderClick() {
      this.editData = {}
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
  width: 1146px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: $space-xl;
  background-color: $color-dark;
  align-items: center;
  

  &__schedule {
    justify-self: end;
    &-header {
      margin-bottom: $space-xl;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: 3rem;
        font-weight: 300;
        color: $color-white;
      }
    }
    &-deleteAll {
      margin-top: $space-md;
      display: block;
      color: $color-gray;
      cursor: pointer;
      &:hover {
          color: $color-danger;
      }
    }
    
  }

  &__settings {
    background: $color-black;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
  }
}
</style>