<template>
  <div class="home">
    <base-button label="Save" />
    <base-input :value="value" />
  </div>
</template>

<script>
// @ is an alias to /src
import { BaseButton, BaseInput } from '@/components/atoms'

export default {
  name: 'Home',
  components: {
    BaseButton, BaseInput
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
