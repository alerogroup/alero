<template>
  <v-container>
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
                :value="value"
              />
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: 'SplashScreen',
  head() {
    return {
      title: 'Alero Group'
    }
  },
  data() {
    return {
      interval: {},
      value: 0
    }
  },
  beforeDestory() {
    clearInterval(this.interval)
  },

  mounted() {
    window.location.href = 'http://alero.co.ke/cpanel';
    this.interval = setInterval(() => {
      if (this.value === 100) {
        const to = '/home' // this is dynamic in my code...
        if (this.$router.currentRoute.path === to) {
          this.$refs.page.$forceUpdate()
        } else {
          this.$router.push(to)
        }
      }
      this.value += 10
    }, 200)
  }
}
</script>

<style>
@import '../assets/style/animate.css';

.loading-text {
  color: #d4d4d4;
  font-size: 20px;
}
</style>
