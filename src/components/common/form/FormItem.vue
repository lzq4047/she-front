<template>
  <div class="she-form-item">
    <div class="she-form-item__label" :style="labelStyle">
      <slot name="label">
        <span>{{label}}</span>
      </slot>
    </div>
    <div class="she-form-item__content">
      <slot></slot>
      <p v-if="valid === false">输入无效</p>
    </div>
  </div>
</template>

<script>
import { ComponentPrefix } from '@/config'
import Validator from '@/utils/validate'
export default {
  name: `${ComponentPrefix}-form-item`,
  componentName: 'form-item',
  data: function () {
    return {
      valid: null
    }
  },
  props: {
    label: String,
    labelWidth: String,
    labelAlign: String,
    rules: Array,
    prop: String
  },
  computed: {
    form: function () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'form') {
        parent = parent.$parent
      }
      console.log(parent)
      return parent
    },
    labelStyle: function () {
      const { labelAlign, labelWidth } = this
      return {
        width: labelWidth || this.form.labelWidth,
        'text-align': labelAlign || this.form.labelAlign || 'right'
      }
    }
  },
  methods: {
    validate: function (value, rules) {
      const validator = new Validator()
      validator.add(value, rules)
      validator.start()
    }
  },
  created: function () {
    const { prop } = this
    if (this.rules && this.rules.length > 0) {
      for (let ruleItem of this.rules) {
        const { strategy, message: errorMsg, trigger } = ruleItem
        const rule = {
          strategy,
          errorMsg,
          trigger
        }
        console.log(this.form)
        this.form.rules[prop] ? this.form.rules[prop].push(rule) : this.$set(this.form.rules, prop, [rule])
        console.log(this.form.rules)
      }
    }
  },
  mounted: function () {
    this.$on('blur', (e) => {
      console.log(e.target.value)
      let errorMsg
      const rules = this.form.rules[this.prop]
      if (rules) {
        for (let rule of rules) {
          if (rule.trigger === 'blur') {
            errorMsg = this.validate(e.target.value, [rule])
            if (errorMsg) {
              break
            }
          }
        }
        console.log(errorMsg)
      }
    })
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

