<template>
  <div>
    <v-layout
      row
      class="background"
      style="height:100vh"
      hidden-md-and-down
    >
      <v-layout column align-center justify-center>
        <v-flex
          xs12
          sm8
          md6
          class=""
        >
          <v-card flat color="transparent" class="mx-12">
            <v-card-title class="display-4 font-weight-medium">
              We’ve <br>Been Busy
            </v-card-title>
            <v-card-text class="body mt-4">
              Working hard to give you a better experience with our new impressive site. We will be launching soon, stay connected with us and get updated.
            </v-card-text>
            <form name="contact" class="row ma-4 align-center" netlify>
              <v-text-field
                name="email"
                label="enter your email address"
                color="black"
                hide-details
                single-line
                outlined
              />
              <v-btn type="submit" x-large class="ml-4 caption font-weight-medium" color="aleroblack" dark>
                Join waitlist
              </v-btn>
            </form>
          </v-card>
        </v-flex>
      </v-layout>
      <v-flex
        xs12
        sm8
        md6
        class=""
      >
        <v-layout row wrap hidden-md-and-down>
          <img class="pr-12" :src="require('../static/07 1.png')">
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout
      column
      class="background"
      style="height:100vh"
      hidden-lg-and-up
    >
      <v-flex>
        <v-layout justify-center align-center>
          <img width="500vw" :src="require('../static/07 1.png')">
        </v-layout>
      </v-flex>
      <v-layout column wrap align-center>
        <v-flex
          xs12
          sm8
          md6
          class=""
        >
          <v-card flat color="transparent" class="mx-12 text-center">
            <v-card-title class="display-3 font-weight-medium">
              We’ve been Busy
            </v-card-title>
            <v-card-text class="body mt-4">
              Working hard to give you a better experience with our new impressive site. We will be launching soon, stay connected with us and get updated.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
// import IconifyIcon from '@iconify/vue'
// import bxlBehance from '@iconify/icons-bx/bxl-behance'

// export default {
//   components: {
//     IconifyIcon
//   },
//   data () {
//     return {
//       icons: {
//         bxlBehance
//       }
//     }
//   }
// }
</script>
<style lang="css" scoped>
.display-4 {
  font-size: 90px !important;
 line-height: 102.2%;
}
.body {
  width: 473px;
  font-size: 18px;
  line-height: 133.7%;
  color: #405544;
}
</style>
