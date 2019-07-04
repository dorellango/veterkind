<template>
  <div>
    <Nav/>
    <div class="relative py-8 px-3">
      <div class="heading-pattern absolute pin-l pin-t pin-r h-48 md:h-64 flex justify-center items-center flex-col">
        <span class="text-teal-lighter">/Veterinaria</span>
        <h1 class="text-teal-lightest">{{ product.title }}</h1>
      </div>
      <div class="container">
          <div style="margin-top:180px"
                class="relative z-10">
                <div class="text-center">
                    <img
                        class="align-bottom border-white border-2 w-full rounded"
                        :src="'/' + product.image_big"
                        :alt="product.title">
                </div>
                <div class="content mt-6 px-4" v-html="content.default"></div>
                <!-- Where buy? -->
                <div class="border-t border-dashed pt-8 mt-8 px-4">
                    <a class="btn btn-a" :href="product.buy_url ? product.buy_url : 'mailto:ventas@osm.cl'"
                      :target="product.buy_url ? '_blank' : '_self'"
                      v-text="product.buy_url ? 'Comprar :)' : 'Cotizar'">Comprar :)</a>
                </div>
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
  async asyncData ({params}) {
    const fileContent = await import(`../../content/${params.slug}.md`)
    return {
      content: fileContent
    }
  },
  data () {
    return {
      products: products,
      slug: this.$route.params.slug
    }
  },
  components: {
    Nav,
    Bottom
  },
  computed: {
    product () {
      return this.products.find(product => product.slug === this.slug)
    }
  }
}
</script>
<style lang="scss">
    .content {
        p {
          @apply .text-grey-dark .tracking-wide .mb-4;
        }
        ul {
            margin-left: 0;
            li {
                @apply .text-grey-dark .mb-2 .tracking-wide
            }
        }
    }
</style>
