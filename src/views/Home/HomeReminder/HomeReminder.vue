<template>
    <section class="HomeReminder">
        <base-input v-model="title" placeholder="Untitled" max-length="30"/>
        <base-datepicker v-model="date" placeholder="Date" />
        <base-input v-model="city" placeholder="City" />
        <base-input v-model="color" placeholder="Color" />
        <base-button label="Save reminder" @click="onSaveReminderClick"/>
    </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('schedule')
import { BaseButton, BaseDatepicker, BaseInput } from '@/components/atoms'
import { uuid } from 'vue-uuid'

export default {
    components: { BaseButton, BaseDatepicker, BaseInput },
    name: 'HomeReminder',
    props: {
        id: [String, Number]
    },
    emits: ['close'],
    data() {
        return {
            uniqueId: this.id,
            title: '',
            date: null,
            city: '',
            color: ''
        }
    },
    computed: {
        ...mapGetters(['checkMonthInData', 'checkDateInData', 'checkReminderId']),
        month() {
            return this.date ? this.date.getMonth() : null
        },
        day() {
            return this.date ? this.date.getDate() : null
        },
        validations() {
            return this.title !== '' && this.city !== ''
        }
    },
    mounted() {
        this.setUniqueId()
    },
    methods: {
        ...mapActions([
            'createMonth',
            'createDay',
            'createReminder',
            'updateReminder'
        ]),
        async onSaveReminderClick() {
            if(this.date) {
                await this.updateOrCreateMonth()
                await this.updateOrCreateDate()
                await this.updateOrCreateReminder()
            }
        },
        setUniqueId() {
            this.uniqueId = this.id ? this.id : uuid.v1()
        },
        updateOrCreateReminder() {
            const PAYLOAD = {
                month: this.month,
                date: this.day,
                id: this.uniqueId,
                result: {
                    id: this.uniqueId,
                    title: this.title,
                    date: this.date,
                    city: this.city,
                    color: this.color
                }
            }

            if (this.validations) {
                if(this.checkReminderId(PAYLOAD) === 0) {
                    this.createReminder(PAYLOAD)
                    this.$emit('close')
                } else {
                    this.updateReminder(PAYLOAD)
                    this.$emit('close')
                }
            }
                
        },
        updateOrCreateMonth() {
            if (this.checkMonthInData(this.month) === 0)
                this.createMonth({
                    month: this.month,
                    days: []
                })
        },
        updateOrCreateDate() {
            const PAYLOAD = { 
                month: this.month,
                date: this.day
            }
            if(this.checkDateInData(PAYLOAD) === 0)
                this.createDay({
                    month: this.month,
                    result: {
                        date: this.day,
                        reminders: []
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.HomeReminder {
    color: $color-primary;
}
</style>