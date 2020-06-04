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
          <v-card class="pa-4 elevation-16 align-center">
            <v-card-title primary-title class="display-4 ml-5 mb-5 font-weight-thin text-center">
              Thank <br>
              You!
            </v-card-title>
            <v-card-text class="subtitle-1 text-center">
              Your form submission has been received.
            </v-card-text>
            <div class="">
              <v-btn to="/" target="_blank" class="aleroblack--text mx-4" icon>
                <v-icon class="ml-4" color="aleroblack">
                  bx bx-chevron-left
                </v-icon>
                Back
              </v-btn>
            </div>
          </v-card>
          <div class="mt-12 text-center mr-6">
            <span class="ml-3 font-weight-medium">Follow Us</span> <br>
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
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
export default {

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
</style>
