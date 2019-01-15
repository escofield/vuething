<script>
import inputComponent from './input-component'

export default {
  name: 'password',
  mixins: [inputComponent],
  props: {
    name: {
      type: String,
      default: 'password',
    },
  },
  data() {
    return {
      showPassword: false,
      passwordIconColor: 'gray',
      passwordIcon: 'md-checkmark-circle',
      labeli: this.label || this.$t('$labels.password'),
      validateExpression: {
        required: this.required,
        min: 10,
      },
    }
  },
  methods: {
    checkPasswordIsValid() {
      if (!this.errors.has('password', this.scope) && this.cValue.length >= 0) {
        this.passwordIconColor = 'green'
        this.passwordIcon = 'md-checkmark-circle'
        return
      }

      if (
        this.errors.has('password', this.scope) &&
        this.cValue.length > 0 &&
        this.cValue.length < 10
      ) {
        this.passwordIconColor = 'red'
        this.passwordIcon = 'md-close-circle'
        return
      }
    },
  },
}
</script>
<template lang="pug">
.Password
  formItem(:prop="name" :data-cy="name")
    label(:for="name" :class="{'required': required}") {{ labeli }}
    Input(:name="name" long @on-change="handleChange" 
          v-model="cValue"
          :type="showPassword ? 'text' : 'password'"
          v-validate.initial="validateExpression"
          :class="{ 'is-danger': errors.has(name,scope) && cValue.length > 0 }"
          @on-blur="checkPasswordIsValid()")
      icon.clickable.rotateHover(:type="showPassword ? 'md-eye-off' : 'md-eye'"
                                  data-cy='showpassword'
                                  slot='suffix'
                                  v-on:click="showPassword = !showPassword"
                                  :color="showPassword ? '#bb16a3' : '#bb16a3'")
    div
      icon.passwordValidIcon(:type="!errors.has(name,scope) && cValue.length >= 10 ? 'md-checkmark-circle' : this.passwordIcon"
                            data-cy='passwordValidIcon'
                            :color="!errors.has(name,scope) && cValue.length >= 10 ? 'green' : this.passwordIconColor")
      span.passwordMessage {{ $t('$controls.password.requriement10')}}
</template>
<style lang="postcss" scoped>
.Password {
}
.passwordValidIcon {
  /* .h4-lh; */
}
.passwordMessage {
  /* .h6; */
  /* .h4-lh; */
}
</style>
