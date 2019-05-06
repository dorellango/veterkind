<template>
  <div class="hero h-screen relative -mt-16">
    <div class="hero__image absolute bg-cover pin"></div>
    <div class="container flex items-center h-full p-6">
      <div class="max-w-md animated fadeIn">
        <p class="text-3xl text-teal-lightest">Bienvenidos a <strong>Veterkind</strong></p>
        <p class="text-md tracking-wide text-teal-lightest mb-6">Una empresa de OSM Ltda.</p>
        <h1
          class="mb-6 text-5xl text-teal-lightest">
            Muebles clínicos a medida.
        </h1>
        <div>
          <a href="#" @click.prevent="jumpTo('.featured')" class="btn btn-a">Productos</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jump from 'jump.js'

export default {
  methods: {
    jumpTo (target) {
      jump(target)
    }
  }
}
</script>
