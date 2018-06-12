<template>
  <form class="she-form">
    <slot></slot>
  </form>
</template>

<script>
import { ComponentPrefix } from '@/config'
export default {
  name: `${ComponentPrefix}-form`,
  componentName: 'form',
  props: {
    model: Object,
    labelWidth: String,
    labelAlign: String,
    rules: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

