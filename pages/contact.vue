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
            <v-layout column justify-center align-center>
              <v-card-title
                class="green--text text--darken-4 display-1 font-weight-medium text-xs-center"
              >
                Contact us
              </v-card-title>
              <!--      <form ref='form' action="https://formsubmit.co/joshuakimbareeba@gmail.com" method="post">
         <v-text-field
      name="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      name="email"
      :rules="emailRules"
      label="E-mail" 
      type="email"
      required
    ></v-text-field>-->
              <!--  <input class="inputline" type="text" name="name">
    <input class="inputline"  type="email" name="email">
    <input class="inputline"  type="text" name="tel">
        <v-btn color="#3B6C39"
          class="font-weight-medium text-capitalize border2" type="submit">Send</v-btn> 

          </form>-->
              <v-card-text class="title ma-2 text-center para">
                If you have any question or inquiries you can contact us via
                <a
                  class="green--text text--darken-3 font-weight-bold links pt-1 pb-1"
                  href="mailto:joshuakimbareeba@gmail.com"
                >info@alero.co.ke</a>
                or <br ><br>
                call us on
                <a
                  class="green--text text--darken-3  font-weight-bold links pt-1 pb-1"
                  href="tel:+254729245657"
                >0729245657</a>, or
                <a
                  class="green--text text--darken-3 font-weight-bold links"
                  href="tel:+254790309898"
                >0790309898</a>
              </v-card-text>

              <v-card-text />
            </v-layout>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
/* eslint-disable */
  import Appheader from '~/components/header/header_1'

  export default {

    data: () => ({
      url: 'https://ik.imagekit.io/qpt2onjfe/alero/WelcomePage/Group_427_ef2sZxcHR.svg',
    }),
    //----------------
    head: {
      title: 'Alero Group |  us',
      meta: [{
        hid: 'constructionHome',
        name: 'alero home under construction',
        content: 'Alero Group website is under construction'
      }]
    },

    /* eslint-disable */
    components: {
      Appheader
    },
    /* 
      Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'stephaniekirathe@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ) */

  }

</script>


<style scoped>
  input.inputline {
    border: 1px solid black;
  }

  a.links {
    text-decoration: none;
  }

.title-top {
  margin-top: 15%;
}

.Image {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 65vh;
  width: 100vw;
}

.mainPage {
    margin-top: 8%;
    position: relative;
    top: 0;
    bottom: 0;
    z-index: 1;
  }

</style>
