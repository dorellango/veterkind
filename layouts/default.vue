<template>
  <div class="wrapper">
    <nuxt/>
  </div>
</template>

<style lang="sass">
  @import "~assets/sass/app.sass"

  .wrapper
    overflow: hidden
  h1, h2, h3, h4, h5, h6
    font-family: "News Cycle"

  h1
    font-size: 2.5rem
  h2
    font-size: 2rem
  h3
    font-size: 1.5rem
  h4
    font-size: 1.25rem
  h5
    font-size: 1rem

  body
    font-family: "Open Sans", arial, sans serif
    font-size: 16px
    line-height: 1.5

  .container
    max-width: 1152px
    margin: 0 auto
    padding: 0 1rem

</style>
