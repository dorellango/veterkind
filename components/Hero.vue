<template>
  <div class="hero">
    <div class="hero__image"></div>
    <div class="container hero__inner">
      <div class="hero__body animated fadeIn">
        <span class="hero__subtitle subtitle txt-sh">Lorem ipsum dolor sit amet consectetur.</span>
        <h1 class="hero__title title txt-sh">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <div class="hero__buttons">
          <a @click="jumpTo('.featured')" class="btn btn-a">¡Nuevos!</a>
          <nuxt-link to="/contact" class="btn">Contáctanos</nuxt-link>
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
  @import "~assets/sass/variables"
  $hero-bg: $teal
  
  .hero
    height: 100vh
    margin-top: -70px
    position: relative
    background-color: rgba($hero-bg, .4)
    .hero__image
      background-image: url(~static/banner.jpg)
      background-size: cover
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      z-index: -1
      filter: grayscale(100%)
    .hero__inner
      padding: 1.5rem
      height: 100%
      color: white
      display: flex
      align-items: center
      .hero__subtitle
        color: #e8fffe
      .hero__body
        max-width: 500px
        .hero__buttons
          padding-top: 2rem
          .btn
            box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.20)
            &:not(:last-child)
              margin-right: 1rem
</style>
