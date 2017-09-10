<template>
  <div class="she-form-item">
    <div class="she-form-item__label" :style="labelStyle">
      <slot name="label">
        <span>{{label}}</span>
      </slot>
    </div>
    <div class="she-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'she-form-item',
  componentName: 'form-item',
  props: {
    label: String,
    labelWidth: String,
    labelAlign: String
  },
  computed: {
    form: function () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'form') {
        parent = parent.$parent
      }
      return parent
    },
    labelStyle: function () {
      const { labelAlign, labelWidth } = this
      return {
        width: labelWidth || this.form.labelWidth,
        'text-align': labelAlign || this.form.labelAlign || 'right'
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../sass/vars.scss";
.she-form-item{
  display: flex;
  align-items: center;

  margin-bottom: 20px;
}
.she-form-item__label {
  display: inline-block;
  padding-right: 10px;

  color: $form-item-label-color;
}
.she-form-item__content{
  flex: 1;
  display: inline-flex;
  align-items: center;
}
</style>

