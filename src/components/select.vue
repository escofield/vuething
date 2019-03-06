<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'Select',
  props: ['value', 'options'],
  mixins: [],
  directives: {
    ClickOutside,
  },
  data() {
    const ops = []
    if (Array.isArray(this.options)) {
      this.options.forEach(e => {
        if ('string' == typeof e) {
          ops.push({ text: e, value: e })
        } else if ('object' == typeof e) {
          ops.push({ text: e.text, value: e.value })
        }
      })
    }
    return {
      cValue: this.value,
      ops,
      showlist: false,
    }
  },
  computed: {
    valueText() {
      const v = this.ops.find(e => e.value == this.cValue)
      return v.text
    },
  },
  methods: {
    select(o) {
      this.showlist = false
      this.cValue = o.value
      this.$emit('input', o.value)
      this.$emit('change', o.value)
    },
    hide(e) {
      if (e.srcElement != this.$refs.select) {
        this.showlist = false
      }
    },
  },
}
</script>
<template lang="pug">
label.vp-select(@click.self="showlist = true" ref="select") {{ valueText }}
  ul(v-if="showlist" v-click-outside="hide")
    li(v-for="o in ops" @click="select(o)") {{ o.text }}
    
</template>
<style lang="postcss" scoped>
label.vp-select {
  position: relative;
  display: inline-block;
}
label.vp-select:hover {
  cursor: pointer;
}
label.vp-select:after {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23515a6e' d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'/%3E%3C/svg%3E");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 1.5rem 1rem;
  width: 1.5rem;
  height: 1.2rem;
  display: inline-block;
  position: absolute;
  right: -1.5rem;
  top: 0;
}
label.vp-select > ul {
  position: absolute;
  top: calc(100% - 1rem);
  right: -1rem;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  display: inline-block;
  padding: 0;
  border: solid 1px var(--control-5);
  box-shadow: 2px 2px 6px var(--shadow-color-2);
  background-color: var(--control-1);
  z-index: 5;
}
label.vp-select > ul > li {
  padding-right: 1rem;
  padding-left: 1rem;
  white-space: nowrap;
}
label.vp-select > ul > li:hover {
  background-color: var(--info-2);
  color: var(--control-1);
}
</style>
