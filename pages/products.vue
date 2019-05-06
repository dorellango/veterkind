<template>
  <div>
    <Nav/>
    <div class="relative py-8 px-3 products">
      <div class="heading-pattern absolute pin-l pin-t pin-r h-48 md:h-64 flex justify-center items-center flex-col">
        <span class="text-teal-lighter">Vitrina 👌</span>
        <h1 class="text-teal-lightest">Catálogo completo</h1>
      </div>
      <div class="container">
        <div style="margin-top: 300px;"  id="products"> <!-- ON MOBILE -->
          <div v-for="(product, index) in products" :key="index" class="relative flex flex-wrap mb-24">
            <div class="products-thumb flex-no-shrink w-full md:w-1/3 shadow mb-6 md:mb-0">
              <img class="align-bottom" :src="product.image" alt="">
            </div>
            <div class="w-full pl-0 md:pl-8 md:w-2/3">
              <div class="text-xs text-grey">
                <div class="flex">
                  <p class="tracking-wide text-sm mr-2">Veterinaria</p> <!-- TODO add custom category -->
                  <p v-show="product.is_new" class="bg-orange text-xs rounded uppercase text-orange-lightest px-2 py-1/2">nuevo</p>
                </div>
              </div>
              <h2 class="text-grey-darkest mb-2" v-text="product.title"></h2>
              <div class="text-grey-dark">
                <p class="text-justify" v-text="product.description"></p>
                <a class="mt-4 text-teal-lightest px-2 py-1 rounded bg-teal text-xs tracking-wide inline-flex items-center" href="">
                  <svg class="h-3 w-3 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>
                  Descargar Ficha
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Where buy? -->

        <div class="border-t border-dashed pt-8 mt-8">
          <p class="text-grey tracking-wide mb-8">Encuentra nuestros productos en:</p>
            <a href="https://www.osm.cl/tienda?s=veterkind&post_type=product">
              <img class="align-bottom h-16 opacity-25" src="https://www.osm.cl/wp-content/uploads/2016/11/osm_logo.png" alt="">
            </a>
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
  mounted() {
    document.querySelector('#products').addEventListener('contextmenu', event => event.preventDefault());
  },
  components: {
    Nav,
    Bottom
  }
}
</script>
