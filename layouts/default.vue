<template>
  <v-app dark>
    <v-content>
      <v-app-bar flat height="90" class="background">
        <img width="200" class="ml-12" :src="require('../static/icon.svg')">
      </v-app-bar>
      <v-content>
        <nuxt />
      </v-content>
    </v-content>
  </v-app>
</template>

<style scoped>
.background{
  background-color:#F2DF9E !important;
}
</style>
