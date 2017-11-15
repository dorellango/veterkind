<template>
  <div class="navbar animated fadeInDown">
    <div class="container">
      <div class="navbar__inner">
        <div class="navbar__brand">
          <!-- <img src="~static/logo.jpg" alt="Veterkind Logo"> -->
        </div>
        <div class="navbar__links">
          <a href="/">Inicio</a>
          <a href="">Nosotros</a>
          <a href="">Productos</a>
          <a href="">Fabricación</a>
        </div>
        <div class="navbar__right">
           <a href="" class="btn btn-p filled">Contactános</a>
           <a href="">Quo.</a>
        </div>
      </div>
    </div>
  </div>
</template>
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
        display: flex
        align-items: center
        img
          max-height: 80%
          height: auto
      .navbar__links 
        margin-left: 1rem
        flex-grow: 1
        a
          color: $dark
          margin-right: 1rem
      .navbar__right
        a
          margin-right: 1rem
          &:not(.btn)
            color: $dark
</style>

