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
      Helping them take their website, and product ideas from zero to unique
      quality tech products.
      </p>
      </div>
    </v-flex>
  </v-layout>
</section>

  <section>
    <Logos />
  </section>

    <ContactInfo />
  <section>

  </section>
</v-content>
</template>

<script>
import Appheader from '../components/header';
import Logos from '../components/clientslogos';
import ContactInfo from '../components/contactInfo';

export default {
  head: {
    title: 'Alero Group | This Site is Under Construction',
    meta: [
      { hid: 'constructionHome', name: 'alero home under construction', content: 'Alero Group website is under construction' },

      { hid: 'google-site-verification', name: 'google-site-verification', content: 'B_5KQRyRmfrcsYNjxPFRH6SbJxuCSQUzegVL44RePfo'},
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'VFBmJ73rVpSlREwokm_IiOWVjsQITOr1Hb-_R9IGheo' }
    ]
  },
  asyncData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve({ name: 'world' })
    }, 1200)
  })
  },

  components: {
    Appheader,
    Logos,
    ContactInfo
  }
}
</script>


<style scoped>
body {
font-family: 'Montserrat', sans-serif;
}
.details {
  display:flex;
  flex-flow: column;
  position: relative;
  justify-content: center;
  align-content: center;
  align-items: center
}
.green_title{
   font-size: 55px;
   color: #3B6C39;
}

.information{
  font-size: 24px;
  width: 60rem;
  text-align: center;
  padding: 10px;
}
</style>

