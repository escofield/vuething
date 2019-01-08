<script>
const default_layout = 'default'

export default {
  name: 'App',
  data: function() {
    return {}
  },
  computed: {
    layout() {
      const retVal = 'layout-' + (this.$route.meta.layout || default_layout)
      return retVal
    },
  },
}
</script>

<template lang="pug">
  component(:is="layout")
</template>
