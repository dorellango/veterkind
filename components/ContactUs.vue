<template>
  <div class="contact-us">
    <div class="container home-block">
      <div class="contact-us__inner">
        <span>¿Tienes dudas? Nosotros te ayudamos. </span> 
        <div class="contact-us__button">
          <nuxt-link to="/contact" class="btn btn-p btn-lg box-sh">Contáctanos</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '~assets/sass/variables'

  .contact-us
    background-color: $lighter
    color: $grey
    .contact-us__inner
      display: flex
      justify-content: center
      align-items: center
      span
        display: block
        font-size: 1.5rem
      .contact-us__button
        margin-left: 1.25rem
  
</style>
