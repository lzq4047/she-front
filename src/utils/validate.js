const patterns = {
  mobile: /^1[3,4,5,7,8]\d{9}$/,
  qq: /^[1-9]\d{4-10}$/,
  emial: /^\w+(\.\w+)?@(\w+||[1-9]\d+)\.\w{2,3}(\.\w{2,3})?$/
}
export const strategies = {
  isRequired: (value, errorMsg) => (!value || value === '') ? errorMsg : null,
  minLength: (value, errorMsg, length) => (value && value.length < +length) ? errorMsg : null,
  maxLength: (value, errorMsg, length) => (value && value.length > +length) ? errorMsg : null,
  limitedLength: (value, errorMsg, minLength, maxLength) => strategies.minLength(value, errorMsg, +minLength) || strategies.maxLength(value, errorMsg, +maxLength),
  minValue: (value, errorMsg, minValue) => (value && +value < minValue) ? errorMsg : null,
  maxValue: (value, errorMsg, maxValue) => (value && +value > maxValue) ? errorMsg : null,
  limitedValue: (value, errorMsg, minValue, maxValue) => strategies.minValue(value, errorMsg, +minValue) || strategies.maxValue(value, errorMsg, +maxValue),
  isMobile: (value, errorMsg) => (value && !patterns.mobile.test(value)) ? errorMsg : null,
  isQQ: (value, errorMsg) => (value && !patterns.qq.test(value)) ? errorMsg : null,
  isEmail: (value, errorMsg) => (value && !patterns.emial.test(value)) ? errorMsg : null
}

export default class Validator {
  constructor () {
    this.cache = []
  }
  add (value, rules) {
    for (let rule of rules) {
      const errorMsg = rule.errorMsg
      // if contains pattern property, use this pattern to validate
      if (rule.pattern) {
        this.cache.push(() => {
          return rule.pattern.test(value) ? null : errorMsg
        })
        continue
      }
      const [strategyName, ...strategyProperties] = rule.strategy.split(':')
      const strategyFunc = strategies[strategyName]
      if (!strategyFunc) {
        console.warn(`Strategy ${strategyName} is not defined.`)
      } else {
        this.cache.push(() => {
          return strategyFunc(value, errorMsg, ...strategyProperties)
        })
      }
    }
  }
  start () {
    for (let validateFunc of this.cache) {
      let errorMsg = validateFunc()
      if (errorMsg) {
        return errorMsg
      }
    }
    return null
  }
}
