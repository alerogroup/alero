<template>
  <v-layout>
    <v-flex xs12 md4>
      <v-hover v-slot:default="{ hover }">
        <v-card
          width="300px"
          :elevation="hover ? 12 : 2"
          style="margin-top:5%;"
        >
          <v-card-media :src="image" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline mb-0 green--text text--darken-4">
                title
              </div>
              <div class="text-uppercase">
                type
              </div>
              <div ">description</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn block outline color="green lighten-1" dark>
              watch now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      image:
        'https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/3279c4e0b87172bc90311531c137fc0c_d-bO52z9J.png'
    }
  }
}
</script>
