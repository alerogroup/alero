<template>
  <v-app class="transparent">
    <v-content>
      <nuxt ref="page" />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/footer/footer'

export default {
  components: {
    Footer
  }
}
</script>
