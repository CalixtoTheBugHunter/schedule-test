<template>
    <p class="ReminderWeather">
        <img :src="`http://openweathermap.org/img/w/${value.icon}.png`" />
        {{ value.main }}
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
    background: $color-gray;
    display: flex;
    border-radius: 10px;
    width: 100%;
    align-items: center;
    font-size: 14px;
    color: $color-white;
}
</style>