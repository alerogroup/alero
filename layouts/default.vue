<template>
  <v-app>
    <v-content>
      <v-app-bar height="90" color="background">
        <img width="200" class="ml-12" :src="require('../static/icon.svg')">
      </v-app-bar>
      <v-content>
        <nuxt />
      </v-content>
    </v-content>
  </v-app>
</template>
