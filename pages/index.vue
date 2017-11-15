<template>
  <div>
    <Nav/>
    <Hero/>
    <About/>
    <Quality/>
    <Featured/>
    <ContactUs/>
    <Bottom/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Featured from '~/components/Featured.vue'
import Nav from '~/components/Nav.vue'
import ContactUs from '~/components/ContactUs.vue'
import Bottom from '~/components/Bottom.vue'
import Quality from '~/components/Quality.vue'

export default {
  components: {
    Hero,
    About,
    Featured,
    ContactUs,
    Bottom,
    Quality,
    Nav
  }
}
</script>

<style lang="sass">

  .home-block
    padding: 3rem 1rem
  .home-heading
    margin-bottom: 2.5rem

</style>
