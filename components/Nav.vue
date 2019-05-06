<template>
  <div class="navbar animated fadeInDown shadow border-t-4 border-teal relative bg-white">
    <div class="container">
      <div class="navbar__inner flex items-center h-16">
        <div class="navbar__brand">
          <a class="hide-m" href="/"><img class="h-12" src="/logo.png" alt="Veterkind Logo"></a>
          <a class="hide-t" href="/"><img class="h-12" src="/logo_mini.png" alt="Veterkind Logo"></a>
        </div>
        <div class="navbar__links hide-m">
          <nuxt-link class="mr-2 text-grey-dark" to="/">Inicio</nuxt-link>
          <nuxt-link class="mr-2 text-grey-dark" to="/products">Productos</nuxt-link>
        </div>
        <div class="navbar__right">
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
  @import '~assets/sass/variables'
  @import '~assets/sass/mixins'

  $navbar-bg: $lightest
  $navbar-br: $teal

  .navbar
    z-index: 1000
    .navbar__inner
      .navbar__links
        margin-left: 1rem
        flex-grow: 1
        text-align: right
        margin-right: .75rem
        // a
        //   cursor: pointer
        //   color: $dark
        //   margin-right: 1rem
      .navbar__right
        a
          margin-right: 1rem
          svg
            fill: white
          &:not(.btn)
            color: $dark
</style>
