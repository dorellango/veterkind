<template>
  <div>
    <Nav/>
    <div class="products">
      <div class="heading">
        <span class="subtitle txt-sh">Vitrina 👌</span>
        <h1 class="title txt-sh">Catálogo completo</h1>
      </div>
      <div class="container products__inner">
        <div v-for="(product, index) in products" :key="index" class="product__item">
          <div class="product__image box-sh">
            <img :src="product.image" alt="">
          </div>
          <div class="product__content">
            <div class="product__meta">
              <span class="subtitle" style="display: inline-block; margin-right: 2px;">Veterinaria</span> <!-- TODO add custom category -->
              <span v-show="product.is_new" class=""
                style="border-color: #f6993f; background-color: #f6993f; padding: 2px 4px; color:white; font-size: x-small; border-radius: 5px; text-transform: uppercase;">nuevo</span>
            </div>
            <h2 class="product__heading" v-text="product.title"></h2>
            <div class="product__body">
              <p v-text="product.description"></p>
              <a class="mt-4 text-teal-lightest px-2 py-1 rounded bg-teal text-xs tracking-wide inline-flex items-center" href="">
                <svg class="h-3 w-3 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>
                Descargar Ficha
              </a>
            </div>
          </div>
        </div>

        <!-- Where buy? -->
        <div class="where-buy">
          <span class="subtitle">Encuentra nuestros productos en:</span>
          <div class="where-buy__places">
            <a href="https://www.osm.cl/tienda?s=veterkind&post_type=product"><img src="https://www.osm.cl/wp-content/uploads/2016/11/osm_logo.png" alt=""></a>
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
import products from '~/components/products.js'

export default {
  data () {
    return {
      products: products
    }
  },
  components: {
    Nav,
    Bottom
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'
  @import '~assets/sass/mixins'

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
      +mobile
        flex-wrap: wrap
      &:not(:last-child)
        margin-bottom: 1.25rem
      .product__image
        width: 33.33%
        flex-shrink: 0
        height: auto
        position: relative
        +mobile
          width: 100%
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
      padding-top: 1rem
      border-top: 1px dashed $light
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
          max-height: 40px
          display: block
          height: auto
          filter: grayscale(100%)
          opacity: .3
          transition: all .3s ease
          &:hover
            opacity: .8
            filter: grayscale(0%)

</style>
