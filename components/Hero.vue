<template>
  <div class="hero">
    <div class="hero__image"></div>
    <div class="container hero__inner">
      <div class="hero__body">
        <p class="hero__subtitle">Lorem ipsum dolor sit amet consectetur.</p>
        <h1 class="hero__title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <div class="hero__buttons">
          <a href="#" class="btn btn-a">Click Me!</a>
          <a href="#" class="btn">Contact Us!</a>
        </div>
      </div>
    </div>
  </div>  
</template>

<style lang="sass">
  @import "~assets/sass/variables"
  $hero-bg: $teal
  
  .hero
    height: calc(100vh - 70px) // 70px is the navbar height
    position: relative
    margin: 0 30px
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
      .hero__body
        max-width: 500px
        h1.hero__title
          font-weight: 700
          margin-bottom: 1rem
          font-size: 2.75rem
          text-shadow: 0 1px 2px rgba(0,0,0, 0.20)
        p.hero__subtitle
          color: #e8fffe
          text-shadow: 0 1px 2px rgba(0,0,0, 0.20)
        .hero__buttons
          padding-top: 2rem
          // border-top: 1px solid #C6E6E5
          .btn
            margin-right: 1rem

</style>
