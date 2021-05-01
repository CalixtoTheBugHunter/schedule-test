<template>
    <section class="HomeReminder">
        <base-input :value="title" placeholder="Untitled" />
        <base-datepicker :value="date" placeholder="Date" />
        <base-input :value="city" placeholder="City" />
        <base-input :value="color" placeholder="Color" />
        <base-button label="Save reminder" />
    </section>
</template>

<script>
import { BaseButton, BaseDatepicker, BaseInput } from '@/components/atoms'

export default {
    components: { BaseButton, BaseDatepicker, BaseInput },
    name: 'HomeReminder',
    data() {
        return {
            title: '',
            date: '',
            city: '',
            color: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.HomeReminder {
    color: $color-primary;
}
</style>