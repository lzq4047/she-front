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
    labelWidth: String,
    labelAlign: String
  }
}
</script>

