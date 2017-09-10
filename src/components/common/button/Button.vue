<template>
  <button class="she-button" :class="clazz" @click.prevent="e => $emit('click', e)">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'she-button',
    component: 'button',
    props: {
      type: String,
      size: String,
      block: Boolean,
      ellipse: Boolean
    },
    computed: {
      clazz: function () {
        const { type, size, block, ellipse } = this
        return {
          [`she-button--${type}`]: type,
          [`she-button--${size}`]: size,
          [`she-button--block`]: block,
          [`she-button--ellipse`]: ellipse
        }
      }
    }
  }
</script>

<style lang="scss">
@import "../../../sass/vars.scss";
@import "../../../sass/mixins.scss";
.she-button {
  padding: $button-padding;
  border: $border;
  border-radius: $button-border-radius;
  background-color: transparent;
  cursor: pointer;
  @include transition(background-color border-color color, ease-out);
  
  &:focus {
    outline: none;
  }
}
.she-button--primary {
  background-color: $primary;
  border-color: $primary;
  color: $button-font-color;
  &:hover{
    background-color: lighten($primary, $color-amount-lighten);
    border-color: lighten($primary, $color-amount-lighten);
    @include transition(background-color border-color color, ease-in);
  }
  &:active{
    background-color: darken($primary, $color-amount-darken);
    border-color: darken($primary, $color-amount-darken);
    @include transition(background-color border-color color, ease-in);
  }
}
.she-button--small {
  padding: $button-small-padding;
  border-radius: $button-small-border-radius;
}
.she-button--block{
  display: block;
  width: 100%;
}
.she-button--ellipse{
  border-radius: 36px;
}
</style>

