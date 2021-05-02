<template>
    <div class="BaseReminder" :style="BaseReminderStyles" @click="onClick">
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
        },
        color: {
            type: String,
            default: '#000'
        }
    },
    emits: ['click'],
    computed: {
        BaseReminderStyles() {
            return `background: ${this.color}`
        }
    },
    methods: {
        onClick() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.BaseReminder {
    color: $color-white;
    cursor: pointer;
}
</style>