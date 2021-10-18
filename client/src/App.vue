<template>
  <div>
    <Navbar />
    <Portrait />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Portrait from "./components/Portrait.vue"
import Content from "./components/Content.vue"
import Footer from "./components/Footer.vue"

export default 
{
  name: 'App',
  components: 
  {
    Navbar,
    Portrait,
    Content,
    Footer
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
