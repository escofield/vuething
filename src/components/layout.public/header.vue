<script>
import { cssVariables } from '@/AppConfig'

export default {
  name: 'public-header',
  mixins: [],
  data() {
    return {
      dark: false,
    }
  },
  watch: {
    dark: function(newValue) {
      const theme = newValue ? 'dk' : 'lt'
      const html = document.querySelector(':root')
      cssVariables.forEach(v => {
        html.style.setProperty(`--${v}`, `var(--${theme}-${v})`)
      })
    },
  },
}
</script>
<template lang="pug">
.header
  label(for="theme") Dark?
  input(v-model="dark" type="checkbox" name="theme")
</template>
<style scoped>
.header {
}
</style>
