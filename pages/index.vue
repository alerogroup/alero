<template>
<v-content>
  <section>
    <Appheader />
  </section>
  <section class="down">
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="details">
      <h1 class="green_title">We Provide Creative & Strategic Solutions</h1>
      <p class="information"> We design, build and manage our clients products.
      Helping them take their website, and product ideas from 0 to branded,
      quality tech products.
      </p>
      </div>
    </v-flex>
  </v-layout>

</section>
</v-content>
</template>

<script>
import Appheader from '../components/header';
import { resolve } from 'q';
export default {

  asyncData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve({ name: 'world' })
    }, 1200)
  })
  },

  components: {
    Appheader,
  }
}
</script>


<style scoped>
.down{
  
}
</style>

