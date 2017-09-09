<template>
  <button class="she-button" :class="clazz" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'she-button',
    component: 'button',
    props: {
      type: String
    },
    computed: {
      clazz: function () {
        const { type, size } = this
        return {
          [`she-button__${type}`]: type,
          [`she-button__${size}`]: size
        }
      }
    }
  }
</script>

<style lang="scss">
@import "../../../sass/vars.scss";
.she-button {
  padding: $button-padding;
  border: $border;
  border-radius: $button-border-radius;
  background-color: transparent;
  transition: background-color .3s ease-out,border-color .3s ease-out,color .3s ease-out;
  &:focus {
    outline: none;
  }
}
.she-button__primary {
  background-color: $primary;
  border-color: $primary;
  color: $button-font-color;
  &:hover{
    background-color: lighten($primary, $color-amount-lighten);
    border-color: lighten($primary, $color-amount-lighten);
    transition: background-color .3s ease-in,border-color .3s ease-in,color .3s ease-in;
  }
  &:active{
    background-color: darken($primary, $color-amount-darken);
    border-color: darken($primary, $color-amount-darken);
    transition: background-color .3s ease-in,border-color .3s ease-in,color .3s ease-in;
  }
}
.she-button__small {
  padding: $button-small-padding;
  border-radius: $button-small-border-radius;
}
</style>

