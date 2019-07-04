<template>
  <v-layout style="margin-left:10rem;">
    <v-flex xs12 sm8 md6>
      <div class="contactInfo">
      <h1 class="green_title_small"> Ready to build the Tech solution?</h1>
      <p class="details">Get in touch for more information on our services.</p>
      <nuxt-link to="/contactus"><v-btn depressed large color="#3B6C39" round class="text-color"> Let's Talk</v-btn> </nuxt-link>

      </div>
    </v-flex>
  </v-layout>
</template>


<style scoped>

.contactInfo{
  display:flex;
  top: 100px;
  height: 300px;
  flex-flow: column;
  position: relative;
  bottom: 30px;
  left: 0;
  top: 260px;


}
.green_title_small {
   font-size: 34px;
   font-weight: 500;
   color: #000000;
}

.information{
  font-size: 24px;
  width: 60rem;
  text-align: center;
  padding: 10px;
}

.details{
  font-size: 19px;
}

.text-color{
  color: #FFF;
  font-weight: 500;
}
</style>

