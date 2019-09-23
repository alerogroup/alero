<template>
  <v-content>
    <Appheader style="margin-top:2%;" />
    <v-layout justify-center>
      <v-flex xs12 md4>
        <v-layout column justify-center align-center style="margin-top:10%;">
          <v-card flat color="transparent"  style="margin-top:3%;">
            <v-layout column justify-center align-center>
     
            <v-card-title class="display-1">
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
           <v-card-text>
             If you have any question or inquiries you can contact us via  <a class="green--text text--darken-3 font-weight-bold links" href="mailto:joshuakimbareeba@gmail.com">info@alero.co.ke</a>
             or call us on <a class="green--text text--darken-3  font-weight-bold links" href="tel:+254729245657">0729245657</a>, or <a class="green--text text--darken-3 font-weight-bold links" href="tel:+254790309898">0790309898</a>
           </v-card-text>

          <v-card-text>
          
          </v-card-text>
                
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
      // valid: true,
      // name: '',
      // nameRules: [
      //   v => !!v || 'Name is required',
      // ],
      // email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
      }),
  //----------------
  head: {
    title: 'Alero Group | About us',
    meta: [
      {
        hid: 'constructionHome',
        name: 'alero home under construction',
        content: 'Alero Group website is under construction'
      }]
 /*   script: [
     {
       type:'text/javascript', src: "https://smtpjs.com/v3/smtp.js", async: false, body: true
     } */
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
 a.links{
   text-decoration: none;
 }
</style>