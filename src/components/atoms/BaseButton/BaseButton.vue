<template>
  <component
    :is="tag"
    type="button"
    v-bind="$attrs"
    class="BaseButton"
    :class="BaseButtonClasses"
    :disabled="disabled"
    @click="click"
  >
    <span v-if="!!label" class="BaseButton__Text">
      {{ label }}
    </span>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: val => ['button', 'a'].includes(val)
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary'].includes(val)
    }
  },
  computed: {
    BaseButtonClasses() {
      return [`BaseButton--${this.theme}`, {
        'BaseButton--disabled': this.disabled
      }]
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.BaseButton {
  height: 32px;
  -webkit-appearance: none;
  display: flex;
  background: inherit;
  padding: 0 10px;
  cursor: pointer;
  align-items: center;
  position: relative;
  white-space: nowrap;
  border-radius: 5px;
  border: 0 none;
  &:hover {
    filter: brightness(90%) contrast(150%);
  }
  &--primary {
    background: $color-primary;
  }
  &--secondary {
    background: $color-secondary;
  }
  &__Text {
    font-size: 16px;
    color: $color-black;
    text-align: center;
    display: block;
    width: 100%;
  }
  &--disabled {
    pointer-events: none;
    opacity: 0.4;
  }
}
</style>