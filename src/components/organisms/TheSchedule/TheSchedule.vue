<template>
    <div class="TheSchedule">
        <h3>May</h3>
        <div class="TheSchedule__week">
            <div class="TheSchedule__week-day" v-for="day in weeksDays" :key="day.id">
                {{ day.name }}
            </div>
        </div>
        <div class="TheSchedule__calendar">
            <span 
                class="TheSchedule__calendar-span" 
                v-if="showCalendarSpan" 
                :style="setCalendarSpanSize" />
            <div class="TheSchedule__calendar-day" v-for="(day, i) in months[4].days" :key="`dayOfMonth${i}`">
                {{ day }}
            </div>
        </div>
    </div>
</template>

<script>
import weeksDays from './utils/weeks'
import months from './utils/months'

export default {
    name: 'TheSchedule',
    data() {
        return {
            weeksDays,
            months,
            baseDate: '2021-05-01' // Make dynamic this field
        }
    },
    computed: {
        setFirstDateWeekDay() {
            return new Date(this.baseDate).getDay()
        },
        showCalendarSpan() {
            return this.setFirstDateWeekDay < 6
        },
        setCalendarSpanSize() {
            return `width: calc(100px * ${this.setFirstDateWeekDay + 1} + ${this.setFirstDateWeekDay}px)`
        }
    }
}
</script>

<style lang="scss" scoped>
.TheSchedule {
    color: $color-primary;
    &__week {
        background-color: $color-light;
        display: flex;
        gap: 1px;
        width: 708px;
        padding: 1px;
        box-sizing: border-box;
        &-day {
            flex: 1
        }
    }
    &__calendar {
        background-color: $color-light;
        display: flex;
        gap: 1px;
        flex-flow: wrap;
        width: 708px;
        padding: 1px;
        box-sizing: border-box;

        &-span {
            height: 100px;
        }

        &-day {
            width: 100px;
            height: 100px;
            background: $color-white;
        }
    }
}
</style>