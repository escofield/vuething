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
  .vp-panel
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

  .vp-panel
    h1 Inputs
    label.vp-required(for="iname") Input label
    input(name="iname" value="some text")

    label(for="iname") Input label
    i.vp-prefix.icon.icon-home
    input.vp-prefix.vp-postfix(name="iname" value="some text")
    i.icon.vp-postfix.icon.icon-homeOutline

  .vp-panel
    h1 Buttons
    p.btns
      button.vp-btn-primary primary
      button.vp-btn-success success
      button.vp-btn-info info
      button.vp-btn-warning warning
      button.vp-btn-error error
      button.vp-btn-text text
      button.vp-btn-default default

  .vp-panel
    h1 Select
    select
      option Here is the styled select box
      option The second option
      option The third option

  .vp-panel
    h1 Checkbox
    input(type="checkbox" name="chk1") 
    label(for="chk1") Checkbox 1

  .vp-panel
    h1 Radio Buttons
    input(type="radio" name="radioTest" value='1') 
    | option 1
    input(type="radio" name="radioTest" value='2') 
    | option 2
  
  .vp-panel
    h1 Badge
    span.badge.vp-badge(data-count="5")

  .vp-panel
    h1 Tooltip
    span.vp-tooltip(data-tip="this tooltip") This tooltip aligns top and starts center.

  .vp-panel
    h1 Toggle Switch
    input.vp-toggle(type="checkbox" name="chk2")
    label(for="chk2") Toggle switch

  .vp-panel
    h1 Slider
    input(type="range" min="1" max="100" value="50")

  .vp-panel
    h1 Hyperlink
    a() Go here!

  .vp-panel
    h1 Panel
      p some panel with some text and stuff.  Whow knows what you can put into a panel!  The world is your Oyster!

  .vp-panel
    h1 Chips
    div
      span.vp-chip hellen@highwater.com
        .vp-close(@click="closeChip")
      span.vp-chip sam@thatplace.com
      span.vp-chip hob@shire.com

  .vp-panel
    h1 Accordian
    p You can change the accordian to collapse by setting the inputs as radio buttons instead of checkbox's
      div
        input.accordian(type="radio" name="accGroup1" id="panel1")
        label(for="panel1") Panel 1
        section.accordian
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      div
        input.accordian(type="radio" name="accGroup1" id="panel2")
        label(for="panel2") Panel 2
        section.accordian
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      div
        input.accordian(type="radio" name="accGroup1" id="panel3")
        label(for="panel3") Panel 3
        section.accordian
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      div
        input.accordian(type="radio" name="accGroup1" id="panel4")
        label(for="panel4") Panel 4
        section.accordian
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
  .vp-panel
    h1 Modal
    button.vp-btn-primary(@click="showModal=!showModal") Open
    .vp-modal(:data-open="showModal" @click="showModal=!showModal")
      section(@click.stop)
        h1 Hey modal
        main
        nav
          button.vp-btn-primary(@click="showModal=!showModal") Close

  .vp-panel
    h1 Phone number
    input(v-phone="phoneNo" v-model='phoneNo')
    br
    | {{ phoneNo }}

  .vp-panel
    .vp-loading-container
      h1 Loading
      .vp-loading(v-if="loading")
        .vp-loading-mask
          .vp-spinner
    button.vp-btn-primary(@click="loading=!loading")  loading toggle


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
</style>
