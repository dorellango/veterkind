<template>
  <div class="relative" id="featured" >
    <div class="container">
      <div class="py-16">
        <div class="mb-16 heading-pattern absolute pin-l pin-t pin-r h-72 flex justify-center items-center flex-col">
          <span class="text-teal-lighter">Vitrina</span>
          <h1 class="text-teal-lightest">Productos Destacados</h1>
        </div>
        <div class="flex flex-wrap mt-36" id="products">
          <a :href="`/products/${product.slug}`" v-for="(product, index) in products" :key="index" class="block w-full md:w-1/3 px-4">
            <div class="shadow-md relative">
              <span v-show="product.is_new"
                class="absolute pin-t pin-l mt-2 ml-2 bg-orange text-xs rounded uppercase text-orange-lightest px-2 py-1/2">
                nuevo
              </span>
              <img class="align-bottom" :src="'/' + product.image" :alt="product.title">
            </div>
            <div class="border-4 border-grey-lighter py-8 px-3 transition-3 mx-4 -mt-4 mb-8 md:mb-0">
              <h4 class="text-grey-darker font-bold text-center mb-2 font-heading" v-text="product.title">.</h4>
              <p class="block tracking-wide text-sm text-center text-grey" v-text="product.short_description"></p>
            </div>
          </a>
        </div>
        <div class="text-center mt-12">
          <nuxt-link to="/products" class="btn btn-a">Ver catálogo</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from './products.js'

export default {
  data () {
    return {
      products: products.slice(0, 3)
    }
  },
  mounted () {
    document.querySelector('#products').addEventListener('contextmenu', event => event.preventDefault())
  }
}
</script>
