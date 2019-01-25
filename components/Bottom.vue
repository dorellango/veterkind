<template>
  <div class="bottom">
    <div class="container bottom__inner">
      <div class="bottom__links">
        <a href="/">Inicio</a>
        <a href="/contact">Contacto</a>
        <a href="/products">Productos</a>
        <a href=""><Smartphone class="icon"/> +6718246723</a>
        <img class="sponsored" src="~static/sercotec.png" alt="">
      </div>
      <div class="copyright">
        <strong>&copy; Veterkind Ltda. 2019</strong> / Muebles clínicos a medida.
      </div>
    </div>
  </div>
</template>

<script>
import Smartphone from '~/static/svg/smartphone.svg'

export default {
  components: {
    Smartphone
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'
  @import '~assets/sass/mixins'

  .bottom
    text-align: center
    background-color: $darkest
    color: $light
    .bottom__inner
      padding: 4rem 1rem
    .bottom__links
      margin-bottom: 1.25rem
      padding-bottom: 1.25rem
      border-bottom: 1px solid $darker
      text-transform: uppercase
      display: flex
      justify-content: center
      align-items: center
      a
        color: $teal
        margin: 0 .75rem
        svg
          fill: $teal
      +mobile
        flex-wrap: wrap
        a
          width: 100%
          margin-bottom: .75rem
    .sponsored
      margin-top: .75rem
      height: 50px
      opacity: .8
    .copyright
      color: $dark
      strong
        color: $light
</style>
