<template>
  <div>
    <Nav/>
    <div class="products">
      <div class="heading">
        <span class="subtitle txt-sh">Vitrine 👌</span>
        <h1 class="title txt-sh">All our products!</h1>
      </div>
      <div class="container products__inner">
        <div class="product__item">
          <div class="product__image box-sh">
            <img src="~/static/about-us.jpg" alt="">
          </div>
          <div class="product__content">
            <span class="product__meta subtitle">Veterinary</span>
            <h2 class="product__heading">Lorem ipsum dolor sit amet.</h2>
            <div class="product__body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illo velit. Dolores explicabo assumenda fugiat?</p>
              <p>Nam, magni veniam dicta ipsum pariatur vel id iure velit, amet ab quas aliquid dignissimos?</p>
              <p>Provident animi facere in, alias rem ad iste, quibusdam dolorum eum, nam debitis voluptatibus perspiciatis?</p>
            </div>
          </div>
        </div>

        <!-- Where buy? -->
        <div class="where-buy">
          <span class="subtitle">Interested? Find us in...</span>
          <div class="where-buy__places">
            <img src="https://www.osm.cl/wp-content/uploads/2016/11/osm_logo.png" alt="">
            <img src="https://newrelic.cdn.prismic.io/newrelic/972eb862e5d3a50e4f7c525b931458e89d292835_casestudy_mercadolibre_logo.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <Bottom/>
  </div>  
</template>

<script>
import Nav from '~/components/Nav.vue'
import Bottom from '~/components/Bottom.vue'

export default {
  components: {
    Nav,
    Bottom
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'

  .products
    background-color: $lighter
    padding: 3rem 1rem
    position: relative
    .products__inner
      max-width: 780px
      position: relative
      z-index: 1
      margin: 0 auto
      margin-top: 250px
    .product__item
      position: relative
      display: flex
      align-items: center
      &:not(:last-child)
        margin-bottom: 1.25rem
      .product__image
        max-width: 33.33%
        height: auto
        position: relative
        &:after
          position: absolute
          z-index: -1
          background-color: $teal
          content: ''
          top: 0
          left: 0
          right: 0
          bottom: 0
          margin:
            left: -1rem
            top: -1rem
            bottom: 1rem
            right: 1rem
        img
          vertical-align: bottom
      .product__content
        padding: .75rem
        padding-left: 1.25rem
        .product__meta
          font-size: small
          color: $grey
        .product__heading
          color: $darker
          font-weight: 700
          margin-bottom: .5rem
        .product__body
          color: $grey
    
    .where-buy
      .title
         color: $darker
      .subtitle
        color: $grey
      .where-buy__places
        margin-top: 1.25rem
        display: flex
        align-items: center
        justify-content: flex-start
        img
          margin-right: 1.25rem
          max-width: 200px
          display: block
          height: auto
          filter: grayscale(100%)
          opacity: .3
          transition: all .3s ease
          &:hover
            opacity: .8
            filter: grayscale(0%)

</style>

