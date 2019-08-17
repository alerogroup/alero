<template>
  <v-container grid-list-xs>
    <v-layout justify-center align-center column>
      <v-card flat>
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/">Home page</nuxt-link>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
