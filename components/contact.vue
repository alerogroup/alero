<template>
  <v-content class="background">
    <v-layout column justify-center align-center class="margin-bottom:10%">
      <v-flex xs12 md4>
        <v-card flat color="transparent">
          <v-card-title class="display-1 font-weight-medium">
            Ready to build a Tech solution?
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card flat color="transparent">
          <v-card-text
            class="subtitle"
            text-lg-center
            text-md-center
            text-sm-center
          >
            Get in touch for more information on our services.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card flat color="transparent">
          <v-card-actions>
            <nuxt-link to="/contact" style="text-decoration:none">
              <v-btn
                class="subtitle    font-weight-bold"
                color="#3B6C39"
                large
                round
                dark
              >
                Let’s talk
              </v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<style scoped>
.background {
  background-color: #fafafa;
  height: 210px;
}
</style>
