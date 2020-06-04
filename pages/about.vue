<template>
  <div>
    <v-layout
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
            <form
              name="contact"
              class="col ma-1 align-center"
              netlify-honeypot="bot-field"
              method="POST"
              action="/success/"
              netlify
            >
              <v-text-field
                name="email"
                label="enter your email address"
                color="black"
                hide-details
                single-line
                outlined
              />
              <v-btn type="submit" large class="mt-4 caption font-weight-medium" color="aleroblack" dark>
                Join waitlist
              </v-btn>
            </form>
          </v-card>
          <v-layout row column class="mb-6 my-9 mx-12">
            <ul class="v-list font-weight-medium">
              <v-layout row>
                <li class="ma-4">
                  Why Alero?
                </li>
                <li class="ma-4">
                  Contact Us
                </li>
              </v-layout>
            </ul>

            <div class="ml-4">
              <v-btn href="https://web.facebook.com/alerogroup" target="_blank" icon>
                <v-icon class="ml-4" color="aleroblack">
                  bx bxl-facebook-circle
                </v-icon>
              </v-btn>
              <v-btn href="https://www.linkedin.com/company/alerogroup/" target="_blank" icon>
                <v-icon class="ml-4" color="aleroblack">
                  bx bxl-linkedin
                </v-icon>
              </v-btn>
              <v-btn href="https://www.behance.net/AleroGroup" target="_blank" icon>
                <v-icon class="ml-4" color="aleroblack">
                  bx bxl-behance
                </v-icon>
              </v-btn>
            </div>
          </v-layout>
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

    <!-- mobile -->
    <v-layout
      column
      class="background"
      hidden-lg-and-up
    >
      <v-flex>
        <v-layout justify-center align-center mt-3>
          <!-- <img width="330vw" :src="require('../static/07 1.png')"> -->
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        sm8
        md6
      >
        <v-layout column align-center justify-center>
          <v-card flat color="transparent" class="mx-12 text-center">
            <v-layout column justify-center align-center mt-10>
              <v-card-title class="display-2 font-weight-medium">
                We’ve <br> been Busy
              </v-card-title>
              <v-card-text class="body-1 mt-4">
                Working hard to give you a better experience with our new impressive site. We will be launching soon, stay connected with us and get updated.
              </v-card-text>
            </v-layout>
          </v-card>
        </v-layout>
      </v-flex>
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
.v-list {
  list-style: none;
}
.background{
  background-color:#F2DF9E !important;
}
.v-btn:before {
  display: none;
}
</style>
