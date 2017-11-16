<template>
  <div class="featured">
    <div class="featured__inner home-block">
      <div class="heading">
        <span class="subtitle txt-sh">Vitrina</span>
        <h1 class="title txt-sh">Productos Populares</h1>
      </div>
      <div class="columns featured__products">
        <div class="column is-one-third">
          <div class="card">
            <div class="card__media box-sh">
              <img src="~static/about-us.jpg" alt="">
            </div>
            <div class="card__content">
              <h4 class="card__heading">Lorem, ipsum dolor.</h4>
              <span class="card__meta">
                Provident voluptate.
              </span>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card__media box-sh">
              <img src="~static/about-us.jpg" alt="">
            </div>
            <div class="card__content">
              <h4 class="card__heading">Lorem, ipsum dolor.</h4>
              <span class="card__meta">
                Provident voluptate.
              </span>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card__media box-sh">
              <img src="~static/about-us.jpg" alt="">
            </div>
            <div class="card__content">
              <h4 class="card__heading">Lorem, ipsum dolor.</h4>
              <span class="card__meta">
                Provident voluptate.
              </span>
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

export default {
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

