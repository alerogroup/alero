<template>
  <v-content>
    <v-layout column justify-center align-center align-content-center>
      <v-flex xs12 md9 style="margin-top:25%;">
        <img src="../assets/img/logo.svg" alt="alero logo" height="90" />
      </v-flex>
      <v-flex xs12 md5>
        <v-card flat style="margin-top:5%;">
          <v-card-text class="headline font-weight-medium">
            Sorry, the page your looking for does not exist,<br />
            Or the link is broken...
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md5>
        <v-card flat>
          <v-layout row>
            <v-card-text>
              Go back to the home page
            </v-card-text>
            <v-card-actions>
              <v-btn outline to="/home" style="margin-left:7%;"> Home </v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
export default {
  name: 'error-page',
  head: {
    title: 'Alero | Error'
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
