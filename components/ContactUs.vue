<template>
  <div class="contact-us">
    <div class="container home-block">
      <div class="contact-us__inner">
        <span>Do  you wanna something special. Nice!</span> 
        <div class="contact-us__button">
          <a class="btn btn-p btn-lg box-sh" href=""> Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '~assets/sass/variables'

  .contact-us
    background-color: $lighter
    color: $grey
    .contact-us__inner
      display: flex
      justify-content: center
      align-items: center
      span
        display: block
        font-size: 1.5rem
      .contact-us__button
        margin-left: 1.25rem
  
</style>
