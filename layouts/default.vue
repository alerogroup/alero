<template>
  <v-app dark>
    <v-content>
      <v-app-bar flat height="90" class="background hidden-md-and-down">
        <nuxt-link to="/">
          <img width="200" class="ml-12" :src="require('../static/icon.svg')">
        </nuxt-link>
        <v-spacer />
        <!-- <v-btn to="/" text>
          Home
        </v-btn>
        <v-btn to="/" text>
          About
        </v-btn>
        <v-btn to="/" text>
          Contact Us
        </v-btn>
        <v-btn to="/" text>
          Blog
        </v-btn> -->
      </v-app-bar>

      <v-app-bar flat height="90" class="background hidden-lg-and-up">
        <v-layout row align-center justify-center>
          <nuxt-link class="mt-4 ml-3" to="/">
            <img width="200" :src="require('../static/icon.svg')">
          </nuxt-link>
          <v-spacer />
          <v-menu class="px-auto" transition="slide-y-transition" :nudge-width="400">
            <template v-slot:activator="{ on }">
              <v-btn
                color="black"
                icon
                v-on="on"
              >
                <v-icon size="40">
                  bx bx-menu-alt-right
                </v-icon>
              </v-btn>
            </template>
            <v-list class="text-center">
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :to="item.path"
              >
                <v-list-item-title class="headline">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-layout>
      </v-app-bar>

      <v-content>
        <nuxt />
      </v-content>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home', path: '/' }
        // { title: 'About', path: '/' },
        // { title: 'Contacts', path: '/' },
        // { title: 'Blog', path: '/blog' }
      ]
    }
  }
}
</script>

<style scoped>
.background{
  background-color:#F2DF9E !important;
}
.v-btn:hover:before {
      background-color: transparent;
}
</style>
