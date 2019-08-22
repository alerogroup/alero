<template>
  <v-content>
    <!-- App header -->
    <Appheader style="margin-top:3%;" />
    <v-layout hidden-md-and-down>
      <v-img :src="url" class="Image">
        <v-layout align-center>
          <img />
        </v-layout>
      </v-img>
    </v-layout>
    <!-- App header -->

    <v-layout
      column
      justify-center
      align-center
      align-content-center
      text-xs-center
      class="mainPage"
    >
      <v-flex xs12 md9>
        <img
          src="../assets/img/Webp.net-gifmaker.gif"
          alt="alero error gif"
          height="90"
          class="ma-5"
        />
        <div
          class="display-2 orange--text text--accent-3 font-weight-bold title-top"
        >
          Oups!
        </div>
      </v-flex>
      <v-flex xs12 md5>
        <v-card flat color="transparent" style="margin-top:5%;">
          <v-card-text
            class="subtitle
            text-xs-center
            font-weight-medium"
          >
            Sorry, the page your looking for does not exist,or the link is
            broken.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md5>
        <v-card flat color="transparent">
          <v-layout row>
            <v-card-text>
              Go back to the home page
            </v-card-text>
            <v-card-actions>
              <v-btn outline to="/home" style="margin-left:7%;">
                Home
              </v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 md5 ma-4>
        <social style="margin-top:10%" />
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
import social from '~/components/footer/connectSocial.vue'
import Appheader from '~/components/header/header_1.vue'

export default {
  name: 'ErrorPage',
  components: {
    social,
    Appheader
  },
  head: {
    title: 'Alero | Error'
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      url:
        'https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/Group_427_ef2sZxcHR.svg'
    }
  }
}
</script>

<style scoped>
.headline,
.display-1,
.display-2 {
  font-family: 'Open Sans', sans-serif !important;
}

.title-top {
  margin-top: 15%;
}

.Image {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 553px;
  width: 1440px;
}

.mainPage {
  margin-top: 8%;
  position: relative;
  top: 0;
  bottom: 0;
  z-index: 1;
}
</style>
