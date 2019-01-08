<script>
import VueTidyRoutes from 'vue-tidyroutes'
import { GUID } from '@/AppConfig'

let {{{className}}} = {
  name: '{{{componentName}}}',
  mixins: [],
  data() {
    return {
      msg: 'some data',
    }
  },
}
VueTidyRoutes.route(`/:locale(\\w\\w)?/{{{fileName}}}`, {
  name: '{{{componentFullName}}}',
  component: {{{className}}},
  meta: { layout: 'authenticated' },
})

export default {{{className}}}
</script>
<template lang="pug">
.{{{componentName}}} Hello from {{{componentName}}} component
</template>
<style lang="postcss" scoped>
.{{{componentName}}} {}
</style>
