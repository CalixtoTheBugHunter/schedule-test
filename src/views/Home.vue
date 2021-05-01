<template>
  <div class="home">
    <base-button label="Save" />
  </div>
</template>

<script>
// @ is an alias to /src
import { BaseButton } from '@/components/atoms'

export default {
  name: 'Home',
  components: {
    BaseButton
  },
}
</script>
