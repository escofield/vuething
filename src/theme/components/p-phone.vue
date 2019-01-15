<script>
import inputComponent from './input-component'

export default {
  name: 'phone',
  mixins: [inputComponent],
  props: {
    name: {
      type: String,
      default: 'phone',
    },
    masked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      validateExpression: {
        required: this.required,
        min: 10,
        regex: /\(?([2-9][0-9]{2})\)?[-. ]{0,}([0-9]{3})[-. ]{0,}([0-9]{4})/,
      },
      prevalue: '',
      labeli: this.label || this.$t('$labels.phone'),
    }
  },
  watch: {
    value: function(val) {
      if (val != this.cValue) {
        this.cValue = val
        this.formatValue()
      }
    },
  },
  methods: {
    formatValue(event) {
      const handleFormat = function(value) {
        const pattern = /([\D])?(?=(\d{0,3}))\2([\D]){0,2}(?=(\d{0,3}))\4([\D])?(?=(\d{0,4}))\6/
        let match = value.match(pattern)
        if (match) {
          match.splice(1, 0, '')
        }
        return match
      }
      const handleCountryFormat = function(value) {
        const pattern = /(?=(\+\d{0,3}))\1([\D])?(?=(\d{0,3}))\3([\D]){0,2}(?=(\d{0,3}))\5([\D])?(?=(\d{0,4}))\7/
        return value.match(pattern)
      }
      if (event && (event.code === 'Backspace' || event.code == 'Delete'))
        return this.handleChange()
      let match =
        handleCountryFormat(this.cValue || '') ||
        handleFormat(this.cValue || '')
      let result = ''

      if (match[1]) {
        result = `${match[1]}`
      }
      if (match[2] || (match[3] && match[3].length >= 1)) {
        result = `${result}(`
      }
      if (match[3]) {
        result = `${result}${match[3]}`
      }
      if (match[4] || (match[3] && match[3].length >= 3)) {
        result = `${result}) `
      }
      if (match[5]) {
        result = `${result}${match[5]}`
      }
      if (match[6] || (match[5] && match[5].length >= 3)) {
        result = `${result}-`
      }
      if (match[7]) {
        result = `${result}${match[7]}`
      }
      this.cValue = result
      return this.handleChange()
    },
  },
  computed: {
    maskedNumber() {
      return this.$options.filters['phone-mask'](this.cValue)
    },
  },
}
</script>
<template lang="pug">
.phone
  input(:name="name"
        v-model="cValue"
        type="text"
        @on-keyup="formatValue"
        :disabled="disabled")
</template>
<style lang="postcss" scoped>
.phone {
}

.maskedPhone {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  width: 100%;
}

.maskedPhone > .input {
  line-height: 2.5rem;
  border-radius: 4px;
}
</style>
