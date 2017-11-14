<template>
  <div>
    <Nav/>
    <Hero/>
    <About/>
    <Products/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Products from '~/components/Products.vue'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Hero,
    About,
    Products,
    Nav
  }
}
</script>

<style lang="sass">

  .home-block
    padding: 3rem 0

</style>
