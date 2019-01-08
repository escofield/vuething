<script>
export default {
  name: 'layout-default',
}
</script>
<template lang="pug">
.app
  .public.layout
    .header
      public-header
    .content
      router-view
    .footer
      site-footer
</template>
<style lang="postcss" scoped>
</style>
