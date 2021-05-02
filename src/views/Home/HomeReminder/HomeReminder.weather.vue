<template>
    <p class="ReminderWeather">
        {{ value.main }}
        <img :src="`http://openweathermap.org/img/w/${value.icon}.png`" />
    </p>
</template>

<script>
export default {
    name: 'ReminderWeather',
    props: {
        value: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.ReminderWeather {
    color: $color-primary;
}
</style>