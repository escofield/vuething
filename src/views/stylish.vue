<script>
import VueTidyRoutes from 'vue-tidyroutes'

let Stylish = {
  name: 'stylish',
  mixins: [],
  data() {
    return {
      msg: 'some data',
    }
  },
}
VueTidyRoutes.route(`/:locale(\\w\\w)?/stylish`, {
  name: 'stylish',
  component: Stylish,
})

export default Stylish
</script>
<template lang="pug">

.stylish
  h1 h1 a b c d e f g
  h2 h2 a b c 
  h3 h3 a b c
  h4 h4 a b c
  h5 h5 a b c
  h6 h6 a b c
  .h7 h7 a b c
  span span a b c
  p p a b c 
  label.required(for="iname") Input label
  input(name="iname" value="some text")

  label.required(for="iname") Input label

  i.icon.icon-home.prefix
  input.prefix.postfix(name="iname" value="some text")
  i.icon.icon-homeOutline.postfix
  
  button.primary primary
  button.success success
  button.info info
  button.warning warning
  button.error error
  button.text text
  button.default default
</template>
<style lang="postcss" scoped>
.stylish {
}
</style>
