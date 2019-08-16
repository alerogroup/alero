<template>
  <v-app class="transparent">
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/footer/footer'

export default {
  /* eslint-disable */
  components: {
    Footer
  },
  }
</script>
