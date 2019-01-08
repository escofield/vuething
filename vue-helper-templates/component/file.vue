<script>
export default  {
  name: '{{{componentName}}}',
  mixins: [],
  data() {
    return {
      msg: 'some data',
    }
  },
}
</script>
<template lang="pug">
.{{{componentName}}} Hello from {{{componentName}}} component
</template>
<style lang="postcss" scoped>
.{{{componentName}}} {}
</style>
