<template>
  <div class="navbar animated fadeInDown">
    <div class="container">
      <div class="navbar__inner">
        <div class="navbar__brand">
          <a class="hide-m" href="/"><img src="~static/logo.png" alt="Veterkind Logo"></a>
          <a class="hide-t" href="/"><img src="~static/logo_mini.png" alt="Veterkind Logo"></a>
        </div>
        <div class="navbar__links">
          <a href="/">Inicio</a>
          <nuxt-link to="/products">Productos</nuxt-link>
        </div>
        <div class="navbar__right">
           <a href="" class="btn btn-p filled"><Support class="icon"/> Contacto</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Support from '~/static/svg/support.svg'
import jump from 'jump.js'

export default {
  components: {
    Support
  },
  methods: {
    jumpTo (target) {
      jump(target)
    }
  }

}
</script>

<style lang="sass">
  @import '~assets/sass/variables'
  
  $navbar-bg: $lightest
  $navbar-br: $teal

  .navbar
    position: relative
    z-index: 1000
    background-color: $navbar-bg
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.10)
    border-top: 10px solid $navbar-br
    .navbar__inner
      height: 70px
      display: flex
      align-items: center
      .navbar__brand
        height: 100%
        a 
          height: 70px         
          display: flex
          align-items: center
        img          
          max-height: 70%
          width: auto
          opacity: .7
      .navbar__links 
        margin-left: 1rem
        flex-grow: 1
        text-align: right
        margin-right: .75rem
        a
          cursor: pointer
          color: $dark
          margin-right: 1rem
      .navbar__right
        a
          margin-right: 1rem
          svg
            fill: white
          &:not(.btn)
            color: $dark
</style>

