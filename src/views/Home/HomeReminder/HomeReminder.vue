<template>
    <section class="HomeReminder">
        <base-input v-model="title" placeholder="Untitled" maxlength="30"/>
        <base-datepicker v-model="date" placeholder="Date" />
        <base-input v-model="city" placeholder="City" @blur="searchWeather()"/>
        <reminder-weather :value="weather" v-if="weather?.main" />
        <base-input v-model="color" placeholder="Color" />
        <base-button theme="secondary" label="Save reminder" @click="onSaveReminderClick"/>
    </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('schedule')
import { BaseButton, BaseDatepicker, BaseInput } from '@/components/atoms'
import ReminderWeather from './HomeReminder.weather'

import api from '@/api/weather'

export default {
    components: { BaseButton, BaseDatepicker, BaseInput, ReminderWeather },
    name: 'HomeReminder',
    props: {
        id: [String, Number],
        editData: {
            type: Object,
            default: () => {}
        }
    },
    emits: ['close'],
    data() {
        return {
            weather: {},
            uniqueId: this.id,
            title: '',
            date: null,
            oldDate: null,
            city: '',
            color: ''
        }
    },
    computed: {
        ...mapGetters(['hasDateInData', 'hasReminderId', 'sheduleLength']),
        day() {
            return this.date ? Intl.DateTimeFormat('en-US').format(this.date) : null
        },
        oldDay() {
            return this.oldDate ? Intl.DateTimeFormat('en-US').format(this.oldDate) : null
        },
        validations() {
            return this.title !== '' && this.city !== ''
        }
    },
    mounted() {
        this.setUniqueId()
        this.setEditData()
    },
    methods: {
        ...mapActions([
            'createDay',
            'createReminder',
            'updateReminder',
            'deleteReminder'
        ]),
        setUniqueId() {
            this.uniqueId = this.id ? this.id : this.sheduleLength
        },
        setEditData() {
            if(this.editData?.title) {
                this.title = this.editData.title
                this.date = this.editData.date
                this.oldDate = this.editData.date
                this.city = this.editData.city
                this.color = this.editData.color
                this.searchWeather()
            }
        },
        async searchWeather() {
            await api.getWeather(this.city)
                .then( result => this.weather = result.data.weather[0])
                .catch( () => this.weather = {})
            
        },
        async onSaveReminderClick() {
            if(this.date) {
                await this.updateOrCreateDate()
                await this.updateOrCreateReminder()
            }
        },
        updateOrCreateReminder() {
            const PAYLOAD = {
                date: this.day,
                result: {
                    id: this.uniqueId,
                    title: this.title,
                    date: this.date,
                    city: this.city,
                    color: this.color
                }
            }

            if (this.validations)
                return this.hasReminderId(PAYLOAD)
                    ? this.handleReminder('updateReminder', PAYLOAD)
                    : this.handleReminder('createReminder', PAYLOAD)
                
        },

        handleReminder(action, payload) {
            if(this.oldDate)
                this.deleteReminder({date: this.oldDay, result: { id: this.uniqueId }})
            this[action](payload)
            this.$emit('close')
        },

        updateOrCreateDate() {
            if(!this.hasDateInData(this.day))
                this.createDay(this.day)
        }
    }
}
</script>

<style lang="scss" scoped>
.HomeReminder {
    padding: $space-lg;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    gap: $space-md;
    width: 100%;
    align-items: flex-end;
}
</style>