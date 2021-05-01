<template>
    <div class="BaseDatepicker">
        <label v-if="!!label" class="BaseDatepicker__label">
            {{ label }}
        </label>
        <datepicker
            v-model="datepickerModel"
            v-bind="$attrs"
        />
    </div>
</template>

<script>
// Documentation here - https://icehaunter.github.io/vue3-datepicker/
import Datepicker from 'vue3-datepicker'

export default {
    name: 'BaseDatepicker',
    components: { Datepicker },
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: null
        }
    },
    data() {
        return {
            datepickerModel: this.value
        }
    }
}
</script>

<style lang="scss" scoped>
.BaseDatepicker {
    color: $color-primary;
    &__label {
        color: $color-light;
        font-size: 16px;
        transition: transform 0.2s;
        pointer-events: none;
    }
}
</style>
