export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$validator = this.validator
  },
  data() {
    return {
      cValue: this.value,
    }
  },
  watch: {
    value: function(val) {
      this.cValue = val
    },
  },
  methods: {
    handleChange() {
      this.$emit('input', this.cValue)
    },
  },
}
