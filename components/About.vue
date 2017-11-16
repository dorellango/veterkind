<template>
  <div class="about-us">
    <div class="container home-block about-us__inner">
      <div class="home-heading">
        <span class="subtitle">Una breve</span>
        <h1 class="title">Historia</h1>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div class="about-us__body">
            <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing elit. Culpa deserunt pariatur, cum consequuntur architecto aspernatur!</p>     
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deserunt, excepturi tempora tenetur necessitatibus expedita adipisci omnis doloremque, neque rerum commodi esse ullam unde?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error impedit libero quaerat numquam sint repudiandae et. Dolorem molestiae cupiditate exercitationem consequuntur ratione suscipit vero fuga odit ipsa porro accusamus quaerat iusto, blanditiis corrupti veritatis.</p>
          </div>
        </div>
        <div class="column is-half">
          <div class="about-us__image">
            <div class="thumb">
              <img class="box-sh" src="~static/about-us.jpg" alt="About Us">
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<style lang="sass">
  @import "~assets/sass/variables"

  .about-us
    background-color: $lighter
    color: $grey
    .about-us__inner
      .title
        color: $darker
      .about-us__body strong
        color: $dark
      .about-us__image
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        .thumb
          position: relative
          &:after
            content: ''
            background-color: $teal
            top: -30px
            left: 30px
            right: -30px
            bottom: 30px
            position: absolute
          img
            position: relative
            z-index: 1
            width: 350px
            height: auto
            display: block
          
</style>
