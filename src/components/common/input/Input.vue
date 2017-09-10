<template>
  <div class="she-input" :class="clazz">
    <div class="she-input__prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input 
      :value="value" 
      :type="type" 
      class="she-input__inner" 
      :autocomplete="autocomplete" 
      @focus="handleFocus" 
      @blur="handleBlur" 
      @input="e => this.$emit('input', e.target.value)"> 
    <div class="she-input__append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'she-input',
  componentName: 'input',
  data: function () {
    return {
      isFocus: false
    }
  },
  props: {
    value: [String, Number],
    plain: Boolean,
    ellipse: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autocomplete: {
      type: String,
      default: 'new-password'
    }
  },
  computed: {
    clazz: function () {
      const { plain, ellipse } = this
      return {
        [`she-input--plain`]: plain,
        [`she-input--ellipse`]: ellipse,
        [`she-input--foucs`]: this.isFocus
      }
    }
  },
  methods: {
    handleFocus: function (e) {
      this.$emit('focus', e)
      this.isFocus = true
    },
    handleBlur: function (e) {
      this.$emit('blur', e)
      this.isFocus = false
    }
  }
}
</script>

<style lang="scss">
@import "../../../sass/vars.scss";
@import "../../../sass/mixins.scss";
.she-input{
  display: flex;
  width: 100%;
  height: $input-height;

  border-radius: $input-border-radius;
  color: $input-font-color;
  background-color: $color-white;
  font-size: $input-font-size;
  border: $border;
  @include transition(border-color,ease-out);
}
.she-input--foucs {
  border-color: $primary;
  @include transition(border-color,ease-in);
}

.she-input__prepend,
.she-input__append {
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.she-input__inner{
  flex: 1;
  padding: $input-padding;

  border: 0;
  outline: none;
  color: inherit;
  font-size: inherit;
  background-color: transparent;
}
.she-input__prepend + .she-input__inner{
  padding-left: 0;
}
.she-input--plain {
  background-color: transparent;
  color: $color-white;
}
.she-input--ellipse{
  border-radius: $input-height / 2;
}
</style>


