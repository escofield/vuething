<script>
import VueTidyRoutes from 'vue-tidyroutes'

let Default = {
  name: 'default',
  mixins: [],
  data() {
    return {
      msg: 'some data',
    }
  },
}
VueTidyRoutes.route(`/:locale(\\w\\w)?/`, {
  name: 'default',
  component: Default,
  meta: { layout: 'authenticated' },
})

export default Default
</script>
<template lang="pug">
.default Hello from default component
</template>
<style scoped>
.h7 {
  @mixin h7;
}
</style>
