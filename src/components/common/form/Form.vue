<template>
  <form class="she-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'she-form',
  componentName: 'form',
  props: {
    labelWidth: String,
    labelAlign: String
  }
}
</script>

