
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>


<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p class="bob">Some bob</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<style scoped>
.bob {
  color: var(--myYellow);
}
.home{
  & .bob {
    color: yellow;
  }
}
</style>
