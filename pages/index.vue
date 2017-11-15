<template>
  <div>
    <Nav/>
    <Hero/>
    <About/>
    <Products/>
    <ContactUs/>
    <Bottom/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Products from '~/components/Products.vue'
import Nav from '~/components/Nav.vue'
import ContactUs from '~/components/ContactUs.vue'
import Bottom from '~/components/Bottom.vue'

export default {
  components: {
    Hero,
    About,
    Products,
    ContactUs,
    Bottom,
    Nav
  }
}
</script>

<style lang="sass">

  .home-block
    padding: 3rem 1rem

</style>
