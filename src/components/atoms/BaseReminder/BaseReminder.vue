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
            default: '#1d252c'
        }
    },
    emits: ['click'],
    computed: {
        BaseReminderStyles() {
            return `background: ${this.color ? this.color : '#1d252c'}`
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
    font-size: 13px;
    border-radius: 3px;
    margin-bottom: $space-xs;
    padding: $space-xs;
    &:hover {
        filter: brightness(90%) contrast(150%);
    }
}
</style>