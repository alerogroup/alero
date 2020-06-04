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
          class="align-center justify-center"
        >
          <v-card class="pa-4 elevation-10 align-center">
            <v-card-title primary-title class="display-4 ml-5 mb-5 font-weight-thin text-center">
              Thank <br>
              You!
            </v-card-title>
            <v-card-text class="subtitle-1 text-center">
              Your form submission has been received.
            </v-card-text>
            <div class="" />
          </v-card>

          <v-btn to="/" target="_blank" class="aleroblack--text mx-4" icon>
            <v-icon class="ml-4" color="aleroblack">
              bx bx-chevron-left
            </v-icon>
            Back to the Homepage
          </v-btn>

          <div class="mt-12 text-center mr-6">
            <span class="ml-6 mt-5 display-1 font-weight-medium">Follow Us</span> <br>
            <v-btn class="mt-4" href="https://web.facebook.com/alerogroup" target="_blank" icon>
              <v-icon size="30" class="" color="aleroblack">
                bx bxl-facebook-circle
              </v-icon>
            </v-btn>
            <v-btn class="mt-4" href="https://www.linkedin.com/company/alerogroup/" target="_blank" icon>
              <v-icon size="30" class="ml-6" color="aleroblack">
                bx bxl-linkedin
              </v-icon>
            </v-btn>
            <v-btn class="mt-4" href="https://www.behance.net/AleroGroup" target="_blank" icon>
              <v-icon size="30" class="ml-10" color="aleroblack">
                bx bxl-behance
              </v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
export default {
  created () {
    // setTimeout(
    //   function () {
    //     this.$store.$router.push({ path: '/' })
    //   },
    //   9000
    // )
  }
}
</script>

<style>
.display-4 {
  font-size: 100px !important;
 line-height: 102.2%;
}
.background{
  background-color:#F2DF9E !important;
}
.v-btn:before {
  display: none;
}
</style>
