<script>
import VueTidyRoutes from 'vue-tidyroutes'

let Stylish = {
  name: 'stylish',
  mixins: [],
  data() {
    return {
      msg: 'some data',
      showModal: false,
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
  .panel
    h1 Fonts
    label H1
    h1   Responsive Type
    label H2
    h2   Responsive Type
    label H3
    h3   Responsive Type
    label H4
    h4   Responsive Type
    label span and paragraph
    span Responsive Type
    label H5
    h5   Responsive Type
    label H6
    h6   Responsive Type

  .panel
    h1 Inputs
    label.required(for="iname") Input label
    input(name="iname" value="some text")

    label(for="iname") Input label
    i.icon.icon-home.prefix
    input.prefix.postfix(name="iname" value="some text")
    i.icon.icon-homeOutline.postfix

  .panel
    h1 Buttons
    p.btns
      button.primary primary
      button.success success
      button.info info
      button.warning warning
      button.error error
      button.text text
      button.default default

  .panel
    h1 Select
    select
      option Here is the styled select box
      option The second option
      option The third option

  .panel
    h1 Checkbox
    input(type="checkbox" name="chk1") 
    label(for="chk1") Checkbox 1

  .panel
    h1 Radio Buttons
    input(type="radio" name="radioTest" value='1') 
    | option 1
    input(type="radio" name="radioTest" value='2') 
    | option 2
  
  .panel
    h1 Badge
    span.badge(count="5") 

  .panel
    h1 Tooltip
    span.tooltip(tip="this tooltip" ) This tooltip aligns top and starts center.

  .panel
    h1 Toggle Switch
    input.toggle(type="checkbox" name="chk2")
    label(for="chk2") Toggle switch

  .panel
    h1 Slider
    input(type="range" min="1" max="100" value="50")

  .panel
    h1 Hyperlink
    a() Go here!

  .panel
    h1 Panel
      p some panel with some text and stuff.  Whow knows what you can put into a panel!  The world is your Oyster!

  .panel
    h1 Chips
    .chips
      span.chip hellen@highwater.com
        .close
      span.chip sam@thatplace.com
      span.chip hob@shire.com
  .panel
    h1 Accordian
    p You can change the accordian to collapse by setting the inputs as radio buttons instead of checkbox's
      .accordian
        input(type="radio" accordian name="accGroup1" id="panel1")
        label(for="panel1") Panel 1
        section(accordian)
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      .accordian
        input(type="radio" accordian name="accGroup1" id="panel2")
        label(for="panel2") Panel 1
        section(accordian)
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      .accordian
        input(type="radio" accordian name="accGroup1" id="panel3")
        label(for="panel3") Panel 1
        section(accordian)
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
  .panel
    h1 Modal
      button.primary(@click="showModal=!showModal") Open
      .modal(:open="showModal" @click="showModal=!showModal")
        section(@click.stop)
            h1 Hey modal
            main
            nav
              button.primary(@click="showModal=!showModal") Close

  .panel
    h1 Toast
      button.primary(@click="show")
  .panel
    h1 Alert

  .panel
    h1 Phone number



</template>
<style lang="postcss" scoped>
span.badge {
  height: 2rem;
  width: 2rem;
  display: block;
  margin-top: 1rem;
  border-radius: 0.7 rem;
  background-color: blue;
}

.btns > button {
  margin-bottom: 1rem;
}

.panel {
  padding: 1.5rem;
}

.accordian-content {
  padding: 1.5em;
}
</style>
