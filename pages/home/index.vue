<template>
  <v-content>
    <v-img
      src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/head_image_small_eNqRIQZk1.svg"
      alt="alero offices in nairobi"
    >
      <Appheader style="margin-top:3%;" />
      <v-layout align-center>
        <img />
      </v-layout>
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
            We design, We build <br />
            digital products
          </v-card-text>
        </v-card>
      </v-layout>
    </v-img>
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
      text-lg-center
      text-md-center
      text-xs-center
      style="margin-top:1%;"
    >
      <v-flex xs10 md4>
        <div class="display-2 font-weight-bold alero-style">
          Providing Innovative, Creative & <br />
          Strategic Solutions
        </div>
      </v-flex>
      <v-flex xs10 md4 style="margin-top:2%">
        <div class="title font-weight-regular">
          We design, build and manage our clients digital products. We can
          transform <br />
          your ideas from zero to quality digital products.
        </div>
      </v-flex>

      <v-layout hidden-sm-and-down column style="margin-top:10%">
        <div class="ourclients font-weight-bold">
          Our Clients & Products
        </div>
        <Logos />
      </v-layout>
      <v-layout column style="margin-top:5%">
        <div class="ourclients font-weight-bold">
          Featured Vodcasts
        </div>
      </v-layout>
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
    title: 'Alero | Welcome',
    meta: [
      {
        hid: 'constructionHome',
        name: 'alero home under construction',
        content: 'Alero Group website is under construction'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Website design, UI/UX design, web applications'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'alero welcome page'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'B_5KQRyRmfrcsYNjxPFRH6SbJxuCSQUzegVL44RePfo'
      },

      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'VFBmJ73rVpSlREwokm_IiOWVjsQITOr1Hb-_R9IGheo'
      }
    ]
  },
/* eslint-disable */
  components: {
    Appheader,
    Logos,
    TalktoUs
  },
data() {
   //
},
 /*  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1500)
    })
  } */
}
</script>

<style scoped>
@import '../../assets/style/animate.css';
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
