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
  h1     h1 Responsive Type
  h2     h2 Responsive Type
  h3     h3 Responsive Type
  h4     h4 Responsive Type
  span span Responsive Type
  p       p Responsive Type
  h5     h5 Responsive Type
  h6     h6 Responsive Type
  label.required(for="iname") Input label
  input(name="iname" value="some text")

  label(for="iname") Input label

  i.icon.icon-home.prefix
  input.prefix.postfix(name="iname" value="some text")
  i.icon.icon-homeOutline.postfix
  p
    button.primary primary
    button.success success
    button.info info
    button.warning warning
    button.error error
    button.text text
    button.default default
  select
    option Here is the unstyled select box
    option The second option
    option The third option
  
  input(type="checkbox" name="chk1") 
  label(for="chk1") Checkbox 1

  input(type="radio" name="radioTest" value='1') 
  | option 1
  input(type="radio" name="radioTest" value='2') 
  | option 2
  span.badge(count="5") f
</template>
<style lang="postcss" scoped>
  span.badge {
    height: 2rem;
    width: 2rem;
    display: block;
    margin-top: 2rem;
    border-radius: 0.7 rem;
    background-color: blue;
  }
</style>
