export default {
  methods: {
    emitEvent () {
      const [ componentName, eventName, ...params ] = arguments
      let parent = this
      while (parent) {
        if (parent.$options.componentName === componentName) {
          break
        }
        parent = parent.$parent
      }
      if (parent) {
        parent.$emit(eventName, ...params)
      }
    }
  }
}
