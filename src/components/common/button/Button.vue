<template>
  <button class="she-button" :class="clazz" @click.prevent="e => $emit('click', e)">
    <slot></slot>
  </button>
</template>

<script>
import { ComponentPrefix } from '@/config'
export default {
  name: `${ComponentPrefix}-button`,
  component: 'button',
  props: {
    type: String,
    size: String,
    block: Boolean,
    ellipse: Boolean,
    text: Boolean,
    link: Boolean,
    disabled: Boolean
  },
  computed: {
    clazz: function () {
      const { type, size, block, ellipse, text, link, disabled } = this
      return {
        [`she-button--${type}`]: type,
        [`she-button--${size}`]: size,
        [`she-button--block`]: block,
        [`she-button--ellipse`]: ellipse,
        [`she-button--text`]: text,
        [`she-button--link`]: link,
        [`she-button--disabled`]: disabled
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

  font-size: $button-font-size;
  border: $border;
  border-radius: $button-border-radius;
  background-color: transparent;
  cursor: pointer;
  @include transition(background-color border-color color, ease-out);
  
  &:focus {
    outline: none;
  }
  & + .she-button{
    margin-left: $size-base * 3;
  }
}
.she-button--text {
  padding: 0;
  background-color: transparent;
  border: 0;
  color: $color-font;
  &:hover{
    color:  lighten($color-font, $color-amount-lighten);
    @include transition(color, ease-in);
  }
  &:active{
    color:  darken($color-font, $color-amount-darken);
    @include transition(color, ease-in);
  }
}
.she-button--link{
  text-decoration: underline;
}
.she-button--primary {
  @include button-theme($primary, $primary, $color-white)
}
.she-button--success {
  @include button-theme($success, $success, $color-white)
}
.she-button--warning {
  @include button-theme($warning, $warning, $color-white)
}
.she-button--danger {
  @include button-theme($danger, $danger, $color-white)
}
.she-button--small {
  padding: $button-small-padding;
  font-size: $button-small-font-size;
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

