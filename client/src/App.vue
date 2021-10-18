<template>
  <div>
    <MainInterface />
    <Portrait />
    <Content />
  </div>
</template>

<script>
import MainInterface from "./components/MainInterface.vue"
import Portrait from "./components/Portrait.vue"
import Content from "./components/Content.vue"

export default {
  name: 'App',
  components: {
    MainInterface,
    Portrait,
    Content
  }
}
</script>

<style>

body
{
  margin-top: 56px;
  height: 2000px;
  font-family: 'Roboto', sans-serif;
  background: #a8bdca
}

pre
{
  font-family: 'Roboto', sans-serif;
}




</style>
