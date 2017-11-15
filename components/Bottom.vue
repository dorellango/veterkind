<template>
  <div class="bottom">
    <div class="container bottom__inner">
      <div class="bottom__links">
        <a href="">Lorem.</a>
        <a href="">Eveniet.</a>
        <a href="">Magnam.</a>
        <a href="">Maxime.</a>
        <a href="">Atque!</a>
        <a href="">Eaque.</a> 
      </div>
      <div class="copyright">
        <strong>&copy; Veterkind Ltda. 2017</strong> / We sell medic & veterinary chairs.
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '~assets/sass/variables'
  
  .bottom
    text-align: center
    background-color: $darkest
    color: $light
    .bottom__inner  
      padding: 4rem 1rem
    .bottom__links
      margin-bottom: 1.25rem
      padding-bottom: 1.25rem
      border-bottom: 1px solid $darker
      text-transform: uppercase
      a
        color: $teal
        margin: 0 .75rem
    .copyright 
      color: $dark
      strong
        color: $light
</style>

