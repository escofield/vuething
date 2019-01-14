<script>
import IdleJs from 'idle-js'
import { idle, notifyIdle } from './AppConfig'

export default {
  name: 'layout-authenticated',
  data() {
    return {
      isAppIdle: false,
      idleOut: notifyIdle,
      idleTime: idle,
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
  .authenticated
    aside
      authenticated-sider
    .layout
      header
        authenticated-header
      main
        router-view
      footer
        site-footer
</template>

<style scoped>
.authenticated {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: auto;
}

aside {
  background-color: blue;
  width: 0px;
  height: 100vh;
  position: sticky;
  align-self: flex-start;
  top: 0;
  transition: 0.5s;
  transition-timing-function: ease-in;
  overflow: hidden;
}

@media screen and (min-width: 1024px) {
  aside {
    width: var(--sider-width);
  }
}
</style>
