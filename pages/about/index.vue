<template>
  <v-content>
    <Appheader style="margin-top:3%;" />
    <v-layout justify-center>
      <v-flex xs12 md5 fluid>
        <v-layout column justify-center align-center style="margin-top:10%;">
          <v-card flat color="transparent" style="margin-top:3%;">
            <v-card-text class="display-1 font-weight-medium">
              Alero is a Product Design Agency
            </v-card-text>
          </v-card>
          <v-card flat color="transparent">
            <v-card-text class="text-xs-center">
              We help businesses transform concepts to digital products. We
              believe the best digital solutions are built at the intersection
              of business strategy, brand strategy, available technology, and
              real user’s needs. We help you create a balanced approach by
              understanding the true needs of all influences – scalability,
              viability, and desirability.
            </v-card-text>
          </v-card>
        </v-layout>

        <v-layout column justify-center align-center style="margin-top:10%;">
          <v-card flat color="transparent" style="margin-top:3%;">
            <v-card-text class="display-1 font-weight-medium">
              A culture focused on quality
            </v-card-text>
          </v-card>
          <v-card flat color="transparent">
            <v-card-text class="text-xs-center">
              We believe in collaboration to deliver blissful experience for
              both our clients and our team. Our process and culture are defined
              by three core principles: empathy, effectiveness, innovation.
            </v-card-text>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
/* eslint-disable */
import Appheader from '~/components/header/header_1'

export default {
  head: {
    title: 'Alero | About us',
    meta: [
      {
        hid: 'description',
        name: 'alero home under construction',
        content: 'Alero is a Product Design Agency'
      },
       {
        hid: 'description',
        name: 'description',
        content: 'alero help businesses transform concepts to digital products. We believe the best digital solutions are built at the intersection of business strategy, brand strategy, available technology, and real user’s needs. We help you create a balanced approach by understanding the true needs of all influences – scalability, viability, and desirability.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'alero welcome page'
      },
    ]
  },
/* eslint-disable */
  components: {
    Appheader
  }

}
</script>
