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
  div(v-panel-shim title="Fonts")
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

  div(v-panel-shim title="Inputs")
    label(v-label-shim.required for="iname") Input label
    input(name="iname" value="some text")

    label(for="iname") Input label
    input(name="iname" value="some text" v-prefix-shim="iconHome" v-postfix-shim:icon.icon-homeOutline)

  div(v-panel-shim title="Buttons")
    p.btns
      button(v-button-shim.primary) primary
      button(v-button-shim="btnSuccess") success
      button(v-button-shim.info) info
      button(v-button-shim.warning) warning
      button(v-button-shim.error) error
      button(v-button-shim.text) text
      button(v-button-shim.default) default

  div(v-panel-shim title="Select")
    select
      option Here is the styled select box
      option The second option
      option The third option

  div(v-panel-shim title="Checkbox")
    input(type="checkbox" name="chk1") 
    label(for="chk1") Checkbox 1

  div(v-panel-shim title="Radio Buttons")
    input(type="radio" name="radioTest" value='1') 
    | option 1
    input(type="radio" name="radioTest" value='2') 
    | option 2
  
  div(v-panel-shim title="Badge")
    span(v-badge-shim="badgeCount")

  div(v-panel-shim title="Tooltip")
    span(v-tip-shim tip="this tooltip" ) This tooltip aligns top and starts center.

  div(v-panel-shim title="Toggle Switch")
    input(v-toggle-shim type="checkbox" name="chk2")
    label(for="chk2") Toggle switch

  div(v-panel-shim title="Slider")
    input(type="range" min="1" max="100" value="50")

  div(v-panel-shim title="Hyperlink")
    a() Go here!

  div(v-panel-shim title="Panel")
      p some panel with some text and stuff.  Whow knows what you can put into a panel!  The world is your Oyster!

  div(v-panel-shim title="Chips")
    .chips
      span(v-chip-shim.close) hellen@highwater.com
      span(v-chip-shim) sam@thatplace.com
      span(v-chip-shim) hob@shire.com

  div(v-panel-shim title="Accordian")
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
  
  div(v-panel-shim title="Modal")
    button(v-button-shim.primary @click="showModal=!showModal") Open
    .modal(:open="showModal" @click="showModal=!showModal")
      section(@click.stop)
        h1 Hey modal
        main
        nav
          button(v-button-shim.primary @click="showModal=!showModal") Close

  div(v-panel-shim title="Toast")
    button(v-button-shim.primary @click="show")

  div(v-panel-shim title="Alert")

  div(v-panel-shim title="Phone number")
    input(v-phone-number="phoneNo" v-model='phoneNo')
    br
    | {{ phoneNo }}
    br
    | filltered phone {{ phoneNo | phone }}

  div(v-panel-shim title="Password")

  div(v-panel-shim)
    div
      h1 Loading
      div(v-if="loading" v-loading-shim)
    button(v-button-shim.primary @click="loading=!loading")  loading toggle


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
