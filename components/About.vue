<template>
  <div class="about-us">
    <div class="container home-block about-us__inner">
      <div class="home-heading">
        <span class="subtitle">Una breve</span>
        <h1 class="title">Historia</h1>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div class="about-us__body">
            <p><strong>Veterkind</strong>, nace de los requerimientos de nuestros clientes del área médica Veterinaria y humana.</p>     
            <p>Retroalimentandonos de estos, es que se crea la línea y se diseña a partir del año 2011, nuestra línea única de Mesas Veterinarias, ganadora de <strong>SERCOTEC año 2013</strong>, que dio un gran impulso a las nuevas líneas, obteniendo un gran éxito hasta el día de hoy.</p>
            <p>Bajo la misma marca el desarrollo de caniles, cunas, jaulas trampas, porta sueros y otros, a medida y bajo estrictos estándares de construcción y diseño  a carago de un Ingeniero Industrial, nos han dado un importante lugar como proveedores a nivel nacional.</p>
            <p>Las garantías ofrecidas, nuestro servicio pos venta rápido y eficaz, nos permiten seguir siendo los primeros fabricantes en todo nuestro Pais.</p>
          </div>
        </div>
        <div class="column is-half">
          <div class="about-us__image">
            <div class="thumb">
              <img class="box-sh" src="~static/about-us.jpg" alt="About Us">
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<style lang="sass">
  @import "~assets/sass/variables"
  @import "~assets/sass/mixins"

  .about-us
    background-color: $lighter
    color: $grey
    .about-us__inner
      .title
        color: $darker
      .about-us__body strong
        color: $dark
      .about-us__image
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        +mobile
          margin-top: 1.25rem
        .thumb
          position: relative
          &:after
            content: ''
            background-color: $teal
            top: -30px
            left: 30px
            right: -30px
            bottom: 30px
            position: absolute
          img
            position: relative
            z-index: 1
            width: 350px
            height: auto
            display: block
          
</style>
