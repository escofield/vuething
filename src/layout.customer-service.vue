<script>
import IdleJs from 'idle-js'
import { csIdle, csNotifyIdle } from './AppConfig'

export default {
  name: 'layout-customer-service',
  data() {
    return {
      isAppIdle: false,
      idleOut: csNotifyIdle,
      idleTime: csIdle,
    }
  },
  methods: {
    iAmAlive(value) {
      if (value) {
        this.isAppIdle = false
      }
    },
  },
  mounted() {
    //console.log(`idleTime is ${this.idleTime}`)
    new IdleJs({
      idle: this.idleTime,
      events: ['mousemove', 'keydown', 'mousedown', 'touchstart'],
      keepTracking: true,
      startAtIdle: true,
      onShow: () => {
        //console.log('onShow')
      },
      onActive: () => {
        //console.log('onActive')
      },
      onHide: () => {
        //console.log('onHide')
      },
      onIdle: () => {
        //console.log('onIdle')
        this.isAppIdle = true
      },
    }).start()
  },
}
</script>
<template lang="pug">
.app
  idle-display(:notifyIdle="idleOut" v-if="isAppIdle" @iAmAlive="iAmAlive")
  .customer-support.layout
    header
    aside
    main
      router-view
    footer
      site-footer
</template>
<style scoped>
</style>
