<template>
    <div class="TheSchedule">
        <div class="TheSchedule__months">
            <font-awesome-icon :icon="icon" @click="toggleMonthList" />
            <h3>{{ months[selectedMonthId].name }}</h3>
            <div class="TheSchedule__months-list" v-if="showMonthList">
                <ul>
                    <li v-for="month in months" :key="month.id" @click="selectMonth(month.id)">
                        {{ month.name }}
                    </li>
                </ul>
            </div>
        </div>
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
            <div class="TheSchedule__calendar-day" v-for="(day, i) in months[selectedMonthId].days" :key="`dayOfMonth${i}`">
                {{ day }}
                <div v-if="checkDateInDataNonEmpty(day)">
                    <base-reminder 
                        v-for="reminder in reminders(day)" 
                        :key="reminder.id" 
                        :title="reminder.title"
                        :color="reminder.color"
                        @click="editReminder(reminder)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('schedule')

import weeksDays from './utils/weeks'
import months from './utils/months'

import { BaseReminder } from '@/components/atoms'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'TheSchedule',
    components: { BaseReminder,  FontAwesomeIcon },
    emits: ['edit'],
    data() {
        return {
            icon: faChevronDown,
            weeksDays,
            months,
            selectedMonthId: 4,
            showMonthList: false
        }
    },
    computed: {
        ...mapGetters(['hasDateInData', 'getRemindersByDay']),
        setFirstDateWeekDay() {
            return new Date(this.baseDate).getDay()
        },
        showCalendarSpan() {
            return this.setFirstDateWeekDay < 7
        },
        setCalendarSpanSize() {
            return `width: calc((100px * ${this.setFirstDateWeekDay}) + ${this.setFirstDateWeekDay - 1}px)`
        },
        monthNumber() {
            return this.selectedMonthId + 1
        },
        baseDate() {
            return `${this.monthNumber}/1/2021` // Make dynamic this field
        }
    },
    methods: {
        toggleMonthList() {
            this.showMonthList = !this.showMonthList
        },
        selectMonth(id) {
            this.selectedMonthId = id
            this.showMonthList = false
        },
        checkDateInDataNonEmpty(day) {
            return this.hasDateInData(`${this.monthNumber}/${day}/2021`)
        },
        reminders(day) {
            return this.getRemindersByDay(`${this.monthNumber}/${day}/2021`)
        },
        editReminder(value) {
            this.$emit('edit', value)
        }
    }
}
</script>

<style lang="scss" scoped>
.TheSchedule {
    color: $color-light;
    h3 {
        font-size: 32px;
        font-weight: 400;
    }
    &__months {
        color: $color-primary;
        position: relative;
        display: flex;
        align-items: center;
        gap: $space-md;
        margin-bottom: $space-md;
        svg {
            cursor: pointer;
        }
        &-list {
            background: $color-black;
            position: absolute;
            top: 32px;
            ul {
                padding: $space-md;
                margin: 0;
                li {
                    list-style: none;
                    cursor: pointer;
                    color: $color-white;
                    &:hover {
                        color: $color-secondary;
                    }
                }
            }
        }
    }
    &__week {
        background-color: $color-dark;
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
        background-color: $color-dark;
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
            padding: $space-xs;
            background: $color-gray;
            overflow: auto;
            color: $color-dark;
        }
    }
}
</style>