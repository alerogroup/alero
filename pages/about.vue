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

    <v-layout justify-center style="margin-top:6%;">
      <v-flex xs12 md8 fluid>
        <!-- App section 1 -->
        <v-layout column align-center style="margin-top:10%;">
          <v-card flat color="transparent" style="margin-top:3%;">
            <v-card-text
              class=" green--text text--darken-4 display-1 font-weight-medium text-xs-center"
            >
              Alero is a Product Design Agency
            </v-card-text>
          </v-card>
          <v-card flat color="transparent">
            <v-card-text class="text-xs-center">
              We help businesses transform concepts to digital products. We
              believe the best digital solutions are built at the intersection
              of business strategy, brand strategy,available technology, and
              real user’s needs. We help you create a balanced approach by
              understanding the true needs of all influences – scalability,
              viability, and desirability.
            </v-card-text>
          </v-card>
        </v-layout>
        <!-- App section 1 -->

        <!-- App section 2 -->
        <v-layout hidden-sm-and-down style="margin-top:10%;">
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image1" />
              <v-card-title class="title green--text text--darken-4">
                Enhanced UX
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  Embed tools, custom websites & mobile app designs, user
                  friendly UI- that your customers enjoy, User-centric.
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image2" />
              <v-card-title class="title green--text text--darken-4">
                Social Media Marketing & SEO Experts
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  We are not just developers, we are marketers. Since we do SEO,
                  we implement best practices in SEO as we develop your
                  websites.
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image3" />
              <v-card-title class="title green--text text--darken-4">
                Fast & Efficient
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  Don't wait too long to get your digital solution. We usually
                  complete website & mobile development in 1.5 - 6 months.
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image4" />
              <v-card-title class="title green--text text--darken-4">
                Mobile-Friendly Design
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  All of the websites we build are mobile and tablet-friendly.
                  Your customers will be able to easily navigate your site on
                  their cell phones
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-layout>
        <!-- App section 2 -->

        <!-- App mobile section 2 -->
        <v-layout row wrap hidden-md-and-up style="margin-top:10%;">
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image1" />
              <v-card-title class="title green--text text--darken-4">
                Enhanced UX
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  Embed tools, custom websites & mobile app designs, user
                  friendly UI- that your customers enjoy, User-centric.
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image2" />
              <v-card-title class="title green--text text--darken-4">
                Social Media Marketing & SEO Experts
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  We are not just developers, we are marketers. Since we do SEO,
                  we implement best practices in SEO as we develop your
                  websites.
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image3" />
              <v-card-title class="title green--text text--darken-4">
                Fast & Efficient
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  Don't wait too long to get your digital solution. We usually
                  complete website & mobile development in 1.5 - 6 months.
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
          <v-card flat color="transparent">
            <v-layout column align-center text-xs-center>
              <img height="auto" :src="image4" />
              <v-card-title class="title green--text text--darken-4">
                Mobile-Friendly Design
              </v-card-title>
              <v-card-text>
                <div class="subtitle">
                  All of the websites we build are mobile and tablet-friendly.
                  Your customers will be able to easily navigate your site on
                  their cell phones
                </div>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-layout>
        <!-- App mobile section 2 -->
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs12 md7 fluid>
        <!-- App section 3 -->
        <v-layout
          column
          justify-center
          align-center
          text-xs-center
          style="margin-top:8%;"
        >
          <v-card flat color="transparent" style="margin-top:3%;">
            <v-card-text
              class="display-1 font-weight-medium green--text text--darken-4"
            >
              A culture focused on quality
            </v-card-text>
          </v-card>
          <v-card flat color="transparent">
            <v-card-text class="text-xs-center">
              We believe in collaboration to deliver blissful experience for
              both our clients and our team. Our process and culture are defined
              by three core principles: empathy, effectiveness, innovation.
            </v-card-text>
          </v-card>
        </v-layout>
      </v-flex>
      <!-- App section 3 -->
    </v-layout>

    <!-- App images -->
    <v-container hidden-sm-and-down style="max-width:830px;">
      <v-layout row justify-center align-center>
        <v-layout column style="margin-right:7%">
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/57ca72a0ff497eb25e138c0568af6e3c_cf8Fk4fLc.png"
              alt="Alero offices and team"
              width="320"
            />
          </v-flex>
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/094e3ec5bb12bafe7ebf511fcaae9c6a_q-grxs0Qo.png"
              alt="Alero offices and team"
              width="320"
            />
          </v-flex>
        </v-layout>
        <v-layout column>
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/3279c4e0b87172bc90311531c137fc0c_d-bO52z9J.png"
              alt="Alero offices and team"
              width="540"
            />
          </v-flex>
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/4c0f356cf249b3ad96ecbd8b3d1787cd_-DdW6c22A.png"
              alt="Alero offices and team"
              width="540"
            />
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
    <!-- App images -->

    <!-- App tablet images -->
    <v-container hidden-md-and-up style="max-width:530px;">
      <v-layout row justify-center align-center>
        <v-layout column style="margin-right:7%">
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/57ca72a0ff497eb25e138c0568af6e3c_cf8Fk4fLc.png"
              alt="Alero offices and team"
              width="200"
            />
          </v-flex>
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/094e3ec5bb12bafe7ebf511fcaae9c6a_q-grxs0Qo.png"
              alt="Alero offices and team"
              width="200"
            />
          </v-flex>
        </v-layout>
        <v-layout column>
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/3279c4e0b87172bc90311531c137fc0c_d-bO52z9J.png"
              alt="Alero offices and team"
              width="340"
            />
          </v-flex>
          <v-flex xs4 md5>
            <img
              src="https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/4c0f356cf249b3ad96ecbd8b3d1787cd_-DdW6c22A.png"
              alt="Alero offices and team"
              width="340"
            />
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
    <!-- App images -->
    <social style="margin-bottom:5%" />
  </v-content>
</template>

<script>
/* eslint-disable */
import Appheader from '~/components/header/header_1'
import social from '~/components/footer/connectSocial'

export default {
  data() {
    return {
      url:
        'https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/Group_427_ef2sZxcHR.svg',
      image1:
      'https://ik.imagekit.io/qpt2onjfe/alero/icons/noun_Pen_2297384_JCaFAdReT5.svg',
      image2:
      'https://ik.imagekit.io/qpt2onjfe/alero/icons/Component_35___1_KnepL4fcF.svg',
      image3:
      'https://ik.imagekit.io/qpt2onjfe/alero/icons/Component_34___1_iSsujPNt3c.svg',
      image4:
      'https://ik.imagekit.io/qpt2onjfe/alero/icons/Component_33___1_WvpthQbm_.svg'
    }
  },
  head: {
    title: 'Alero | About us',
    meta: [
      {
        hid: 'description',
        name: 'alero home under construction',
        content: 'Alero is a Product Design Agency'
      },
       {
        hid: 'description',
        name: 'description',
        content: 'alero help businesses transform concepts to digital products. We believe the best digital solutions are built at the intersection of business strategy, brand strategy, available technology, and real user’s needs. We help you create a balanced approach by understanding the true needs of all influences – scalability, viability, and desirability.'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'alero welcome page'
      },
    ]
  },
/* eslint-disable */
  components: {
    Appheader,
    social
  },
 /*  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 300)
    })
  } */
}
</script>

<style scoped>
.headline,
.display-1,
.display-2 {
  font-family: 'Montserrat', sans-serif !important;
  color: #17311B;
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

