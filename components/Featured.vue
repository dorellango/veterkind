<template>
  <div class="featured">
    <div class="featured__inner home-block">
      <div class="heading">
        <span class="subtitle txt-sh">Vitrina</span>
        <h1 class="title txt-sh">Productos Populares</h1>
      </div>
      <div class="columns featured__products">
        <div v-for="(product, index) in products" :key="index" class="column is-one-half">
          <div class="card">
            <div class="card__media box-sh" style="position:relative">
              <span v-show="product.is_new" class="" style="position: absolute; top: 5px; left: 5px; border-color: #f6993f; background-color: #f6993f; padding: 2px 4px; color:white; font-size: x-small; border-radius: 5px; text-transform: uppercase;">nuevo</span>
              <img :src="getImageUrl(product.image)" alt="">
            </div>
            <div class="card__content">
              <h4 class="card__heading" v-text="product.title">.</h4>
              <span class="card__meta" v-text="product.short_description"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="featured__buttons">
        <nuxt-link to="/products" class="btn btn-a"><Shop class="icon icon-2"/> Ver catálogo</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Shop from '~/static/svg/shop.svg'
import products from './products.js'

export default {
  data () {
    return {
      products: products.slice(0, 3)
    }
  },
  methods: {
    getImageUrl (image) {
      return require(`static/${image}`)
    }
  },
  components: {
    Shop
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'
  @import '~assets/sass/mixins'

  .featured
    position: relative
    .heading
      z-index: -1
    .featured__products
      margin-top: 135px
      +mobile
        margin-top: 100px
    .featured__inner
      max-width: 890px
      margin: 0 auto
    .featured__buttons
      margin-top: 2.5rem
      text-align: center

</style>
