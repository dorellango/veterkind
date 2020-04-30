<template>
  <div>
    <Nav />
    <Hero />
    <!-- isologo -->
    <div class="items-center justify-center container md:flex">
      <div class="mr-auto flex items-center md:mb-0 mb-4 mt-4 md:mt-0">
        <p class="tracking-wider text-grey-darker mr-4">
          Revisa <strong>la campaña</strong> en
        </p>
        <a
          class="opacity-75"
          href="https://www.osm.cl/categoria-producto/contingencia/"
        >
          <img
            class="align-bottom h-8"
            src="https://www.osm.cl/wp-content/uploads/2016/11/osm_logo.png"
            alt=""
          />
        </a>
      </div>
      <img
        src="https://www.osm.cl/wp-content/uploads/2020/03/corona-banner.png"
        alt="PLAN CORONAVIRUS"
        class="h-36 w-auto block"
      />
    </div>
    <!-- isologo -->
    <About />
    <Quality />
    <Featured />
    <ContactUs />
    <Bottom />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Featured from "~/components/Featured.vue";
import Nav from "~/components/Nav.vue";
import ContactUs from "~/components/ContactUs.vue";
import Bottom from "~/components/Bottom.vue";
import Quality from "~/components/Quality.vue";

export default {
  components: {
    Hero,
    About,
    Featured,
    ContactUs,
    Bottom,
    Quality,
    Nav
  }
};
</script>

<style lang="sass">
.home-block
  padding: 3rem 1rem
  .home-heading
    margin-bottom: 2.5rem
</style>
