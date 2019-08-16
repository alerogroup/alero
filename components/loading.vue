<template>
  <v-container v-if="loading">
    <v-content style="margin-top:20%;">
      <v-layout justify-center>
        <v-flex xs12 md4>
          <v-layout column justify-center align-center style="margin-top:10%;">
            <v-card flat color="transparent">
              <img
                contain
                height="auto"
                src="../assets/img/loading.png"
                width="80"
                class="animated flip infinite loading"
              />
            </v-card>
            <v-card flat color="transparent" style="margin-top:3%;">
              <v-card-text>
                <div class="loading-text headline">
                  Loading...
                </div>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
@import '../assets/style/animate.css';

.loading-text {
  color: #d4d4d4;
  font-size: 20px;
}
</style>
