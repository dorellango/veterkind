<template>
  <div class="quality">
    <div class="container home-block quality__inner">
      <div class="home-heading">
        <span class="subtitle">¡Calidad primero!</span>
        <h1 class="title">Fabricación</h1>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div class="quality__item">
            <Worker class="quality__image"/>
            <div class="quality__body">
              <h4>Producto original</h4>
              <p>Nuestas líneas son fabricadas 100% en nuestros talleres de metalmecánica, producto CHILENO.</p>
            </div>
          </div>
          <div class="quality__item">
            <Gear class="quality__image"/>
            <div class="quality__body">
              <h4>A medida</h4>
              <p>Para satisfacer los requerimientos de nuestros clientes, se realizan visitas a terreno, de tal suerte de adecuar los muebles clínicos, Caniles de hospitalización, de guarda, etc.</p>
            </div>
          </div>
        </div>
        <div class="column is-half">
          <div class="quality__item">
            <Monitor class="quality__image"/>
            <div class="quality__body">
              <h4>Calidad superior</h4>
              <p>Las materias primas utilizadas, cumplen con protocolos de alta calidad en aceros grado médico, Polimeros, Eco químicos, y un estricto control de calidad.</p>
            </div>
          </div>
          <div class="quality__item">
            <Customer class="quality__image"/>
            <div class="quality__body">
              <h4>Clientes satisfechos</h4>
              <p>Veterkind, es reconocido por nuestros clientes privados y más de 100 Municipios,  que cuentan con nuestras Mesas Quirúrgicas para satisfacer los programas de esterilización a nivel Nacional, así como clínicas móviles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gear from '~/static/svg/gear.svg'
import Worker from '~/static/svg/worker.svg'
import Monitor from '~/static/svg/monitor.svg'
import Customer from '~/static/svg/customer.svg'

export default {
  components: {
    Gear,
    Worker,
    Monitor,
    Customer
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'

  .quality__inner
    color: $grey
    .subtitle
      color: $grey
    .title
      color: $darker
    .quality__item
      max-width: 480px
      margin: 0 auto
      display: flex
      margin-bottom: 1.25rem
      svg.quality__image
        fill: $teal
        width: 4rem
        height: 4rem
        margin-right: 1.25rem
      .quality__body
        h4
          font-family: "Open Sans"
          color: $teal
          font-weight: bold
          letter-spacing: 1.2px
</style>
