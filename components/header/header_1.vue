<template>
  <v-flex xs12 fluid>
    <v-toolbar flat color="transparent">
      <v-toolbar-title>
        <nuxt-link to="/home">
          <img src="../../assets/img/logo.svg" alt="alero logo" height="90" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-layout justify-end hidden-xs-only>
        <nuxt-link to="/about" style="text-decoration:none;" no-prefetch>
          <v-btn flat class="title font-weight-medium text-capitalize">
            About
          </v-btn>
        </nuxt-link>

        <nuxt-link to="/vodcast" style="text-decoration:none;">
          <v-btn flat class="title font-weight-medium text-capitalize">
            Vodcast
          </v-btn>
        </nuxt-link>
      </v-layout>

      <nuxt-link to="/contact" style="text-decoration:none;">
        <v-btn
          large
          dark
          color="#3B6C39"
          class="font-weight-medium text-capitalize border2"
        >
          Lets talk
        </v-btn>
      </nuxt-link>
    </v-toolbar>
  </v-flex>
</template>

<style>
.border2 {
  border-radius: 7px;
}
</style>
