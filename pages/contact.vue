<template>
  <div>
    <Nav/>
      <div class="contact">
        <div class="">
          <gmap-map
            :center="{lat:-33.4512524, lng:-70.5579715}"
            :zoom="15"
            map-type-id="terrain"
            style="width: 100%; height: 100vh"
          >
            <gmap-marker
              :position="{lat:-33.4512524, lng:-70.5579715}"
              :clickable="true"
            ></gmap-marker>
          </gmap-map>
          <div class="contact__info bg-teal text-teal-lightest py-8 pattern-bg">
            <div class="container">
              <div class="columns">
                <div class="column is-one-third">
                  <div class="contact__option flex justify-center">
                    <div class="contact__body">
                      <h4 class="font-heading mb-4 text-teal-lighter">Información</h4>
                      <ul class="list-reset">
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-6 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/></svg>
                          +562 27891356
                          </li>
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z'/></svg>
                          <a class="text-teal-lighter" href="mailto:contacto@osm.cl">contacto@osm.cl</a>
                        </li>
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-7 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M4 9.9A5.002 5.002 0 0 1 5 0a5 5 0 0 1 1 9.9V19a1 1 0 0 1-2 0V9.9zM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' /></svg>
                          Clorinda Henríquez 80, La Reina.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column is-one-third">
                  <div class="contact__option flex justify-center">
                    <div class="contact__body">
                      <h4 class="font-heading mb-4 text-teal-lighter">General</h4>
                      <ul class="list-reset">
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-6 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/></svg>
                          +562 32299483
                          </li>
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z'/></svg>
                          <a class="text-teal-lighter" href="mailto:jbarahona@osm.cl">jbarahona@osm.cl</a>
                        </li>
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M11 9h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v5zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'/></svg>
                          10:00 - 18:00 hrs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column is-one-third">
                  <div class="contact__option flex justify-center">
                    <div class="contact__body">
                      <h4 class="font-heading mb-4 text-teal-lighter">Ventas</h4>
                      <ul class="list-reset">
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-6 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/></svg>
                          +569 90300135
                          </li>
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z'/></svg>
                          <a class="text-teal-lighter" href="mailto:jbarahona@osm.cl">jbarahona@osm.cl</a>
                        </li>
                        <li class="flex items-center mb-4">
                          <svg class="h-4 w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d='M11 9h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v5zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'/></svg>
                          10:00 - 18:00 hrs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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

export default {
  components: {
    Nav,
    Bottom,
  }
}
</script>
