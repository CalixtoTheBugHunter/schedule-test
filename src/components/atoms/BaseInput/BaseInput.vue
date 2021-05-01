<template>
  <div class="BaseInput" :class="BaseInputClass">
    <label v-if="!!label" class="BaseInput__label" :class="labelClass">
      {{ label }}
    </label>
    <input
      ref="input"
      class="BaseInput__input"
      v-bind="$attrs"
      :value="value"
      @focus="onFocus"
      @blur="onLostFocus"
      @input="debounceInput"
      @keyup="onKeyup"
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
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    debounceTime: {
      type: Number,
      default: 500
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
  data() {
    return {
      debounce: null,
      focus: false
    }
  },
  computed: {
    BaseInputClass() {
      return { 'BaseInput--invalid': !!this.isInvalid }
    },
  },
  methods: {
    onFocus() {
      this.focus = !this.focus
    },
    onLostFocus() {
      this.onFocus()
      this.$emit('blur')
    },
    onKeyup(e) {
        let value = e ? e.target.value : this.value
        this.$emit('input', value)
    },
    setFocus() {
      this.$refs.input.focus()
    },
    debounceInput(e) {
      const val = e.target.value
      this.$emit('input', val)
      clearTimeout(this.debounce)
      this.debounce = setTimeout(
        () => this.$emit('debounce', val),
        this.debounceTime
      )
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
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    color: $color-dark;
    .BaseInput__input {
      background-color: $color-light;
    }
  }
  &__label {
    color: $color-light;
    font-size: 17px;
    transition: transform 0.2s;
    pointer-events: none;
  }
  &__input {
    border: 1px solid $color-light;
    padding: 9px 0;
    width: 100%;
    background: transparent;
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