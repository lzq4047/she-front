import Button from './button/Button.vue'
import Form from './form/Form.vue'
import FormItem from './form/FormItem.vue'
import Input from './input/Input.vue'
import Checkbox from './checkbox/Checkbox.vue'

const install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Form.name, Form)
  Vue.component(FormItem.name, FormItem)
  Vue.component(Input.name, Input)
  Vue.component(Checkbox.name, Checkbox)
}
export default {
  install
}
