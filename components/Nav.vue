<template>
  <div class="navbar animated fadeInDown shadow border-t-4 border-teal relative bg-white">
    <div class="container">
      <div class="navbar__inner flex items-center h-16">
        <div class="navbar__brand">
          <a class="hidden md:inline-block" href="/"><img class="h-12" src="/logo.png" alt="Veterkind Logo"></a>
          <a class="md:hidden" href="/"><img class="h-12 opacity-75" src="/logo_mini.png" alt="Veterkind Logo"></a>
        </div>
        <div class="navbar__links hide-m">
          <nuxt-link class="mr-4 text-grey-dark" to="/">Inicio</nuxt-link>
          <nuxt-link class="mr-4 text-grey-dark" to="/products">Productos</nuxt-link>
        </div>
        <div class="navbar__right ml-auto">
           <a href="/contact" class="btn btn-p filled">Contacto</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jump from 'jump.js'

export default {
  methods: {
    jumpTo (target) {
      jump(target)
    }
  }

}
</script>

<style lang="sass">

  .navbar
    z-index: 1000
    .navbar__inner
      .navbar__links
        margin-left: 1rem
        flex-grow: 1
        text-align: right
        margin-right: .75rem
</style>
