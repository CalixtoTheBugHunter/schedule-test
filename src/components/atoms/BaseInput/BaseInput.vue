<template>
    <div class="BaseInput" :class="BaseInputClass">
        <label v-if="!!label" class="BaseInput__label">
            {{ label }}
        </label>
        <input
            ref="input"
            class="BaseInput__input"
            v-bind="$attrs"
            :value="modelValue"
            @input="onInput"
            @keyup.enter="inputEnterHandler"
        />

        <p v-if="isInvalid" class="BaseInput__invalidLabel">
            {{ invalidLabel }}
        </p>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        modelValue: {
            type: [String, Number],
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        isLarge: {
            type: Boolean,
            default: false
        },
        isInvalid: {
            type: Boolean,
            default: false
        },
        invalidLabel: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    computed: {
        BaseInputClass() {
            return { 
                'BaseInput--invalid': !!this.isInvalid,
                'BaseInput--large': this.isLarge
            }
        },
    },
    methods: {
        onInput(e) {
            this.$emit('update:modelValue', e.target.value)
        },
        inputEnterHandler() {
            this.$emit('enter')
        }
    }
}
</script>

<style lang="scss" scoped>
.BaseInput {
    position: relative;
    width: 100%;
    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
        color: $color-dark;
        .BaseInput__input {
            background-color: $color-light;
        }
    }
    &--large {
        .BaseInput__input {
            font-size: 20px;
        }
    }
    &__label {
        color: $color-light;
        font-size: 16px;
        transition: transform 0.2s;
        pointer-events: none;
    }
    &__input {
        padding: $space-sm 0;
        width: 100%;
        background: transparent;
        color: $color-white;
        font-size: 16px;
        .BaseInput--invalid & {
            color: $color-primary;
            border-bottom: 1px solid $color-primary;
        }
    }
    &__invalidLabel {
        padding: 5px 10px;
        font-size: 12px;
        color: $color-primary;
        font-weight: 900;
        position: absolute;
    }
}
</style>