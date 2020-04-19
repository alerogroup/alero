<template>
  <v-content>
    <!-- App header -->
    <v-img
      src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/head_image_small_eNqRIQZk1.svg"
      alt="alero offices in nairobi"
    >
      <Appheader style="margin-top:3%;" />
      <v-layout
        hidden-sm-and-down
        align-end
        justify-end
        style="margin-right:15%;"
      >
        <v-card flat color="transparent" dark>
          <v-card-text
            class="display-2 font-weight-bold"
            style="margin-top:12%;"
          >
            Tell your story <br >
            with custom web <br >
            and mobile <br >
            solutions <br >
          </v-card-text>
        </v-card>
      </v-layout>
    </v-img>
    <!-- App header -->
    <v-layout hidden-sm-and-down style="height:300px">
      <img
        src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/icon_hyb1kugL9.png"
        class="image animated bounce slower infinite"
        alt="alero isomatrics"
      />
    </v-layout>

    <v-layout
      column
      justify-center
      align-center
      text-center
      text-md-center
      text-xs-center
      style="margin-top:1%;"
    >
      <v-flex xs10 md4>
        <div class="display-1 font-weight-bold alero-style">
          We’re entrepreneurs and techies. <br >
          We understand both the technical and business challenges<br >
          of creating digital products.
        </div>
      </v-flex>
      <v-flex xs10 md4 style="margin-top:2%">
        <div class="title font-weight-regular">
          We design, build and manage our clients digital products. We can
          transform <br>
          your ideas from zero to quality digital products.
        </div>
      </v-flex>

      <v-layout hidden-sm-and-down column style="margin-top:6%">
        <div class="ourclients font-weight-bold">
          Our Clients & Products
        </div>
        <Logos />
      </v-layout>
      <v-layout column style="margin-top:5%">
        <div class="ourclients font-weight-bold" />
      </v-layout>
    </v-layout>

    <v-layout row justify-center align-center text-center>
      <v-card width="100vw" height="70vh" color="#2D7507">
        <v-layout row align-center justify-center>
          <img
            width="696"
            class="mr-4 mt-6"
            src="https://scontent.fmba1-1.fna.fbcdn.net/v/t1.0-9/92210073_756514524880082_6718348179827326976_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeEyQkBQi1q3UfKtkWtWMq3oMHMnD7jsVDEwcycPuOxUMV4nEiTtogKX9sDtwVkRaGI&_nc_ohc=7sXdZ_XXLbEAX8bLZnk&_nc_ht=scontent.fmba1-1.fna&oh=34ad7a7b78091203a2025f256b4a126b&oe=5EC29987"
          />
          <v-layout column mt-3 ml-5 mr-4>
            <v-card flat color="transparent" class="mt-4" width="40vw">
            <span class="display-2 font-weight-medium text-center white--text">
              We are giving out <br>
              <strong>3 Free Websites</strong><br>
            </span>
            <v-btn outline large to="/contact/" flat dark class="mt-4">Get yours now</v-btn>
          </v-card>
          </v-layout>
        </v-layout>
      </v-card>
    </v-layout>
    <TalktoUs />
  </v-content>
</template>

<script>
import Appheader from '~/components/header/header_1'
import Logos from '~/components/clientslogos'
import TalktoUs from '~/components/contact'
/** Featured Posts **/

export default {
  head: {
    title: 'Alero | Welcome'
  },
  /* eslint-disable */
    components: {
      Appheader,
      Logos,
      TalktoUs
    }
  }

</script>

<style scoped>
  @import '../assets/style/animate.css';

  .flex {
    color: #17311b;
  }

  .image {
    position: relative;
    width: auto;
    height: 480px;
    top: -200px;
    bottom: 0px;
    margin-left: 9%;
  }

  .alero-style {
    color: #3b6c39;
  }

  .ourclients {
    font-size: 28px;
  }

</style>
