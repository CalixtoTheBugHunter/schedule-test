<template>
    <div class="BaseReminder">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'BaseReminder',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.BaseReminder {
    color: $color-black;
}
</style>