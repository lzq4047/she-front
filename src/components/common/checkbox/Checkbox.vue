<template>
  <label :for="id" class="she-checkbox" :class="{'is-active': localValue}">
    <span class="she-checkbox__input">
      <input class="she-checkbox__input-inner" type="checkbox" :name="id" :id="id" v-model="localValue">
      <span class="she-checkbox__input-icon"></span>
    </span>
    <span class="she-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { ComponentPrefix } from '@/config'
export default {
  name: `${ComponentPrefix}-checkbox`,
  componentName: 'checkbox',
  data: function () {
    return {
      id: ''
    }
  },
  props: {
    value: [String, Boolean, Number]
  },
  computed: {
    localValue: {
      get: function () {
        return this.value
      },
      set: function (newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  created: function () {
    this.id = `checkbox-${this._uid}`
  }
}
</script>

<style lang="scss">
@import "../../../sass/theme.scss";
@import "../../../sass/vars.scss";
.she-checkbox{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  &.is-active{
    color: $primary;
  }
}
.she-checkbox__input{
  line-height: 0;
}
.she-checkbox__input-inner{
  display: none;
}
.she-checkbox__input-icon{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  box-sizing: border-box;
  border: $border;
  border-radius: $border-radius-small;
  &:after{
    content: "";
    display: inline-block;
    box-sizing: border-box;
    width: 5px;
    height: 8px;
    color: inherit;
    border: 2px solid currentColor;
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg) translateY(-1px);
  }
}
.she-checkbox__input-inner:checked  .she-checkbox__input-icon:after{
  color: $primary;
}
.she-checkbox__label{
  margin-left: 5px;
}
</style>


