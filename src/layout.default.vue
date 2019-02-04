<script>
export default {
  name: 'layout-default',
}
</script>
<template lang="pug">
.app
  .layout
    header
      public-header
    main
      router-view
    footer
      site-footer
</template>
<style lang="postcss" scoped></style>
