<template>
  <div class="featured">
    <div class="featured__inner home-block">
      <div class="heading">
        <span class="subtitle txt-sh"> Check our stuff 👌</span>
        <h1 class="title txt-sh">Featured Products</h1>
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
        <a href="" class="btn btn-a">More Products</a>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '~assets/sass/variables'
  .featured
    position: relative
    .heading
      z-index: -1
    .featured__products
      margin-top: 135px
    .featured__inner
      max-width: 890px
      margin: 0 auto
    .featured__buttons
      margin-top: 2.5rem
      text-align: center

</style>

