<script>
import VueTidyRoutes from 'vue-tidyroutes'

let Stylish = {
  name: 'stylish',
  mixins: [],
  data() {
    return {
      msg: 'some data',
      showModal: false,
      loading: false,
      phoneNo: '3211231324',
      iconHome: ['icon', 'icon-home'],
      badgeCount: 5,
      btnSuccess: 'success',
    }
  },
  methods: {
    show() {
      alert('not implemented')
    },
    closeChip() {
      console.log('close chip')
    },
    closeModal() {
      console.log('close modal')
    },
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


  router-link(:to="{ name:'default' }") away
  div(v-p:panel title="Fonts")
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

  div(v-p:panel title="Inputs")
    label(v-p:label.required for="iname") Input label
    input(name="iname" value="some text")

    label(for="iname") Input label
    input(name="iname" value="some text" v-p:prefix="iconHome" v-p:postfix.icon.icon-homeOutline)

  div(v-p:panel title="Buttons")
    p.btns
      button(v-p:button.primary) primary
      button(v-p:button="btnSuccess") success
      button(v-p:button.info) info
      button(v-p:button.warning) warning
      button(v-p:button.error) error
      button(v-p:button.text) text
      button(v-p:button.default) default

  div(v-p:panel title="Select")
    select
      option Here is the styled select box
      option The second option
      option The third option

  div(v-p:panel title="Checkbox")
    input(type="checkbox" name="chk1") 
    label(for="chk1") Checkbox 1

  div(v-p:panel title="Radio Buttons")
    input(type="radio" name="radioTest" value='1') 
    | option 1
    input(type="radio" name="radioTest" value='2') 
    | option 2
  
  div(v-p:panel title="Badge")
    span(v-p:badge="badgeCount")

  div(v-p:panel title="Tooltip")
    span(v-p:tip tip="this tooltip" ) This tooltip aligns top and starts center.

  div(v-p:panel title="Toggle Switch")
    input(v-p:toggle type="checkbox" name="chk2")
    label(for="chk2") Toggle switch

  div(v-p:panel title="Slider")
    input(type="range" min="1" max="100" value="50")

  div(v-p:panel title="Hyperlink")
    a() Go here!

  div(v-p:panel title="Panel")
      p some panel with some text and stuff.  Whow knows what you can put into a panel!  The world is your Oyster!

  div(v-p:panel title="Chips")
    div
      span(v-p:chip.close="closeChip") hellen@highwater.com
      span(v-p:chip) sam@thatplace.com
      span(v-p:chip) hob@shire.com

  div(v-p:panel title="Accordian")
    p You can change the accordian to collapse by setting the inputs as radio buttons instead of checkbox's
      div
        section(v-p:accordian.single title="Panel 1" name="accGroup1")
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      div
        section(v-p:accordian.single title="Panel 2" name="accGroup1")
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      div
        section(v-p:accordian.single title="Panel 3" name="accGroup1")
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      div
        section(v-p:accordian.single title="Panel 4" name="accGroup1")
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
  div(v-p:panel title="Modal")
    button(v-p:button.primary @click="showModal=!showModal") Open
    div(v-p:modal.close="closeModal" :open="showModal" @click="showModal=!showModal")
      section(@click.stop)
        h1 Hey modal
        main
        nav
          button(v-p:button.primary @click="showModal=!showModal") Close

  div(v-p:panel title="Toast")
    button(v-p:button.primary @click="show")

  div(v-p:panel title="Alert")

  div(v-p:panel title="Phone number")
    input(v-phone-number="phoneNo" v-model='phoneNo')
    br
    | {{ phoneNo }}
    br
    | filltered phone {{ phoneNo | phone }}

  div(v-p:panel title="Password")

  div(v-p:panel)
    div
      h1 Loading
      div(v-p:loading v-if="loading")
    button(v-p:button.primary @click="loading=!loading")  loading toggle


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

.parent {
  position: relative;
}
</style>
