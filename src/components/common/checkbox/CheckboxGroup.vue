<template>
  <div class="she-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { ComponentPrefix } from '@config'
export default {
  name: `${ComponentPrefix}-checkbox-group`,
  componentName: 'checkbox-group',
  props: {
    value: Array
  },
  computed: {
    localValue: {
      get: function () {
        return this.value
      },
      set: function(newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>

