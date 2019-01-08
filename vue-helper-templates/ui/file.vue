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
include ../{{#depth}}../{{/depth}}mixins/html
.{{{componentName}}} Hello from {{{componentName}}} component
</template>
<style lang="less" scoped>
@import '../{{#depth}}../{{/depth}}theme/custom.less';
@import '../{{#depth}}../{{/depth}}theme/fluidMixins.less';
.{{{componentName}}} {}
</style>
